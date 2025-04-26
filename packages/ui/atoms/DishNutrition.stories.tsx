import React from "react";
import { DishNutrition } from "./DishNutrition";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DishNutrition> = {
  title: "Atoms/DishNutrition",
  component: DishNutrition,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof DishNutrition>;

export const Default: Story = {
  args: {
    calories: 450,
    protein: 22,
    fat: 14,
    carbs: 55,
  },
};

export const CaloriesOnly: Story = {
  args: {
    calories: 320,
  },
};
