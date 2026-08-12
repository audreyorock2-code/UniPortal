const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDatabase = require("./config/database");

const app = express();

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDatabase();

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "UniPortal API is running",
  });
});

// Health route
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "UniPortal API is healthy",
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`UniPortal API running on port ${PORT}`);
});