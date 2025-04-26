import React from "react";
import { DietaryText } from "./DietaryText";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DietaryText> = {
  title: "Atoms/DietaryText",
  component: DietaryText,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof DietaryText>;

export const Vegan: Story = { args: { text: "Vegan" } };
export const GlutenFree: Story = { args: { text: "Gluten-Free" } };
export const Spicy: Story = { args: { text: "Spicy" } };
