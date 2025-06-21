import IndicatorCard from "@/components/IndicatorCard";
import {
  Users,
  DollarSign,
  Briefcase,
  Building2,
  GraduationCap,
  Banknote,
  UserCheck,
} from "lucide-react";
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

  // Returnează iconul + clasa CSS pe baza categoriei
const getIndicatorConfig = (category: string) => {
  switch (category) {
    case "population":
      return { icon: Users, categoryClass: "indicator-population" };
    case "economy":
      return { icon: DollarSign, categoryClass: "indicator-economy" };
    case "employment":
      return { icon: Briefcase, categoryClass: "indicator-employment" };
    case "healthcare":
      return { icon: Building2, categoryClass: "indicator-healthcare" };
    case "education":
      return { icon: GraduationCap, categoryClass: "indicator-education" };
    case "currency":
      return { icon: Banknote, categoryClass: "indicator-currency" };
    case "public":
      return { icon: UserCheck, categoryClass: "indicator-public" };
    default:
      return { icon: Users, categoryClass: "indicator-default" };
  }
};

  return (
    <section className="py-12 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="section-title mb-4">Indicatori Naționali Cheie</h2>
          <p className="section-subtitle">
            Monitorizarea în timp real a principalilor indicatori economici, demografici și sociali ai României
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {indicators.map((indicator) => {
            const config = getIndicatorConfig(indicator.category);
            return (
              <IndicatorCard
                key={indicator.id}
                icon={config.icon}
                categoryClass={config.categoryClass}
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
