import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StatCard from "@/components/StatCard";
import DownloadButton from "@/components/DownloadButton";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { formatNumber } from "@/utils/formatNumber";
import {
  Building,
  Users,
  GraduationCap,
  DollarSign,
  Building2,
  UserCheck,
  Truck,
  TrendingUp,
  TrendingDown,
  Target,
  AlertTriangle,
  Car,
  Home,
  RotateCcw,
  Trees,
  Zap,
  Leaf,
  Gauge,
  Battery,
  FlaskConical,
  Lightbulb,
  Smartphone,
} from "lucide-react";

interface Stat {
  id: string;
  label: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: string;
}

interface OverviewDataItem {
  year: string;
  students: number;
  teachers: number;
  budget: number;
  schools: number;
}

interface EvolutionDataItem {
  year: string;
  performance: number;
  access: number;
  resources: number;
  quality: number;
}

interface BudgetDistributionItem {
  name: string;
  value: number;
  color: string;
}

interface BudgetComparisonItem {
  quarter: string;
  planned: number;
  executed: number;
}

interface MinistryData {
  id: string;
  name: string;
  description: string;
  ministries: string[];
  stats: Stat[];
  overviewData: OverviewDataItem[];
  evolutionData: EvolutionDataItem[];
  budgetDistribution: BudgetDistributionItem[];
  budgetComparison: BudgetComparisonItem[];
}

interface MinistryStatsProps {
  ministryData: MinistryData;
}

const pieColors = ["#10b981", "#3b82f6", "#f59e0b", "#ef4444"];

export default function MinistryStats({ ministryData }: MinistryStatsProps) {
  const [activeTab, setActiveTab] = useState("overview");

  const getIconComponent = (iconName: string) => {
    const iconMap: Record<string, any> = {
      Building,
      Users,
      GraduationCap,
      DollarSign,
      Building2,
      UserCheck,
      Truck,
      TrendingUp,
      TrendingDown,
      Target,
      AlertTriangle,
      Car,
      Home,
      RotateCcw,
      Trees,
      Zap,
      Leaf,
      Gauge,
      Battery,
      FlaskConical,
      Lightbulb,
      Smartphone,
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
        <div className="flex items-center gap-4">
          <DownloadButton data={ministryData.overviewData} filename={`minister-${ministryData.id}-overview-data`} />
        </div>
      </div>

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
                <LineChart data={ministryData.overviewData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" tickFormatter={(value: any, _index: number) => formatNumber(value)} />
                  <Tooltip formatter={(value: number) => formatNumber(value)} />
                  <Line yAxisId="left" type="monotone" dataKey="students" stroke="#3b82f6" name="Elevi" />
                  <Line yAxisId="left" type="monotone" dataKey="teachers" stroke="#10b981" name="Cadre didactice" />
                  <Line yAxisId="left" type="monotone" dataKey="schools" stroke="#ef4444" name="Unități școlare" />
                  <Line yAxisId="right" type="monotone" dataKey="budget" stroke="#f59e0b" name="Buget (ajustat)" />
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
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={ministryData.evolutionData} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip formatter={(value: number) => formatNumber(value)} />
                  <Legend />
                  <Bar dataKey="performance" fill="#3b82f6" name="Performanță" />
                  <Bar dataKey="access" fill="#10b981" name="Acces" />
                  <Bar dataKey="resources" fill="#f59e0b" name="Resurse" />
                  <Bar dataKey="quality" fill="#ef4444" name="Calitate" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="budget" className="space-y-6">
          <Card className="bg-muted/30 rounded-xl border border-border p-4 space-y-6">
            <CardHeader>
              <CardTitle className="text-lg">Execuție bugetară</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={ministryData.overviewData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis tickFormatter={(value: number) => formatNumber(value)} />
                  <Tooltip formatter={(value: number) => `${formatNumber(value)} RON`} />
                  <Line type="monotone" dataKey="budget" stroke="#10b981" strokeWidth={2} name="Buget executat" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
