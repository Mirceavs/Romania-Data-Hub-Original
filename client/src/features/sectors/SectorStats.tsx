import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StatCard from "@/components/StatCard";
import DownloadButton from "@/components/DownloadButton";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, BarChart, Bar
} from "recharts";
import { formatNumber } from "@/utils/formatNumber";
import {
  Building, Users, GraduationCap, DollarSign, Building2, UserCheck, Truck,
  TrendingUp, TrendingDown, Target, AlertTriangle, Car, Home, RotateCcw, Trees,
  Zap, Leaf, Gauge, Battery, FlaskConical, Lightbulb, Smartphone
} from "lucide-react";

interface Stat {
  id: string;
  label: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: string;
}

interface OverviewItem {
  year: string;
  gdp?: number;
  inflation?: number;
  budget?: number;
}

interface SectorData {
  id: string;
  name: string;
  description: string;
  stats: Stat[];
  overview: OverviewItem[];
}

interface SectorStatsProps {
  sectorData: SectorData;
}

export default function SectorStats({ sectorData }: SectorStatsProps) {
  const [activeTab, setActiveTab] = useState("overview");

  const getIconComponent = (iconName: string) => {
    const iconMap: Record<string, any> = {
      Building, Users, GraduationCap, DollarSign, Building2, UserCheck, Truck,
      TrendingUp, TrendingDown, Target, AlertTriangle, Car, Home, RotateCcw, Trees,
      Zap, Leaf, Gauge, Battery, FlaskConical, Lightbulb, Smartphone
    };
    return iconMap[iconName] || Building;
  };

  if (!sectorData || !Array.isArray(sectorData.overview)) {
    return <div className="text-red-500">Nu există date valide pentru acest sector.</div>;
  }

  return (
    <div className="space-y-6 text-foreground">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">{sectorData.name}</h1>
          <p className="text-lg text-muted-foreground mt-2">{sectorData.description}</p>
        </div>
        <div className="flex items-center gap-4">
          <DownloadButton
            data={sectorData.overview}
            filename={`sector-${sectorData.id}-overview-data`}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sectorData.stats.map((stat) => (
          <StatCard
            key={stat.id}
            title={stat.label}
            value={stat.value}
            change={stat.change}
            changeType={stat.changeType}
            icon={getIconComponent(stat.icon)}
          />
        ))}
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 bg-muted">
          <TabsTrigger value="overview">Prezentare Generală</TabsTrigger>
          <TabsTrigger value="evolution">Evoluție</TabsTrigger>
          <TabsTrigger value="budget">Buget</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card className="bg-muted/30 rounded-xl border border-border">
            <CardHeader>
              <CardTitle className="text-lg">Evoluția indicatorilor principali</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={sectorData.overview}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip formatter={(value: number) => formatNumber(value)} />
                  {Array.isArray(sectorData.overview) && sectorData.overview.some((item) => item.gdp) && (
                    <Line type="monotone" dataKey="gdp" stroke="#3b82f6" name="PIB" />
                  )}
                  {Array.isArray(sectorData.overview) && sectorData.overview.some((item) => item.inflation) && (
                    <Line type="monotone" dataKey="inflation" stroke="#f97316" name="Inflație (%)" />
                  )}
                  {Array.isArray(sectorData.overview) && sectorData.overview.some((item) => item.budget) && (
                    <Line type="monotone" dataKey="budget" stroke="#10b981" name="Buget" />
                  )}
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="evolution" className="space-y-6">
          <Card className="bg-muted/30 rounded-xl border border-border">
            <CardHeader>
              <CardTitle className="text-lg">Evoluție PIB</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={sectorData.overview}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip formatter={(value: number) => formatNumber(value)} />
                  <Bar dataKey="gdp" fill="#3b82f6" name="PIB" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="budget" className="space-y-6">
          <Card className="bg-muted/30 rounded-xl border border-border">
            <CardHeader>
              <CardTitle className="text-lg">Execuție bugetară</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={sectorData.overview}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip formatter={(value: number) => `${formatNumber(value)} RON`} />
                  <Line type="monotone" dataKey="budget" stroke="#10b981" name="Buget executat" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
