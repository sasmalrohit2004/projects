const express = require('express');
const router = express.Router();
const {
  addOrder,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
} = require('../controllers/orderController');
const { protect, admin } = require('../middleware/authMiddleware');

// Create order
router.route('/').post(protect, addOrder).get(protect, admin, getOrders);

// Get logged in user's orders
router.route('/myorders').get(protect, getMyOrders);

// Get order by id
router.route('/:id').get(protect, getOrderById);

// Update order to paid
router.route('/:id/pay').put(protect, updateOrderToPaid);

module.exports = router;
