import React from "react";
import { ICountry } from "../types/types";
import { CountryItem } from "./CountryItem";

interface IProps {
  countries: ICountry[];
}

export const CountryList = ({ countries }: IProps) => {
  const countryList = countries.map((country) => {
    return <CountryItem country={country} key={country.name} />;
  });
  return <ul className="list-group">{countryList}</ul>;
};