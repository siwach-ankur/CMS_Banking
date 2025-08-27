import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "../components/ui/card.jsx";
// import { Button } from "../components/ui/Button.jsx";
import { Button } from "./ui/button.jsx";

export default function QuickTile({ title, desc, cta, icon }) {
  return (
    <Card
      className="shadow-sm border border-slate-200/80"
      style={{ backgroundColor: "#F4FAFA" }}
    >
      <CardContent className="p-5">
        <div className="flex items-start gap-3">
            <img src={icon} style={{alignSelf:'center' , paddingLeft:20}} />
          <div className="space-y-1">
            <h3 className="font-semibold text-slate-800 leading-tight" >
              {title}
            </h3>
            {desc ? (
              <p className="text-sm text-slate-600 leading-snug">{desc}</p>
            ) : null}
            <Button
              variant="ghost"
              className="px-0 h-8 text-teal-700 hover:underline"
              aria-label={cta}
            >
              {cta}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
