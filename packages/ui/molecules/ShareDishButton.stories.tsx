import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ShareDishButton from "./ShareDishButton";

const meta: Meta<typeof ShareDishButton> = {
  title: "Molecules/ShareDishButton",
  component: ShareDishButton,
};

export default meta;

type Story = StoryObj<typeof ShareDishButton>;

export const Default: Story = {
  args: {
    label: "Share Dish",
    // icon is default
  },
};
