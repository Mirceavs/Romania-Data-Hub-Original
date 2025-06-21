import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StatCard from "@/components/StatCard";
import DownloadButton from "@/components/DownloadButton";
import { formatNumber } from "@/utils/formatNumber";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, Legend
} from "recharts";
import {
  Building, Users, GraduationCap, DollarSign, Building2, UserCheck, Truck,
  TrendingUp, TrendingDown, Target, AlertTriangle, Car, Home, RotateCcw, Trees,
  Zap, Leaf, Gauge, Battery, FlaskConical, Lightbulb, Smartphone
} from "lucide-react";

interface MinistryData {
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
  overviewData: Array<{
    year: string;
    students: number;
    teachers: number;
    budget: number;
    schools: number;
  }>;
  evolutionData: Array<{
    category: string;
    label: string;
    values: Array<{
      year: string;
      value: number;
    }>;
  }>;
  budgetExecution: Array<{
    year: string;
    value: number;
  }>;
  budgetDistribution: Array<{
    category: string;
    label: string;
    value: number;
  }>;
  budgetPlannedVsExecuted: Array<{
    trimester: string;
    planned: number;
    executed: number;
  }>;
}

interface MinistryStatsProps {
  ministryData: MinistryData;
}

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"];

export default function MinistryStats({ ministryData }: MinistryStatsProps) {
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
    <div className="space-y-6 text-foreground">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">{ministryData.name}</h1>
          <p className="text-lg text-muted-foreground mt-2">{ministryData.description}</p>
        </div>
        <DownloadButton
  data={ministryData.overviewData}
  filename={`minister-${ministryData.id}-overview`}
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
              <LineChart data={ministryData.overviewData}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="year" />
  <YAxis yAxisId="left" />
  <YAxis yAxisId="right" orientation="right" />
  <Tooltip formatter={(value: number) => formatNumber(value)} />
  <Line yAxisId="left" type="monotone" dataKey="students" stroke="#3b82f6" name="Elevi" />
  <Line yAxisId="left" type="monotone" dataKey="teachers" stroke="#10b981" name="Cadre didactice" />
  <Line yAxisId="right" type="monotone" dataKey="budget" stroke="#f59e0b" name="Buget (ajustat)" />
  <Line yAxisId="left" type="monotone" dataKey="schools" stroke="#ef4444" name="Unități școlare" />
</LineChart>

              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="evolution" className="space-y-6">
          {ministryData.evolutionData.map((evo) => (
            <Card key={evo.category} className="bg-muted/30 rounded-xl border border-border">
              <CardHeader>
                <CardTitle className="text-lg">{evo.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={evo.values}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip formatter={(value: number) => formatNumber(value)} />
                    <Bar dataKey="value" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="budget" className="space-y-6">
          <Card className="bg-muted/30 rounded-xl border border-border">
            <CardHeader>
              <CardTitle className="text-lg">Execuție bugetară</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={ministryData.budgetExecution}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip formatter={(value: number) => `${formatNumber(value)} RON`} />
                  <Line type="monotone" dataKey="value" stroke="#10b981" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-muted/30 rounded-xl border border-border">
            <CardHeader>
              <CardTitle className="text-lg">Distribuția bugetului</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={ministryData.budgetDistribution}
                    dataKey="value"
                    nameKey="label"
                    cx="50%"
                    cy="50%"
                    outerRadius={130}
                    label={(entry) => entry.label}
                  >
                    {ministryData.budgetDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-muted/30 rounded-xl border border-border">
            <CardHeader>
              <CardTitle className="text-lg">Planificat vs. Executat</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={ministryData.budgetPlannedVsExecuted}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="trimester" />
                  <YAxis />
                  <Tooltip formatter={(value: number) => `${formatNumber(value)} RON`} />
                  <Bar dataKey="planned" fill="#f59e0b" name="Planificat" />
                  <Bar dataKey="executed" fill="#10b981" name="Executat" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
