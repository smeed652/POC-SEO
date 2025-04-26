import React from "react";
import { OrderButton } from "./OrderButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof OrderButton> = {
  title: "Atoms/OrderButton",
  component: OrderButton,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof OrderButton>;

export const Default: Story = {
  args: {
    onClick: () => alert("Ordered!"),
  },
};

export const CustomText: Story = {
  args: {
    children: "Add to Cart",
    onClick: () => alert("Added!"),
  },
};
