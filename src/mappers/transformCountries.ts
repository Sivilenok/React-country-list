import { ICountry, ICountryApi } from "../types/types";

export const transformCountries = (countries: ICountryApi[]): ICountry[] => {
  return countries.map((country) => {
    return {
      population: country.population,
      area: country.area,
      region: country.region,
      capital: country.capital[0],
      name: country.name.common,
      flag: country.flags.svg,
    };
  });
};
