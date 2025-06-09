import IndicatorCard from "@/components/IndicatorCard";
import { Users, DollarSign, Briefcase, Building2, GraduationCap, Banknote, UserCheck } from "lucide-react";
import indicatorsData from "@/data/indicators.json";

interface Indicator {
  id: string;
  label: string;
  value: string;
  trend: string;
  trendType: "positive" | "negative" | "neutral";
  lastUpdate: string;
  category: string;
}

export default function NationalIndicators() {
  const indicators = indicatorsData as Indicator[];

  const getIndicatorIcon = (category: string) => {
    switch (category) {
      case "population":
        return { icon: Users, color: "text-blue-600", bgColor: "bg-blue-100" };
      case "economy":
        return { icon: DollarSign, color: "text-green-600", bgColor: "bg-green-100" };
      case "employment":
        return { icon: Briefcase, color: "text-yellow-600", bgColor: "bg-yellow-100" };
      case "healthcare":
        return { icon: Building2, color: "text-purple-600", bgColor: "bg-purple-100" };
      case "education":
        return { icon: GraduationCap, color: "text-red-600", bgColor: "bg-red-100" };
      case "currency":
        return { icon: Banknote, color: "text-indigo-600", bgColor: "bg-indigo-100" };
      case "public":
        return { icon: UserCheck, color: "text-orange-600", bgColor: "bg-orange-100" };
      default:
        return { icon: Users, color: "text-gray-600", bgColor: "bg-gray-100" };
    }
  };

  return (
    <section className="py-12 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-4">Indicatori Naționali Cheie</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Monitorizarea în timp real a principalilor indicatori economici, demografici și sociali ai României
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {indicators.map((indicator) => {
            const iconConfig = getIndicatorIcon(indicator.category);
            return (
              <IndicatorCard
                key={indicator.id}
                icon={iconConfig.icon}
                iconColor={iconConfig.color}
                iconBgColor={iconConfig.bgColor}
                label={indicator.label}
                value={indicator.value}
                trend={indicator.trend}
                trendType={indicator.trendType}
                lastUpdate={indicator.lastUpdate}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
