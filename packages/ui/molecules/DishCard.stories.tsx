import React from "react";
import { DishCard, Dish } from "./DishCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DishCard> = {
  title: "Molecules/DishCard",
  component: DishCard,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof DishCard>;

const sampleDish: Dish = {
  id: 1,
  image: "https://placehold.co/297x152",
  name: "Sushi & Salad Combo with Salad",
  category: "Menu Category",
  calories: 123,
  sizes: 3,
  customizable: true,
  favorite: true,
};

export const Default: Story = {
  args: {
    dish: sampleDish,
    onOrder: () => alert("Order placed!"),
  },
};

export const NotFavorite: Story = {
  args: {
    dish: { ...sampleDish, favorite: false },
    onOrder: () => alert("Order placed!"),
  },
};
