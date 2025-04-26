import React from "react";
import { DishName } from "./DishName";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DishName> = {
  title: "Atoms/DishName",
  component: DishName,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof DishName>;

export const Default: Story = {
  args: {
    name: "Sushi & Salad Combo with Salad",
  },
};

export const LongName: Story = {
  args: {
    name: "Sushi & Salad Combo with Salad and Extra Toppings for Special Occasions",
  },
};
