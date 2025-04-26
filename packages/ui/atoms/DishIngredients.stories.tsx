import React from "react";
import { DishIngredients } from "./DishIngredients";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DishIngredients> = {
  title: "Atoms/DishIngredients",
  component: DishIngredients,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof DishIngredients>;

export const Default: Story = {
  args: {
    ingredients: ["Salmon", "Avocado", "Rice", "Mixed Greens", "Sesame Seeds"],
  },
};
