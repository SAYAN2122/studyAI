import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <header className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-4 md:px-6 lg:px-8 py-4">

      {/* Left Section */}
      <div>

        <h2 className="text-xl md:text-2xl font-bold">
          Dashboard
        </h2>

        <p className="text-slate-400 text-sm md:text-base">
          Welcome back 👋
        </p>

      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3 md:gap-4">

        <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-blue-600 text-base md:text-lg font-bold">

          {user?.name?.charAt(0).toUpperCase() || "U"}

        </div>

        {/* Hide details on very small screens */}
        <div className="hidden sm:block">

          <h3 className="font-semibold text-sm md:text-base">
            {user?.name}
          </h3>

          <p className="text-xs md:text-sm text-slate-400 truncate max-w-[180px]">
            {user?.email}
          </p>

        </div>

      </div>

    </header>
  );
};

export default Navbar;