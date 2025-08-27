import { Card, CardContent } from "../components/ui/Card.jsx";
import { Button } from "../components/ui/Button.jsx";

export default function ArticleCard({ title, subtitle, image }) {
  return (
    <Card className="overflow-hidden border-0 shadow-md">
      <div className="relative h-36 bg-gradient-to-br from-sky-100 to-sky-200">
        <img
          alt="Article thumbnail"
          className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80"
          src={
            image ??
            "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop"
          }
        />
      </div>
      <CardContent className="p-4">
        <p className="text-xs text-slate-500">{subtitle}</p>
        <h4 className="font-semibold text-slate-800 leading-snug">{title}</h4>
        <Button className="mt-3 h-8" variant="secondary">
          Click to view
        </Button>
      </CardContent>
    </Card>
  );
}
