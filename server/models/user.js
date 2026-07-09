import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      default: "",
    },

    avatar: {
      type: String,
      default: "",
    },

    googleId: {
      type: String,
      default: "",
    },

    githubId: {
      type: String,
      default: "",
    },

    provider: {
      type: String,
      enum: ["local", "google", "github"],
      default: "local",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;