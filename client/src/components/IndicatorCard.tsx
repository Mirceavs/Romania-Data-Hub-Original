import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface IndicatorCardProps {
  icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
  label: string;
  value: string;
  trend: string;
  trendType: "positive" | "negative" | "neutral";
  lastUpdate: string;
}

export default function IndicatorCard({
  icon: Icon,
  iconColor,
  iconBgColor,
  label,
  value,
  trend,
  trendType,
  lastUpdate,
}: IndicatorCardProps) {
  const getTrendColor = () => {
    switch (trendType) {
      case "positive":
        return "text-green-600 bg-green-50";
      case "negative":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`w-12 h-12 ${iconBgColor} rounded-lg flex items-center justify-center`}>
            <Icon className={`w-6 h-6 ${iconColor}`} />
          </div>
          <Badge variant="secondary" className={`text-xs font-medium ${getTrendColor()}`}>
            {trend}
          </Badge>
        </div>
        <h3 className="text-sm font-medium text-gray-600 mb-1">{label}</h3>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <p className="text-xs text-gray-500 mt-2">Actualizat: {lastUpdate}</p>
      </CardContent>
    </Card>
  );
}
