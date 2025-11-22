const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Place a new order
router.post('/', orderController.createOrder);

// Get all orders for a user
router.get('/user/:userId', orderController.getOrdersByUser);

// Get order by ID
router.get('/:orderId', orderController.getOrderById);

// Update order status (admin)
router.put('/:orderId/status', orderController.updateOrderStatus);

module.exports = router;
