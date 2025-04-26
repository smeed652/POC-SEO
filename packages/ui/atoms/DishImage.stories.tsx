import React from "react";
import { DishImage } from "./DishImage";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DishImage> = {
  title: "Atoms/DishImage",
  component: DishImage,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof DishImage>;

export const Placeholder: Story = {
  args: {
    src: "https://placehold.co/297x152",
    alt: "Placeholder Dish",
  },
};

export const RealImage: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    alt: "Sushi Plate",
  },
};
