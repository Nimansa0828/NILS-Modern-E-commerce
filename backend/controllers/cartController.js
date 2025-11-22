// controllers/cartController.js

exports.getCartItems = (req, res) => {
  res.status(200).json({ message: "Cart items fetched" });
};

exports.addToCart = (req, res) => {
  res.status(201).json({ message: "Item added to cart" });
};

exports.removeFromCart = (req, res) => {
  res.status(200).json({ message: "Item removed from cart" });
};
