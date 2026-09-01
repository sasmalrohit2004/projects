const asyncHandler = require('express-async-handler');
const Order = require('../models/Order');
const Cart = require('../models/Cart');
let User;
try { User = require('../models/User'); } catch (e) { User = null; }

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addOrder = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    clearCart: shouldClearCart = false,
  } = req.body;

  if (!orderItems || orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
  }

  const order = new Order({
    user: req.user._id,
    orderItems,
    shippingAddress,
    paymentMethod,
    taxPrice: taxPrice || 0,
    shippingPrice: shippingPrice || 0,
    totalPrice: totalPrice || 0,
  });

  const createdOrder = await order.save();

  if (shouldClearCart) {
    try {
      await Cart.findOneAndDelete({ user: req.user._id });
    } catch (err) {
      // non-fatal
      console.warn('Failed to clear cart after order creation', err.message);
    }
  }

  res.status(201).json(createdOrder);
});

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate('user', 'name email');

  if (!order) {
    res.status(404);
    throw new Error('Order not found');
  }

  // allow owner or admin
  if (order.user._id.toString() !== req.user._id.toString() && !req.user.isAdmin) {
    res.status(403);
    throw new Error('Not authorized to view this order');
  }

  res.json(order);
});

// @desc    Update order to paid
// @route   PUT /api/orders/:id/pay
// @access  Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    res.status(404);
    throw new Error('Order not found');
  }

  // allow owner or admin
  if (order.user.toString() !== req.user._id.toString() && !req.user.isAdmin) {
    res.status(403);
    throw new Error('Not authorized to update this order');
  }

  order.isPaid = true;
  order.paidAt = Date.now();
  order.paymentResult = {
    id: req.body.id,
    status: req.body.status,
    update_time: req.body.update_time,
    email_address: req.body.payer?.email_address || req.body.email_address,
  };

  // update status if present
  const updatedOrder = await order.save();
  res.json(updatedOrder);
});

// @desc    Update order to delivered
// @route   PUT /api/orders/:id/deliver
// @access  Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    res.status(404);
    throw new Error('Order not found');
  }

  order.isDelivered = true;
  order.deliveredAt = Date.now();

  const updatedOrder = await order.save();
  res.json(updatedOrder);
});

// @desc    Cancel order (owner or admin)
// @route   PUT /api/orders/:id/cancel
// @access  Private (owner) or Admin
const cancelOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    res.status(404);
    throw new Error('Order not found');
  }

  if (order.user.toString() !== req.user._id.toString() && !req.user.isAdmin) {
    res.status(403);
    throw new Error('Not authorized to cancel this order');
  }

  order.isCancelled = true;
  // optionally refund logic placeholder
  const updatedOrder = await order.save();
  res.json(updatedOrder);
});

// @desc    Get logged in user's orders
// @route   GET /api/orders/myorders
// @access  Private
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
});

// @desc    Get all orders (admin) with pagination and filters
// @route   GET /api/orders
// @access  Admin
const getOrders = asyncHandler(async (req, res) => {
  let { page = 1, limit = 20, status, user } = req.query;
  page = Number(page);
  limit = Number(limit);

  const filter = {};
  if (status) {
    const s = status.toLowerCase();
    if (s === 'paid') filter.isPaid = true;
    else if (s === 'unpaid') filter.isPaid = false;
    else if (s === 'delivered') filter.isDelivered = true;
    else if (s === 'undelivered') filter.isDelivered = false;
    else if (s === 'cancelled') filter.isCancelled = true;
  }
  if (user) filter.user = user;

  const total = await Order.countDocuments(filter);
  const orders = await Order.find(filter)
    .populate('user', 'id name email')
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(limit);

  res.json({ orders, page, pages: Math.ceil(total / limit), total });
});

module.exports = {
  addOrder,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  cancelOrder,
  getMyOrders,
  getOrders,
};
