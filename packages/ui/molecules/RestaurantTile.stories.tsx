import React from "react";
import { RestaurantTile } from "./RestaurantTile";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RestaurantTile> = {
  title: "Molecules/RestaurantTile",
  component: RestaurantTile,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof RestaurantTile>;

export const Default: Story = {
  args: {
    logo: "https://placehold.co/40x40",
    name: "Sushi Place",
    cuisine: "Japanese",
    distance: "1.2 mi",
  },
};

export const NoDistance: Story = {
  args: {
    logo: "https://placehold.co/40x40",
    name: "Pasta House",
    cuisine: "Italian",
  },
};
