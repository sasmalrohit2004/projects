const asyncHandler = require('express-async-handler');

// This is a webhook-ready skeleton for payment providers like Stripe/PayPal.
// Configure your payment provider to call POST /api/payments/webhook with provider-specific signatures.

const paymentWebhook = asyncHandler(async (req, res) => {
  // Example: for Stripe you would verify the signature using stripe.webhooks.constructEvent
  // For PayPal, validate incoming webhook using the SDK or call verify endpoint.

  // We'll just log the incoming body for now and return 200 OK.
  console.log('Payment webhook received', { body: req.body, headers: req.headers });

  // TODO: verify signature using process.env.PAYMENT_WEBHOOK_SECRET or provider SDK
  // TODO: parse event and update order(s) accordingly

  res.status(200).json({ ok: true });
});

module.exports = { paymentWebhook };
