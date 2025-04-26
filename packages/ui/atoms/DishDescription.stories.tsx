import React from "react";
import { DishDescription } from "./DishDescription";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DishDescription> = {
  title: "Atoms/DishDescription",
  component: DishDescription,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof DishDescription>;

export const Default: Story = {
  args: {
    description: "A delicious combo of fresh sushi, crisp greens, and house-made dressing.",
  },
};
