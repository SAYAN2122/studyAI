import { motion } from "framer-motion";

const FeatureCard = ({ title, description, icon }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.04,
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-7
        shadow-xl
      "
    >
      <div className="mb-5 text-5xl">
        {icon}
      </div>

      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      <p className="mt-3 text-gray-400">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;