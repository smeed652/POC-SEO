import React from "react";
import { RestaurantName } from "./RestaurantName";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RestaurantName> = {
  title: "Atoms/RestaurantName",
  component: RestaurantName,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof RestaurantName>;

export const Default: Story = {
  args: {
    name: "Sushi Place",
  },
};
