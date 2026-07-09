import "dotenv/config";

import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import passport from "passport";
import cookieSession from "cookie-session";

// Database
import connectDB from "./config/db.js";

// Passport Configuration
import "./config/passport.js";

// Routes
import authRoutes from "./routes/authRoutes.js";
import oauthRoutes from "./routes/oauthRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";
import pdfRoutes from "./routes/pdfRoutes.js";
import studySessionRoutes from "./routes/studySessionRoutes.js";
import continueLearningRoutes from "./routes/continueLearningRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";

// =====================================
// Connect Database
// =====================================
connectDB();

const app = express();

// =====================================
// Middleware
// =====================================

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(helmet());

app.use(morgan("dev"));

app.use(
  cookieSession({
    name: "studyai-session",
    keys: [process.env.SESSION_SECRET],
    maxAge: 24 * 60 * 60 * 1000,
  })
);

app.use(passport.initialize());

app.use(passport.session());

// =====================================
// API Routes
// =====================================

app.use("/api/auth", authRoutes);
app.use("/api/oauth", oauthRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/pdf", pdfRoutes);
app.use("/api/study-session", studySessionRoutes);
app.use("/api/continue-learning", continueLearningRoutes);
app.use("/api/profile", profileRoutes);

// =====================================
// Health Check
// =====================================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "StudyAI Backend is Running 🚀",
  });
});

// =====================================
// 404
// =====================================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

// =====================================
// Start Server
// =====================================

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});