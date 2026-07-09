import AuthLayout from "../components/auth/AuthLayout";
import SignupForm from "../components/auth/SignupForm";
import SocialLogin from "../components/auth/SocialLogin";

function Signup() {
  return (
    <AuthLayout
      title="Create Your Account 🚀"
      subtitle="Join StudyAI and start learning smarter with AI."
    >
      <SignupForm />

      <SocialLogin />
    </AuthLayout>
  );
}

export default Signup;