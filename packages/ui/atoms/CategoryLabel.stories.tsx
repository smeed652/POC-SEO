import React from "react";
import { CategoryLabel } from "./CategoryLabel";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CategoryLabel> = {
  title: "Atoms/CategoryLabel",
  component: CategoryLabel,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof CategoryLabel>;

export const Default: Story = {
  args: {
    label: "Menu Category",
  },
};

export const CustomClass: Story = {
  args: {
    label: "Vegan Special",
    className: "text-green-700",
  },
};
