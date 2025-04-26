import React from "react";
import { DishDetailCard } from "./DishDetailCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DishDetailCard> = {
  title: "Molecules/DishDetailCard",
  component: DishDetailCard,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof DishDetailCard>;

export const Default: Story = {
  args: {
    image: "https://placehold.co/400x192",
    name: "Sushi & Salad Combo",
    calories: 450,
    sizes: 2,
    customizable: true,
    description: "A delicious combo of fresh sushi, crisp greens, and house-made dressing.",
    ingredients: ["Salmon", "Avocado", "Rice", "Mixed Greens", "Sesame Seeds"],
    nutrition: { protein: 22, fat: 14, carbs: 55 },
    onOrder: () => alert("Order placed!"),
  },
};
