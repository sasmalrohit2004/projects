const asyncHandler = require('express-async-handler');
const Cart = require('../models/Cart');
let Product;
try {
  Product = require('../models/Product');
} catch (err) {
  Product = null;
}

// @desc    Get current user's cart
// @route   GET /api/cart
// @access  Private
const getCart = asyncHandler(async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id });
  res.json(cart || { items: [] });
});

// @desc    Add item to cart
// @route   POST /api/cart
// @access  Private
const addItemToCart = asyncHandler(async (req, res) => {
  const { product: productId, qty = 1 } = req.body;
  if (!productId) {
    res.status(400);
    throw new Error('Product id is required');
  }

  let productData = {};
  if (Product) {
    const prod = await Product.findById(productId);
    if (!prod) {
      res.status(404);
      throw new Error('Product not found');
    }
    productData = { name: prod.name, image: prod.image, price: prod.price };
  } else {
    // If Product model not present, allow client to pass name/image/price in body
    productData = {
      name: req.body.name || 'Unknown',
      image: req.body.image || '/images/placeholder.png',
      price: req.body.price || 0,
    };
  }

  let cart = await Cart.findOne({ user: req.user._id });
  if (!cart) {
    cart = new Cart({ user: req.user._id, items: [] });
  }

  const itemIndex = cart.items.findIndex((i) => i.product.toString() === productId);
  if (itemIndex > -1) {
    // update qty
    cart.items[itemIndex].qty = cart.items[itemIndex].qty + qty;
  } else {
    cart.items.push({ product: productId, qty, ...productData });
  }

  await cart.save();
  res.status(201).json(cart);
});

// @desc    Update item qty
// @route   PUT /api/cart/items/:productId
// @access  Private
const updateItemQty = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const { qty } = req.body;

  if (typeof qty !== 'number' || qty < 0) {
    res.status(400);
    throw new Error('Invalid qty');
  }

  const cart = await Cart.findOne({ user: req.user._id });
  if (!cart) {
    res.status(404);
    throw new Error('Cart not found');
  }

  const itemIndex = cart.items.findIndex((i) => i.product.toString() === productId);
  if (itemIndex === -1) {
    res.status(404);
    throw new Error('Item not found in cart');
  }

  if (qty === 0) {
    cart.items.splice(itemIndex, 1);
  } else {
    cart.items[itemIndex].qty = qty;
  }

  await cart.save();
  res.json(cart);
});

// @desc    Remove item from cart
// @route   DELETE /api/cart/items/:productId
// @access  Private
const removeItem = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const cart = await Cart.findOne({ user: req.user._id });
  if (!cart) {
    res.status(404);
    throw new Error('Cart not found');
  }

  cart.items = cart.items.filter((i) => i.product.toString() !== productId);
  await cart.save();
  res.json(cart);
});

// @desc    Clear cart
// @route   DELETE /api/cart
// @access  Private
const clearCart = asyncHandler(async (req, res) => {
  await Cart.findOneAndDelete({ user: req.user._id });
  res.json({ message: 'Cart cleared' });
});

module.exports = {
  getCart,
  addItemToCart,
  updateItemQty,
  removeItem,
  clearCart,
};
