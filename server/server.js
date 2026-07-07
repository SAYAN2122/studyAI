import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import connectDB from "./config/db.js"; // Import Database Connection
import authRoutes from "./routes/authRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";
import pdfRoutes from "./routes/pdfRoutes.js";
import studySessionRoutes from "./routes/studySessionRoutes.js";
import continueLearningRoutes from "./routes/continueLearningRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";

console.log("1. File started");

// Load Environment Variables
dotenv.config();
console.log("Gemini Key:", process.env.GEMINI_API_KEY);
console.log("2. dotenv loaded");

// Connect to MongoDB
connectDB();
console.log("3. connectDB() called");

const app = express();
console.log("4. Express app created");

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/pdf", pdfRoutes);
app.use(
  "/api/study-session",
  studySessionRoutes
);
app.use(
  "/api/continue-learning",
  continueLearningRoutes
);
app.use(
  "/api/profile",
  profileRoutes
);
// Test Route
app.get("/", (req, res) => {
  console.log("GET / was called");
  res.json({
    success: true,
    message: "StudyAI Backend is Running 🚀",
  });
});

const PORT = process.env.PORT || 5001;

console.log("5. About to start server");

// Start Server
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

// Handle Server Errors
server.on("error", (err) => {
  console.error("❌ Server Error:", err);
});

console.log("6. End of file");