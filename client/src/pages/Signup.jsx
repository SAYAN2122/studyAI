import AuthLayout from "../components/auth/AuthLayout";
import SignupForm from "../components/auth/SignupForm";

function Signup() {
  return (
    <AuthLayout
      title="Create Your Account 🚀"
      subtitle="Join StudyAI and start learning smarter with AI."
    >
      <SignupForm />
    </AuthLayout>
  );
}

export default Signup;