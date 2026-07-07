import { motion } from "framer-motion";

function StatCard({
  title,
  value,
  icon,
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-lg"
    >
      <div className="flex justify-between items-center">

        <div>
          <p className="text-slate-400">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>
        </div>

        <div className="text-4xl text-blue-500">
          {icon}
        </div>

      </div>
    </motion.div>
  );
}

export default StatCard;