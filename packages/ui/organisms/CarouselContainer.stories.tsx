import React from "react";
import { CarouselContainer } from "./CarouselContainer";
import type { Dish } from "../molecules/DishCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CarouselContainer> = {
  title: "Organisms/CarouselContainer",
  component: CarouselContainer,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof CarouselContainer>;

const sampleDishes: Dish[] = [
  {
    id: 1,
    image: "https://placehold.co/297x152",
    name: "Sushi & Salad Combo with Salad",
    category: "Menu Category",
    calories: 123,
    sizes: 3,
    customizable: true,
    favorite: true,
  },
  {
    id: 2,
    image: "https://placehold.co/297x152",
    name: "Chicken Teriyaki Bowl",
    category: "Asian",
    calories: 450,
    sizes: 2,
    customizable: false,
    favorite: false,
  },
  {
    id: 3,
    image: "https://placehold.co/297x152",
    name: "Vegan Delight",
    category: "Vegan",
    calories: 320,
    sizes: 1,
    customizable: true,
    favorite: false,
  },
  {
    id: 4,
    image: "https://placehold.co/297x152",
    name: "Pasta Primavera",
    category: "Italian",
    calories: 390,
    sizes: 2,
    customizable: true,
    favorite: false,
  },
  {
    id: 5,
    image: "https://placehold.co/297x152",
    name: "BBQ Chicken Pizza",
    category: "Pizza",
    calories: 500,
    sizes: 3,
    customizable: false,
    favorite: true,
  },
];

export const Default: Story = {
  args: {
    dishes: sampleDishes,
    onOrder: (dish) => alert(`Order placed for ${dish.name}!`),
    onExploreAll: () => alert("Explore All clicked!"),
  },
};
