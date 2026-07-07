import User from "../models/user.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

// ==========================
// Register User
// ==========================
export const registerUser = async (req, res) => {
  try {
    console.log("========== REGISTER START ==========");

    const { name, email, password } = req.body;

    console.log("Request Body:", req.body);

    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }

    // Check Existing User
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create User
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Generate JWT
    const token = generateToken(user._id);

    return res.status(201).json({
      success: true,
      message: "Registration Successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        createdAt: user.createdAt,
      },
    });

  } catch (error) {
    console.log("========== REGISTER ERROR ==========");
    console.error(error);
    console.log("====================================");

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Login User
// ==========================
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }

    // Find User
    const user = await User.findOne({ email });

    // Check User Exists
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    // Compare Password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    // Generate JWT
    const token = generateToken(user._id);

    return res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        createdAt: user.createdAt,
      },
    });

  } catch (error) {
    console.log("========== LOGIN ERROR ==========");
    console.error(error);
    console.log("=================================");

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Get Logged-in User Profile
// ==========================
export const getProfile = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Profile fetched successfully",
      user: req.user,
    });

  } catch (error) {
    console.log("========== PROFILE ERROR ==========");
    console.error(error);
    console.log("===================================");

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Logout User
// ==========================
export const logoutUser = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Logout Successful",
    });

  } catch (error) {
    console.log("========== LOGOUT ERROR ==========");
    console.error(error);
    console.log("==================================");

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};