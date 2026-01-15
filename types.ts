export interface GDPData {
  year: string;
  gdp: number; // In Trillion RMB
  growthRate: number; // Percentage
}

export interface PovertyData {
  year: string;
  population: number; // In Millions
  urbanization: number; // Percentage
}

export interface TechData {
  year: string;
  expenditure: number; // In Billion RMB
  patents: number; // In Thousands
}

export interface LifeData {
  year: string;
  expectancy: number; // Years
}

export interface AppData {
  gdp: GDPData[];
  poverty: PovertyData[];
  tech: TechData[];
  life: LifeData[];
}