import { FiBell, FiSearch } from "react-icons/fi";

const DashboardHeader = () => {
  return (
    <header className="flex items-center justify-between px-8 py-6 border-b border-slate-800 bg-slate-950">

      {/* Left Section */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          Welcome back 👋
        </h1>

        <p className="text-slate-400 mt-2">
          Continue learning with StudyAI
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">

        {/* Search */}
        <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 w-80">

          <FiSearch className="text-slate-400" />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none w-full text-white placeholder:text-slate-500"
          />

        </div>

        {/* Notification */}
        <button className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-slate-800 transition">

          <FiBell size={20} />

        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 rounded-xl px-4 py-2">

          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold">
            S
          </div>

          <div>

            <h3 className="font-semibold">
              Sayan
            </h3>

            <p className="text-xs text-slate-400">
              Student
            </p>

          </div>

        </div>

      </div>

    </header>
  );
};

export default DashboardHeader;