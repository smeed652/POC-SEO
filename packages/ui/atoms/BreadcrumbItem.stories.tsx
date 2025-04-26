import React from "react";
import { BreadcrumbItem } from "./BreadcrumbItem";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BreadcrumbItem> = {
  title: "Atoms/BreadcrumbItem",
  component: BreadcrumbItem,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof BreadcrumbItem>;

export const Link: Story = {
  args: {
    label: "Menu",
    href: "/menus",
  },
};

export const Active: Story = {
  args: {
    label: "Sushi & Salad Combo",
    isActive: true,
  },
};
