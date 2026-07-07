import { FiInbox } from "react-icons/fi";

function EmptyState({
  title,
  description,
}) {
  return (
    <div className="text-center py-16">

      <FiInbox
        size={60}
        className="mx-auto text-slate-500"
      />

      <h2 className="mt-5 text-2xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-3 text-slate-400">
        {description}
      </p>

    </div>
  );
}

export default EmptyState;