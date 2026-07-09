import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import { getProfile } from "../services/authService";

function OAuthSuccess() {
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const handleOAuthLogin = async () => {
      try {
        // Read token from URL
        const params = new URLSearchParams(window.location.search);
        const token = params.get("token");

        if (!token) {
          navigate("/login");
          return;
        }

        // Save token temporarily
        localStorage.setItem("token", token);

        // Fetch user profile
        const response = await getProfile();

        // Save user + token in AuthContext
        login(response.user, token);

        // Redirect to dashboard
        navigate("/dashboard");
      } catch (error) {
        console.error("OAuth Login Error:", error);

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/login");
      }
    };

    handleOAuthLogin();
  }, [login, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

        <h2 className="mt-6 text-2xl font-bold text-white">
          Signing you in...
        </h2>

        <p className="mt-2 text-slate-400">
          Please wait while we complete your login.
        </p>
      </div>
    </div>
  );
}

export default OAuthSuccess;