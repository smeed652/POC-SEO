import React from "react";
import { BreadcrumbSeparator } from "./BreadcrumbSeparator";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BreadcrumbSeparator> = {
  title: "Atoms/BreadcrumbSeparator",
  component: BreadcrumbSeparator,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof BreadcrumbSeparator>;

export const Default: Story = {
  args: {},
};
