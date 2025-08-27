export function Card({ className = "", children , style }) {
  return (
    <div
      className={`bg-white rounded-2xl border border-slate-200 ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
export function CardHeader({ className = "", children }) {
  return <div className={`p-5 ${className}`}>{children}</div>;
}
export function CardTitle({ className = "", children }) {
  return <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>;
}
export function CardContent({ className = "", children }) {
  return <div className={`p-5 ${className}`}>{children}</div>;
}
