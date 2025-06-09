export function formatNumber(value: number, options?: {
  decimals?: number;
  suffix?: string;
  prefix?: string;
}): string {
  const { decimals = 0, suffix = "", prefix = "" } = options || {};
  
  if (value >= 1e9) {
    return `${prefix}${(value / 1e9).toFixed(decimals)}Mrd${suffix}`;
  }
  
  if (value >= 1e6) {
    return `${prefix}${(value / 1e6).toFixed(decimals)}M${suffix}`;
  }
  
  if (value >= 1e3) {
    return `${prefix}${(value / 1e3).toFixed(decimals)}K${suffix}`;
  }
  
  return `${prefix}${value.toLocaleString('ro-RO', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  })}${suffix}`;
}

export function formatCurrency(value: number, currency: string = "RON"): string {
  return new Intl.NumberFormat('ro-RO', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(value);
}

export function formatPercentage(value: number, decimals: number = 1): string {
  return `${value.toFixed(decimals)}%`;
}
