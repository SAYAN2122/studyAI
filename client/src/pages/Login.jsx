import AuthLayout from "../components/auth/AuthLayout";
import LoginForm from "../components/auth/LoginForm";
import SocialLogin from "../components/auth/SocialLogin";

function Login() {
  return (
    <AuthLayout
      title="Welcome Back 👋"
      subtitle="Login to continue your AI-powered learning journey."
    >
      <LoginForm />

      <SocialLogin />
    </AuthLayout>
  );
}

export default Login;