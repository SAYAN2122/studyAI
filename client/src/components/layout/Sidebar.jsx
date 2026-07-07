import { Link, useLocation } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: "🏠",
  },
  {
    name: "AI Chat",
    path: "/chat",
    icon: "🤖",
  },
  {
    name: "PDF Workspace",
    path: "/pdf",
    icon: "📄",
  },
  {
    name: "My Study Sessions",
    path: "/study-sessions",
    icon: "📚",
  },
  {
    name: "Profile",
    path: "/profile",
    icon: "👤",
  },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-72 h-screen bg-slate-900 border-r border-slate-800 flex flex-col">

      {/* Logo */}
      <div className="px-6 py-8 border-b border-slate-800">

        <h1 className="text-3xl font-bold text-blue-500">
          StudyAI Pro
        </h1>

        <p className="text-slate-400 mt-2 text-sm">
          AI Learning Platform
        </p>

      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-2">

        {menuItems.map((item) => {

          const active = location.pathname === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300 ${
                active
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <span className="text-xl">
                {item.icon}
              </span>

              <span className="font-medium">
                {item.name}
              </span>
            </Link>
          );

        })}

      </nav>

      {/* Footer */}
      <div className="border-t border-slate-800 px-6 py-5">

        <p className="text-center text-sm text-slate-500">
          StudyAI Pro
        </p>

        <p className="text-center text-xs text-slate-600 mt-1">
          Version 1.0
        </p>

      </div>

    </aside>
  );
};

export default Sidebar;