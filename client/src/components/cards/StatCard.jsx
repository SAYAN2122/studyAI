import {
  FiFileText,
  FiBookOpen,
  FiHelpCircle,
  FiLayers,
  FiMessageCircle,
} from "react-icons/fi";

const stats = [
  {
    title: "PDFs",
    value: 18,
    icon: FiFileText,
    color: "bg-blue-600",
  },
  {
    title: "Notes",
    value: 142,
    icon: FiBookOpen,
    color: "bg-green-600",
  },
  {
    title: "Quiz",
    value: 46,
    icon: FiHelpCircle,
    color: "bg-purple-600",
  },
  {
    title: "Flashcards",
    value: 289,
    icon: FiLayers,
    color: "bg-orange-600",
  },
  {
    title: "AI Chats",
    value: 83,
    icon: FiMessageCircle,
    color: "bg-pink-600",
  },
];

function StatsCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">

      {stats.map((item) => {

        const Icon = item.icon;

        return (

          <div
            key={item.title}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition"
          >

            <div
              className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center`}
            >
              <Icon
                size={28}
                className="text-white"
              />
            </div>

            <h3 className="text-4xl font-black mt-6">
              {item.value}
            </h3>

            <p className="text-slate-400 mt-2">
              {item.title}
            </p>

          </div>

        );

      })}

    </div>
  );
}

export default StatsCards;