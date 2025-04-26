import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import NutritionTable, { NutritionTableProps } from "./NutritionTable";

const meta: Meta<typeof NutritionTable> = {
  title: "Molecules/NutritionTable",
  component: NutritionTable,
};

export default meta;

type Story = StoryObj<typeof NutritionTable>;

const sampleRows: NutritionTableProps["rows"] = [
  { label: "Calories", value: 520 },
  { label: "Calories from Fat", value: 175 },
  { label: "Total Fat", value: 18, unit: "g" },
  { label: "Saturated Fat", value: 3, unit: "g" },
  { label: "Trans Fat", value: "<1", unit: "g" },
  { label: "Total Carbohydrates", value: 65, unit: "g" },
  { label: "Dietary Fibre", value: 8, unit: "g" },
  { label: "Sugars", value: 25, unit: "g" },
  { label: "Cholesterol", value: 35, unit: "mg" },
  { label: "Sodium", value: 900, unit: "mg" },
];

export const Default: Story = {
  args: {
    title: "Nutrition",
    rows: sampleRows,
  },
};
