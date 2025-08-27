export function Badge({ className = "", children, variant = "secondary" }) {
  const styles = {
    secondary: "bg-slate-100 text-slate-700 border border-slate-200",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 h-7 text-xs ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
