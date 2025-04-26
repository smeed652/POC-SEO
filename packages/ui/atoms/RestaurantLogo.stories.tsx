import React from "react";
import { RestaurantLogo } from "./RestaurantLogo";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RestaurantLogo> = {
  title: "Atoms/RestaurantLogo",
  component: RestaurantLogo,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof RestaurantLogo>;

export const Default: Story = {
  args: {
    src: "https://placehold.co/40x40",
    alt: "Sample Restaurant",
  },
};
