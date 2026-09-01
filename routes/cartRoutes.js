const express = require('express');
const router = express.Router();
const {
  getCart,
  addItemToCart,
  updateItemQty,
  removeItem,
  clearCart,
} = require('../controllers/cartController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getCart).post(protect, addItemToCart).delete(protect, clearCart);
router.route('/items/:productId').put(protect, updateItemQty).delete(protect, removeItem);

module.exports = router;
