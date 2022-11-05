import React from "react";
import { ICountry } from "../types/types";
import { Color } from "../types/colors";
import { Badge } from "./Badge";

interface IProps {
  country: ICountry;
}

export const CountryItem = ({ country }: IProps) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <img src={country.flag} className="list__image col-1 p-2" alt={`Flag of ${country.name}`} width="95" height="75" />
      <p className="list__name m-0 col-2 p-2">{country.name}</p>
      <p className="list__capital m-0 col-2 p-2">{country.capital}</p>
      <p className="list__region m-0 col-2 p-2">{country.region}</p>
      <Badge label="area" count={country.area} color={Color.Primary} />
      <Badge label="population"count={country.population} color={Color.Secondary} />
    </li>
  );
};
