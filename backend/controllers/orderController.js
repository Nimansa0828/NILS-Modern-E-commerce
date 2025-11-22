const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  const { user, items, totalAmount } = req.body;

  try {
    const newOrder = new Order({ user, items, totalAmount });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    console.error("❌ Error creating order:", err); // ADD THIS
    res.status(500).json({ message: err.message });
  }
};


// Get all orders for a user
exports.getOrdersByUser = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.userId }).populate('items.product');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Get a specific order by ID
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId).populate('items.product');
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Update order status
exports.updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(
      req.params.orderId,
      { status },
      { new: true }
    );
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
