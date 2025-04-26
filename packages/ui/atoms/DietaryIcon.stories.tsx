import React from "react";
import { DietaryIcon } from "./DietaryIcon";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DietaryIcon> = {
  title: "Atoms/DietaryIcon",
  component: DietaryIcon,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof DietaryIcon>;

export const Vegan: Story = { args: { type: "vegan" } };
export const Vegetarian: Story = { args: { type: "vegetarian" } };
export const GlutenFree: Story = { args: { type: "gluten-free" } };
export const DairyFree: Story = { args: { type: "dairy-free" } };
export const NutFree: Story = { args: { type: "nut-free" } };
export const Spicy: Story = { args: { type: "spicy" } };
