export interface ICountry {
  population: number;
  area: number;
  region: string;
  capital: string;
  name: string;
  flag: string;
}

export interface ICountryApi {
  flags: IFlag;
  name: IName;
  capital: string[];
  region: string;
  area: number;
  population: number;
}

export interface IFlag {
  png: string;
  svg: string;
}

export interface IName {
  common: string;
  official: string;
  nativeName: Record<string, INativeName | undefined>;
}

export interface INativeName {
  official: string;
  common: string;
}
