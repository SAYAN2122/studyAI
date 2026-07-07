import { Link } from "react-router-dom";
import {
  FiUpload,
  FiMessageSquare,
  FiFolder,
  FiArrowRight,
} from "react-icons/fi";

const actions = [
  {
    title: "Upload PDF",
    description: "Upload a new study document",
    icon: FiUpload,
    path: "/pdf",
    bg: "bg-blue-600 hover:bg-blue-700",
  },
  {
    title: "AI Chat",
    description: "Ask questions to StudyAI",
    icon: FiMessageSquare,
    path: "/chat",
    bg: "bg-slate-800 hover:bg-slate-700",
  },
  {
    title: "My Sessions",
    description: "Continue previous study sessions",
    icon: FiFolder,
    path: "/study-sessions",
    bg: "bg-slate-800 hover:bg-slate-700",
  },
];

function QuickActions() {
  return (
    <div>

      <h2 className="text-2xl font-bold mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">

        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              to={action.path}
              className={`${action.bg} rounded-2xl p-6 transition-all duration-300 hover:scale-[1.03] shadow-lg`}
            >

              <div className="flex items-center justify-between">

                <div className="bg-white/10 p-3 rounded-xl">

                  <Icon size={28} />

                </div>

                <FiArrowRight
                  size={22}
                  className="opacity-70"
                />

              </div>

              <h3 className="mt-6 text-xl font-bold">

                {action.title}

              </h3>

              <p className="mt-2 text-sm text-slate-200">

                {action.description}

              </p>

            </Link>
          );
        })}

      </div>

    </div>
  );
}

export default QuickActions;