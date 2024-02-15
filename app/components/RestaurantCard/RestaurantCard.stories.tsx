import type { Meta, StoryObj } from "@storybook/react";

import RestaurantCard from "./RestaurantCard";

const meta: Meta<typeof RestaurantCard> = {
  title: "Home/RestaurantCard",
  component: RestaurantCard,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    restaurant: {
      id: 1,
      slug: "pizza-hut-ottawa",
      name: "Pizza Hut",
      location: {
        name: "Toronto",
      },
      cuisine: { name: "Canadian" },
      price: "CHEAP",
      mainImage:
        "https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg",
    },
  },
};
