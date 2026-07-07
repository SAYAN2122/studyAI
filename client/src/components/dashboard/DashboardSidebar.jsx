import {
  FiHome,
  FiMessageSquare,
  FiFileText,
  FiBookOpen,
  FiClipboard,
  FiLayers,
  FiBarChart2,
  FiSettings,
} from "react-icons/fi";

const items = [
  { icon: FiHome, label: "Dashboard" },
  { icon: FiMessageSquare, label: "AI Chat" },
  { icon: FiFileText, label: "PDF Workspace" },
  { icon: FiBookOpen, label: "Notes" },
  { icon: FiClipboard, label: "Quiz" },
  { icon: FiLayers, label: "Flashcards" },
  { icon: FiBarChart2, label: "Analytics" },
  { icon: FiSettings, label: "Settings" },
];

const DashboardSidebar = () => {
  return (
    <aside className="w-72 bg-slate-950 border-r border-slate-800 flex flex-col">

      <div className="p-6">

        <h1 className="text-3xl font-bold text-blue-500">
          StudyAI
        </h1>

      </div>

      <nav className="flex-1 px-4 space-y-2">

        {items.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className="w-full flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-slate-800 transition"
            >
              <Icon size={20} />

              <span>{item.label}</span>
            </button>
          );
        })}

      </nav>

      <div className="p-5 border-t border-slate-800">

        <div className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-4">

          <h3 className="font-bold">
            StudyAI Pro
          </h3>

          <p className="text-sm mt-2 opacity-80">
            AI-powered study platform
          </p>

        </div>

      </div>

    </aside>
  );
};

export default DashboardSidebar;