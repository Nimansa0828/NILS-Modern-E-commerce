// routes/cartRoutes.js

const express = require("express");
const router = express.Router();
const {
  getCartItems,
  addToCart,
  removeFromCart,
} = require("../controllers/cartController");

// Route definitions
router.get("/", getCartItems);
router.post("/add", addToCart);
router.delete("/remove/:id", removeFromCart);

module.exports = router;


