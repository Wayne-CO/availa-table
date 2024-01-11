import type { Meta, StoryObj } from "@storybook/react";

import RestaurantCard from "./RestaurantCard";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof RestaurantCard> = {
  title: "Home/RestaurantCard",
  component: RestaurantCard,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Pizza Hut",
    location: {
      name: "Toronto",
    },
    cuisine: { name: "Canadian" },
  },
};
