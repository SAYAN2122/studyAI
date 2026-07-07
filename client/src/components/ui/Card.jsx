function Card({ children, className = "" }) {
  return (
    <div
      className={`
        bg-slate-800
        border
        border-slate-700
        rounded-2xl
        shadow-lg
        p-6
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;