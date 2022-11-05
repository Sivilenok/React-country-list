import React from "react";
import { Color } from "../types/colors";
import { BadgeLabel } from "../types/labelTypes";

interface IProps {
  label: BadgeLabel;
  count: number;
  color: Color;
}
export const Badge = ({ label, count, color }: IProps) => {
  return (
    <span className={`badge bg-${color} col-2 p-2`}>
      {label}: {count}
    </span>
  );
};
