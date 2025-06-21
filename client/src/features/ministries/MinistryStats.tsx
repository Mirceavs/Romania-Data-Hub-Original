// client/src/features/ministries/MinistryStats.tsx

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

interface MinistryData {
  id: string;
  name: string;
  description: string;
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

interface MinistryStatsProps {
  ministryData: MinistryData;
}

export default function MinistryStats({ ministryData }: MinistryStatsProps) {
  const [activeTab, setActiveTab] = useState("overview");

  const getIconComponent = (iconName: string) => {
    const iconMap: Record<string, any> = {
      Building, Users, GraduationCap, DollarSign, Building2, UserCheck, Truck,
      TrendingUp, TrendingDown, Target, AlertTriangle, Car, Home, RotateCcw, Trees,
      Zap, Leaf, Gauge, Battery, FlaskConical, Lightbulb, Smartphone,
    };
    return iconMap[iconName] || Building;
  };

  return (
    <div className="space-y-6 text-foreground">
      <div>
        <h1 className="text-3xl font-bold">{ministryData.name}</h1>
        <p className="text-lg text-muted-foreground mt-2">{ministryData.description}</p>
      </div>

      <div className="flex justify-end">
        <DownloadButton
          data={ministryData.chartData}
          filename={`minister-${ministryData.id}-data`}
        />
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 bg-muted">
          <TabsTrigger value="overview">Prezentare Generală</TabsTrigger>
          <TabsTrigger value="evolution">Evoluție</TabsTrigger>
          <TabsTrigger value="budget">Buget</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ministryData.stats.map((stat) => (
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

          <Card className="bg-muted/30 rounded-xl border border-border">
            <CardHeader>
              <CardTitle className="text-lg">Evoluția indicatorilor principali</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={ministryData.chartData}>
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
          <Card className="bg-muted/30 rounded-xl border border-border">
            <CardHeader>
              <CardTitle className="text-lg">Evoluție pe ani</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={500}>
                <BarChart data={ministryData.chartData}>
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
          <Card className="bg-muted/30 rounded-xl border border-border">
            <CardHeader>
              <CardTitle className="text-lg">Execuție bugetară</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={ministryData.chartData}>
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
