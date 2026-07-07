function Loader({ text = "Loading..." }) {
  return (
    <div className="flex items-center justify-center py-10">
      <div className="text-center">

        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" />

        <p className="mt-4 text-slate-400">
          {text}
        </p>

      </div>
    </div>
  );
}

export default Loader;