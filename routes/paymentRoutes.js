const express = require('express');
const router = express.Router();
const { paymentWebhook } = require('../controllers/paymentController');

// public endpoint for payment webhooks
router.post('/webhook', express.raw({ type: '*/*' }), paymentWebhook);

module.exports = router;
