import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiEye,
  FiEyeOff,
  FiLoader,
} from "react-icons/fi";

import { registerUser } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";
import { showError, showSuccess } from "../../utils/toast";

function SignupForm() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);
    
    const { login } = useAuth();

  const [acceptedTerms, setAcceptedTerms] =
    useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      showError("Passwords do not match.");
      return;
    }

    if (!acceptedTerms) {
      showError(
        "Please accept the Terms & Conditions."
      );
      return;
    }

    try {
      setLoading(true);

      const response = await registerUser({
  name: formData.name,
  email: formData.email,
  password: formData.password,
});

// Save JWT + User
login(response.user, response.token);

showSuccess("Account created successfully!");

// Go directly to dashboard
navigate("/dashboard");

    } catch (error) {

      console.error(error);

      showError(
        error.response?.data?.message ||
        "Registration failed."
      );

    } finally {

      setLoading(false);

    }
  };

  const passwordStrength = () => {
    if (formData.password.length >= 8)
      return {
        label: "Strong",
        color: "text-green-400",
      };

    if (formData.password.length >= 5)
      return {
        label: "Medium",
        color: "text-yellow-400",
      };

    if (formData.password.length > 0)
      return {
        label: "Weak",
        color: "text-red-400",
      };

    return null;
  };

  const strength = passwordStrength();

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >

      {/* Name */}

      <div>

        <label className="block mb-2 text-sm text-slate-300">
          Full Name
        </label>

        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 outline-none focus:border-blue-500"
        />

      </div>

      {/* Email */}

      <div>

        <label className="block mb-2 text-sm text-slate-300">
          Email Address
        </label>

        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 outline-none focus:border-blue-500"
        />

      </div>

      {/* Password */}

      <div>

        <label className="block mb-2 text-sm text-slate-300">
          Password
        </label>

        <div className="relative">

          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a password"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 pr-12 outline-none focus:border-blue-500"
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(
                !showPassword
              )
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
          >
            {showPassword ? (
              <FiEyeOff />
            ) : (
              <FiEye />
            )}
          </button>

        </div>

        {strength && (
          <p
            className={`mt-2 text-sm ${strength.color}`}
          >
            Password Strength: {strength.label}
          </p>
        )}

      </div>

      {/* Confirm Password */}

      <div>

        <label className="block mb-2 text-sm text-slate-300">
          Confirm Password
        </label>

        <div className="relative">

          <input
            type={
              showConfirmPassword
                ? "text"
                : "password"
            }
            name="confirmPassword"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm password"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 pr-12 outline-none focus:border-blue-500"
          />

          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword(
                !showConfirmPassword
              )
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
          >
            {showConfirmPassword ? (
              <FiEyeOff />
            ) : (
              <FiEye />
            )}
          </button>

        </div>

      </div>

      {/* Terms */}

      <label className="flex items-start gap-3 text-sm text-slate-300">

        <input
          type="checkbox"
          checked={acceptedTerms}
          onChange={() =>
            setAcceptedTerms(
              !acceptedTerms
            )
          }
          className="mt-1"
        />

        <span>
          I agree to the Terms of Service and Privacy Policy.
        </span>

      </label>

      {/* Button */}

      <button
        disabled={loading}
        className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 font-semibold hover:scale-[1.02] transition disabled:opacity-60 flex justify-center items-center gap-3"
      >

        {loading ? (
          <>
            <FiLoader className="animate-spin" />
            Creating Account...
          </>
        ) : (
          "Create Account"
        )}

      </button>

      <p className="text-center text-slate-400">

        Already have an account?{" "}

        <Link
          to="/login"
          className="text-blue-400 hover:text-blue-300"
        >
          Login
        </Link>

      </p>

    </form>
  );
}

export default SignupForm;