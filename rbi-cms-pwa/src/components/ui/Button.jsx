export function Button({
  variant = "default",
  className = "",
  children,
  style,
  onPress,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-3.5 py-2.5 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    default: "bg-teal-600 text-white hover:bg-teal-500 focus:ring-teal-600",
    secondary:
      "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 focus:ring-slate-400",
    outline:
      "bg-transparent border border-slate-300 text-slate-800 hover:bg-slate-50",
    ghost: "bg-transparent text-inherit hover:bg-slate-100",
  };
  return (
    <button
      className={`${base} ${
        variants[variant] ?? variants.default
      } ${className}`}
      {...props}
      style={style}
      onClick={onPress}
    >
      {children} 
    </button>
  );
}
