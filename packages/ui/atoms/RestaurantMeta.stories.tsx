import React from "react";
import { RestaurantMeta } from "./RestaurantMeta";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RestaurantMeta> = {
  title: "Atoms/RestaurantMeta",
  component: RestaurantMeta,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof RestaurantMeta>;

export const Default: Story = {
  args: {
    cuisine: "Japanese",
    distance: "1.2 mi",
  },
};

export const NoDistance: Story = {
  args: {
    cuisine: "Italian",
  },
};
