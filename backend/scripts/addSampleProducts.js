// scripts/addSampleProducts.js

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("../models/Product");

dotenv.config();

const sampleProducts = [
  {
    name: "Summer Floral Dress",
    description: "Light and breezy floral dress perfect for summer days.",
    price: 1999,
    image: "http://localhost:4000/images/NewCollection1.jpg",
    tags: ["summer", "floral", "dress"],
  },
  {
    name: "Classic Denim Jacket",
    description: "A stylish denim jacket for any outfit.",
    price: 2999,
    image: "http://localhost:4000/images/NewCollection2.jpg",
    tags: ["denim", "jacket", "outerwear"],
  },
  {
    name: "Comfy Knit Sweater",
    description: "Warm and cozy knit sweater for chilly evenings.",
    price: 2499,
    image: "http://localhost:4000/images/NewCollection3.jpg",
    tags: ["sweater", "knit", "cozy"],
  }
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    await Product.deleteMany(); // optional: clears old products
    await Product.insertMany(sampleProducts);

    console.log("✅ Sample products added!");
    process.exit();
  } catch (error) {
    console.error("❌ Error adding products:", error);
    process.exit(1);
  }
};

seedProducts();
