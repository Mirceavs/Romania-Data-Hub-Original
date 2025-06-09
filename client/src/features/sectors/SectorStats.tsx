import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StatCard from "@/components/StatCard";
import DownloadButton from "@/components/DownloadButton";
import MinistryFilter from "@/components/MinistryFilter";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { formatNumber } from "@/utils/formatNumber";
import { 
  Building, Users, GraduationCap, DollarSign, Building2, UserCheck, Truck, 
  TrendingUp, TrendingDown, Target, AlertTriangle, Car, Home, RotateCcw, Trees,
  Zap, Leaf, Gauge, Battery, FlaskConical, Lightbulb, Smartphone
} from "lucide-react";

interface SectorData {
  id: string;
  name: string;
  description: string;
  ministries: string[];
  stats: Array<{
    id: string;
    label: string;
    value: string;
    change: string;
    changeType: "positive" | "negative" | "neutral";
    icon: string;
  }>;
  chartData: Array<{
    year: string;
    value: number;
    budget: number;
  }>;
}

interface SectorStatsProps {
  sectorData: SectorData;
}

export default function SectorStats({ sectorData }: SectorStatsProps) {
  const [selectedMinistry, setSelectedMinistry] = useState("toate");
  const [activeTab, setActiveTab] = useState("overview");

  const getIconComponent = (iconName: string) => {
    const iconMap: Record<string, any> = {
      Building, Users, GraduationCap, DollarSign, Building2, UserCheck, Truck,
      TrendingUp, TrendingDown, Target, AlertTriangle, Car, Home, RotateCcw, Trees,
      Zap, Leaf, Gauge, Battery, FlaskConical, Lightbulb, Smartphone
    };
    return iconMap[iconName] || Building;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{sectorData.name}</h1>
          <p className="text-lg text-gray-600 mt-2">{sectorData.description}</p>
        </div>
        <div className="flex items-center gap-4">
          <MinistryFilter
            ministries={sectorData.ministries}
            selectedMinistry={selectedMinistry}
            onMinistryChange={setSelectedMinistry}
          />
          <DownloadButton
            data={sectorData.chartData}
            filename={`sector-${sectorData.id}-data`}
          />
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Prezentare Generală</TabsTrigger>
          <TabsTrigger value="evolution">Evoluție</TabsTrigger>
          <TabsTrigger value="budget">Buget</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Stats Grid */}
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

          {/* Main Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Evoluția indicatorilor principali</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={sectorData.chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip formatter={(value: number) => formatNumber(value)} />
                  <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="evolution" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Evoluție pe ani</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={500}>
                <BarChart data={sectorData.chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip formatter={(value: number) => formatNumber(value)} />
                  <Bar dataKey="value" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="budget" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Execuție bugetară</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={sectorData.chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip formatter={(value: number) => `${formatNumber(value)} RON`} />
                  <Line type="monotone" dataKey="budget" stroke="#10b981" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
