import React from "react";
import { CarouselNavButton } from "./CarouselNavButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CarouselNavButton> = {
  title: "Organisms/CarouselNavButton",
  component: CarouselNavButton,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof CarouselNavButton>;

export const Left: Story = {
  args: {
    direction: "left",
    onClick: () => alert("Scroll left!"),
  },
};

export const Right: Story = {
  args: {
    direction: "right",
    onClick: () => alert("Scroll right!"),
  },
};
