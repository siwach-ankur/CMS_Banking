export function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full h-10 rounded-xl border border-slate-300 bg-white px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-600 ${className}`}
      {...props}
    />
  );
}
