import React from "react";
import { DietaryBanner } from "./DietaryBanner";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DietaryBanner> = {
  title: "Molecules/DietaryBanner",
  component: DietaryBanner,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof DietaryBanner>;

export const Default: Story = {
  args: {
    items: [
      { type: "vegan", text: "Vegan" },
      { type: "gluten-free", text: "Gluten-Free" },
      { type: "spicy", text: "Spicy" },
    ],
  },
};
