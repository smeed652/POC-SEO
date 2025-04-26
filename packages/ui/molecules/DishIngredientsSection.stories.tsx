import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import DishIngredientsSection from "./DishIngredientsSection";

const meta: Meta<typeof DishIngredientsSection> = {
  title: "Molecules/DishIngredientsSection",
  component: DishIngredientsSection,
};

export default meta;

type Story = StoryObj<typeof DishIngredientsSection>;

export const Default: Story = {
  args: {
    dietaryTypes: ["Soy", "Seafood"],
    ingredients: [
      "Nori Seaweed", "Rice", "Rice Wine Vinegar", "Wasabi paste (Horseradish, Sorbitol, Rice Bran Oil, Sugar, Modified Food Starch, Salt, Water, Cellulose, Wasabi, Artificial Flavor, Citric Acid, Turmeric, Xanthan Gum, Artificial Color)", "Vegetable Oil", "White Sugar", "Salmon", "Tuna", "Eel", "Shrimp", "Pickled Ginger (Ginger, Rice Wine Vinegar, Water, Salt, Sugar)", "Salmon Roe", "Soy Sauce (gluten free)"
    ],
  },
};
