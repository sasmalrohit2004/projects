# Phase 2 - Cart & Extended Order Management

This branch adds server-side cart functionality and extended order management endpoints (deliver, cancel, admin filters & pagination), plus a payment webhook skeleton.

New models
- models/Cart.js -- server-side cart, one-per-user

New controllers/routes
- controllers/cartController.js
- routes/cartRoutes.js -> mount at /api/cart

Order controller updates
- controllers/orderController.js updated with:
  - updateOrderToDelivered (PUT /api/orders/:id/deliver) -- admin only
  - cancelOrder (PUT /api/orders/:id/cancel) -- owner or admin
  - getOrders now supports pagination and basic filters: ?page=&limit=&status=&user=
  - addOrder supports clearing the cart after creation when client sends clearCart=true

Payment webhook
- controllers/paymentController.js & routes/paymentRoutes.js -> /api/payments/webhook (skeleton)

Integration notes
1) Mount new routes in your server (server.js / app.js):

   const cartRoutes = require('./routes/cartRoutes');
   const paymentRoutes = require('./routes/paymentRoutes');

   app.use('/api/cart', cartRoutes);
   app.use('/api/payments', paymentRoutes);

(orders are already mounted at /api/orders)

2) Ensure dependencies are installed:
   npm install express-async-handler

3) Test endpoints with curl / Postman using an Authorization: Bearer <TOKEN>

If you want real provider integration (Stripe/PayPal), tell me which provider and I will wire a minimal flow (payment intent + webhook verification).
