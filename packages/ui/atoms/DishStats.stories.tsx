import React from "react";
import { DishStats } from "./DishStats";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DishStats> = {
  title: "Atoms/DishStats",
  component: DishStats,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof DishStats>;

export const Default: Story = {
  args: {
    calories: 123,
    sizes: 3,
    customizable: true,
  },
};

export const Fixed: Story = {
  args: {
    calories: 450,
    sizes: 1,
    customizable: false,
  },
};
