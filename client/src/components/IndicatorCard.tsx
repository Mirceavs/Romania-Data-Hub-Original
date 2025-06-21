import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface IndicatorCardProps {
  icon: LucideIcon;
  categoryClass: string; // ex: "indicator-economy"
  label: string;
  value: string;
  trend: string;
  trendType: "positive" | "negative" | "neutral";
  lastUpdate: string;
}

export default function IndicatorCard({
  icon: Icon,
  categoryClass,
  label,
  value,
  trend,
  trendType,
  lastUpdate,
}: IndicatorCardProps) {
  const getTrendColor = () => {
    switch (trendType) {
      case "positive":
        return "text-green-600 bg-green-100";
      case "negative":
        return "text-red-600 bg-red-100";
      default:
        return "text-muted-foreground bg-muted";
    }
  };

  return (
    <Card
      className={`hover:shadow-md transition-shadow rounded-2xl ${categoryClass}`}
      style={{
        backgroundColor: "var(--card-bg, var(--card))", // ✅ fundal personalizat
      }}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{
              backgroundColor: "var(--icon-bg)",
              color: "var(--icon-color)",
            }}
          >
            <Icon className="w-6 h-6" />
          </div>
          <Badge
            variant="secondary"
            className={`text-xs font-medium ${getTrendColor()}`}
          >
            {trend}
          </Badge>
        </div>
        <h3 className="text-sm font-medium text-muted-foreground mb-1">{label}</h3>
        <p className="text-2xl font-bold text-foreground">{value}</p>
        <p className="text-xs text-muted-foreground mt-2">
          Actualizat: {lastUpdate}
        </p>
      </CardContent>
    </Card>
  );
}
