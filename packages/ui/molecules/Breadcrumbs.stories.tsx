import React from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Molecules/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Menus", href: "/menus" },
      { label: "Sushi & Salad Combo", isActive: true },
    ],
  },
};
