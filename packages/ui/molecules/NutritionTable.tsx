import React from "react";

/**
 * NutritionTable molecule — accessible, reusable nutrition facts table.
 *
 * Design tokens: w-full, text-xs, text-slate-700, font-sans, font-bold, mb-2, font-normal, pr-4, text-right, ml-1
 * Update tokens if the design system changes.
 */
export type NutritionRow = {
  label: string;
  value: string | number;
  unit?: string;
};

export interface NutritionTableProps {
  rows: NutritionRow[];
  title?: string;
  className?: string;
}

const NutritionTable: React.FC<NutritionTableProps> = ({ rows, title = "Nutrition", className = "" }) => (
  <table className={`w-full text-xs text-slate-700 font-sans ${className}`}>
    <caption className="text-left font-bold mb-2">{title}</caption>
    <tbody>
      {rows.map(({ label, value, unit }) => (
        <tr key={label}>
          <th scope="row" className="font-normal pr-4 text-left">{label}</th>
          <td className="text-right">{value}{unit && <span className="ml-1">{unit}</span>}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default NutritionTable;
