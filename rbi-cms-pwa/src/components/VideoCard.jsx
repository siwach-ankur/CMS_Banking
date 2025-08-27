import { Card, CardContent } from "../components/ui/Card.jsx";
import { Play } from "lucide-react";

export default function VideoCard({ title, image }) {
  return (
    <Card className="overflow-hidden border-0 shadow-md">
      <div className="relative h-36 bg-slate-200">
        <img
          alt="Video thumbnail"
          className="absolute inset-0 w-full h-full object-cover"
          src={
            image ??
            "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1200&auto=format&fit=crop"
          }
        />
        <button
          className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-white/90 grid place-items-center shadow"
          aria-label="Play video"
        >
          <Play className="w-6 h-6" aria-hidden />
        </button>
      </div>
      <CardContent className="p-4">
        <h4 className="font-semibold text-slate-800 leading-snug">{title}</h4>
        <p className="text-xs text-slate-500">Click to play</p>
      </CardContent>
    </Card>
  );
}
