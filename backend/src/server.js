const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "UniPortal API is running",
  });
});

// API health check
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "UniPortal API is healthy",
  });
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`UniPortal API running on port ${PORT}`);
});