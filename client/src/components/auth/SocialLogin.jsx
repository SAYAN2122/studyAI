import { FcGoogle } from "react-icons/fc";
import { FiGithub } from "react-icons/fi";

function SocialLogin() {
  const API_URL = import.meta.env.VITE_API_URL;

  const handleGoogleLogin = () => {
    window.location.href = `${API_URL}/api/oauth/google`;
  };

  const handleGithubLogin = () => {
    window.location.href = `${API_URL}/api/oauth/github`;
  };

  return (
    <div>
      {/* Divider */}
      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-700" />
        </div>

        <div className="relative flex justify-center">
          <span className="bg-slate-900 px-4 text-sm text-slate-400">
            Or continue with
          </span>
        </div>
      </div>

      {/* Google */}
      <button
        type="button"
        onClick={handleGoogleLogin}
        className="w-full flex items-center justify-center gap-3 rounded-xl border border-slate-700 bg-slate-800 py-3 text-white font-medium hover:bg-slate-700 transition-all duration-300"
      >
        <FcGoogle size={24} />
        Continue with Google
      </button>

      {/* GitHub */}
      <button
        type="button"
        onClick={handleGithubLogin}
        className="mt-4 w-full flex items-center justify-center gap-3 rounded-xl border border-slate-700 bg-slate-800 py-3 text-white font-medium hover:bg-slate-700 transition-all duration-300"
      >
        <FiGithub size={22} />
        Continue with GitHub
      </button>
    </div>
  );
}

export default SocialLogin;