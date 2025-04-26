import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import CtaBanner from "./CtaBanner";
import { IconUser } from "../atoms/icons";

const meta: Meta<typeof CtaBanner> = {
  title: "Molecules/CtaBanner",
  component: CtaBanner,
};

export default meta;

type Story = StoryObj<typeof CtaBanner>;

export const Default: Story = {
  args: {
    icon: <IconUser className="h-6 w-6" aria-label="Dietary info" />,
    message: "Does this dish match your dietary requirements?",
    ctaLabel: "Check with EveryBite",
    ctaHref: "#",
  },
};
