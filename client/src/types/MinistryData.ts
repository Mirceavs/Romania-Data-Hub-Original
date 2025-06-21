// types/MinistryData.ts

export interface MinistryData {
  id: string;
  name: string;
  description: string;
  stats: MinistryStatCard[]; // carduri principale
  overviewData: MinistryOverviewData[]; // grafice liniare
  evolutionData: MinistryEvolutionGroup[]; // categorii bar chart
  budgetExecution: BudgetExecutionPoint[]; // execuție bugetară (line chart)
  budgetDistribution: BudgetDistributionSlice[]; // pie chart
  budgetPlannedVsExecuted: BudgetPlannedExecutedPoint[]; // bar chart
}

export interface MinistryStatCard {
  id: string;
  label: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: string; // lucide icon
}

export interface MinistryOverviewData {
  year: string;
  students: number; // elevi + studenți
  teachers: number;
  budget: number; // ajustat cu inflația
  schools: number;
}
export interface MinistryEvolutionGroup {
  category: "performanta" | "acces" | "resurse" | "calitate";
  label: string; // ex: "Promovabilitate BAC"
  values: {
    year: string;
    value: number;
  }[];
}
export interface BudgetExecutionPoint {
  year: string;
  value: number;
}
export interface BudgetDistributionSlice {
  category: "salarii" | "bunuri" | "investitii" | "transferuri";
  label: string;
  value: number;
}
export interface BudgetPlannedExecutedPoint {
  trimester: string; // T1, T2, T3, T4
  planned: number;
  executed: number;
}
