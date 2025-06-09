import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface MinistryFilterProps {
  ministries: string[];
  selectedMinistry: string;
  onMinistryChange: (ministry: string) => void;
}

export default function MinistryFilter({ 
  ministries, 
  selectedMinistry, 
  onMinistryChange 
}: MinistryFilterProps) {
  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="ministry-filter" className="text-sm font-medium text-gray-700">
        Filtrează după minister:
      </label>
      <Select value={selectedMinistry} onValueChange={onMinistryChange}>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Selectează ministerul" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="toate">Toate ministerele</SelectItem>
          {ministries.map((ministry) => (
            <SelectItem key={ministry} value={ministry}>
              {ministry}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
