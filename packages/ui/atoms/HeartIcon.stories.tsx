import React from "react";
import { HeartIcon } from "./HeartIcon";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof HeartIcon> = {
  title: "Atoms/HeartIcon",
  component: HeartIcon,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof HeartIcon>;

export const Inactive: Story = {
  args: {
    active: false,
  },
};

export const Active: Story = {
  args: {
    active: true,
  },
};
