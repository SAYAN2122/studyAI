import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiEye,
  FiEyeOff,
  FiLoader,
} from "react-icons/fi";

import { useAuth } from "../../context/AuthContext";
import { loginUser } from "../../services/authService";
import { showError } from "../../utils/toast";

function LoginForm() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [rememberMe, setRememberMe] =
    useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    const response = await loginUser(formData);

    login(
      response.user,
      response.token
    );

    navigate("/dashboard");

  } catch (error) {

    console.error(error);

    showError(
      error.response?.data?.message ||
      "Login failed."
    );

  } finally {

    setLoading(false);

  }
};

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >

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
            placeholder="Enter your password"
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

      </div>

      {/* Remember Me */}

      <div className="flex justify-between items-center">

        <label className="flex items-center gap-2 text-sm">

          <input
            type="checkbox"
            checked={rememberMe}
            onChange={() =>
              setRememberMe(!rememberMe)
            }
          />

          Remember Me

        </label>

        <button
  type="button"
  className="text-blue-400 hover:text-blue-300 text-sm"
>
  Forgot Password?
</button>

      </div>

      {/* Login */}

      <button
        disabled={loading}
        className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 font-semibold hover:scale-[1.02] transition disabled:opacity-60 flex justify-center items-center gap-3"
      >

        {loading ? (
          <>
            <FiLoader className="animate-spin" />

            Logging In...

          </>
        ) : (
          "Login"
        )}

      </button>

      {/* Signup */}

      <p className="text-center text-slate-400">

        Don't have an account?

        {" "}

        <Link
          to="/signup"
          className="text-blue-400 hover:text-blue-300"
        >
          Create Account
        </Link>

      </p>

    </form>
  );
}

export default LoginForm;