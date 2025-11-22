const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);


const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');

app.use('/api/users', userRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
 


// Middleware
app.use(cors());
app.use(express.json());

const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

app.use('/images', express.static('upload/images'));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1); // Exit if DB connection fails
  });

// Test route
app.get("/", (req, res) => {
  res.send("Welcome to the Nils Backend API!");
});

// Upload base64 image route (async version)
app.post("/uploadBase64", async (req, res) => {
  try {
    const { imageData, filename } = req.body;

    if (!imageData || !filename) {
      return res.status(400).json({ success: 0, message: "Missing imageData or filename" });
    }

    const base64Data = imageData.replace(/^data:image\/\w+;base64,/, "");
    const buffer = Buffer.from(base64Data, 'base64');

    const uploadPath = path.join(__dirname, 'upload/images');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }

    const filePath = path.join(uploadPath, filename);
    await fs.promises.writeFile(filePath, buffer);

    res.status(200).json({
      success: 1,
      image_url: `http://localhost:${PORT}/images/${filename}`
    });
  } catch (err) {
    console.error("Base64 upload error:", err);
    res.status(500).json({ success: 0, message: "Internal Server Error" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
