const express = require('express');
const router = express.Router();
const {
  addOrder,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  cancelOrder,
  getMyOrders,
  getOrders,
} = require('../controllers/orderController');
const { protect, admin } = require('../middleware/authMiddleware');

// Create order and list (admin)
router.route('/').post(protect, addOrder).get(protect, admin, getOrders);

// Get logged in user's orders
router.route('/myorders').get(protect, getMyOrders);

// Get order by id
router.route('/:id').get(protect, getOrderById);

// Update order to paid
router.route('/:id/pay').put(protect, updateOrderToPaid);

// Update order to delivered (admin)
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered);

// Cancel order (owner or admin)
router.route('/:id/cancel').put(protect, cancelOrder);

module.exports = router;
