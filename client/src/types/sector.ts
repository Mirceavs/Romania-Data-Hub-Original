export interface SectorStats {
  id: string;
  label: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: string;
}

export interface ChartDataPoint {
  year: string;
  value: number;
  budget: number;
}

export interface SectorData {
  id: string;
  name: string;
  description: string;
  ministries: string[];
  stats: SectorStats[];
  chartData: ChartDataPoint[];
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  url?: string;
}

export interface Indicator {
  id: string;
  label: string;
  value: string;
  trend: string;
  trendType: "positive" | "negative" | "neutral";
  lastUpdate: string;
  category: string;
}
