import type { Meta, StoryObj } from "@storybook/react";

import Price from "./Price";

const meta: Meta<typeof Price> = {
  title: "Home/Price",
  component: Price,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Cheap: Story = {
  args: {
    price: "CHEAP",
  },
};

export const Regular: Story = {
  args: {
    price: "REGULAR",
  },
};

export const Expensive: Story = {
  args: {
    price: "EXPENSIVE",
  },
};
