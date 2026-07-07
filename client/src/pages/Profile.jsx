import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiMail,
  FiCalendar,
  FiLogOut,
} from "react-icons/fi";

import DashboardLayout from "../components/layout/DashboardLayout";

import { getProfile } from "../services/profileService";
import { useAuth } from "../context/AuthContext";
import { showSuccess } from "../utils/toast";

function Profile() {
  const navigate = useNavigate();

  const { logout } = useAuth();

  const [profile, setProfile] = useState(null);

  // ==========================
  // Fetch Profile
  // ==========================
  useEffect(() => {
    const fetchProfile = async () => {
      try {

        const data = await getProfile();

        setProfile(data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, []);

  // ==========================
  // Logout
  // ==========================
  const handleLogout = () => {
    logout();

    showSuccess("Logged out successfully!");

    navigate("/login");
  };

  // ==========================
  // Loading
  // ==========================
  if (!profile) {
    return (
      <DashboardLayout>

        <div className="flex justify-center items-center h-[70vh] text-white text-2xl">

          Loading Profile...

        </div>

      </DashboardLayout>
    );
  }

  const { user, stats } = profile;
    return (
    <DashboardLayout>

      <div className="max-w-6xl mx-auto space-y-8">

        {/* Profile Header */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

          <div className="flex flex-col md:flex-row items-center gap-8">

            {/* Avatar */}
            <div className="w-28 h-28 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-5xl font-bold text-white shadow-lg">

              {user.name.charAt(0).toUpperCase()}

            </div>

            {/* User Details */}
            <div className="flex-1">

              <h1 className="text-4xl font-bold text-white">

                {user.name}

              </h1>

              <div className="mt-5 space-y-3">

                <div className="flex items-center gap-3 text-slate-300">

                  <FiMail />

                  <span>{user.email}</span>

                </div>

                <div className="flex items-center gap-3 text-slate-300">

                  <FiCalendar />

                  <span>
                    Member Since{" "}
                    {new Date(user.createdAt).toLocaleDateString()}
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">

          <StatCard
            title="PDFs"
            value={stats.totalPDFs}
          />

          <StatCard
            title="Notes"
            value={stats.totalNotes}
          />

          <StatCard
            title="Quizzes"
            value={stats.totalQuizzes}
          />

          <StatCard
            title="Flashcards"
            value={stats.totalFlashcards}
          />

          <StatCard
            title="Sessions"
            value={stats.totalSessions}
          />

        </div>

        {/* Logout */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

          <h2 className="text-2xl font-bold text-white mb-4">

            Account

          </h2>

          <button
            onClick={handleLogout}
            className="flex items-center gap-3 bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-xl"
          >

            <FiLogOut />

            Logout

          </button>

        </div>

      </div>

    </DashboardLayout>
  );
}
// ==========================
// Statistics Card
// ==========================
function StatCard({ title, value }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-blue-500 transition">

      <h3 className="text-slate-400 text-sm">
        {title}
      </h3>

      <p className="text-4xl font-bold text-white mt-3">
        {value}
      </p>

    </div>
  );
}

export default Profile;