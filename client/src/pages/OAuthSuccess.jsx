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
        const params = new URLSearchParams(window.location.search);
        const token = params.get("token");

        if (!token) {
          navigate("/login");
          return;
        }

        localStorage.setItem("token", token);

        const response = await getProfile();

        login(response.user, token);

        navigate("/dashboard");
      } catch (err) {
        console.error(err);

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/login");
      }
    };

    handleOAuthLogin();
  }, [login, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      Signing you in...
    </div>
  );
}

export default OAuthSuccess;