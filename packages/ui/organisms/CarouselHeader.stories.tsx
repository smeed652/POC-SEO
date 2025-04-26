import React from "react";
import { CarouselHeader } from "./CarouselHeader";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CarouselHeader> = {
  title: "Organisms/CarouselHeader",
  component: CarouselHeader,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof CarouselHeader>;

export const Default: Story = {
  args: {
    title: "Similar Dishes on EveryBite",
    onExploreAll: () => alert("Explore All clicked!"),
  },
};

export const CustomTitle: Story = {
  args: {
    title: "Recommended for You",
    onExploreAll: () => alert("Explore All clicked!"),
  },
};
