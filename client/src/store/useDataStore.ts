import { create } from 'zustand';

interface DataStore {
  selectedYear: number;
  selectedMinistry: string;
  setSelectedYear: (year: number) => void;
  setSelectedMinistry: (ministry: string) => void;
}

export const useDataStore = create<DataStore>((set) => ({
  selectedYear: new Date().getFullYear(),
  selectedMinistry: 'toate',
  setSelectedYear: (year: number) => set({ selectedYear: year }),
  setSelectedMinistry: (ministry: string) => set({ selectedMinistry: ministry }),
}));
