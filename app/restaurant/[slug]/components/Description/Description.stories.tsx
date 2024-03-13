import type { Meta, StoryObj } from "@storybook/react";

import Description from "./Description";

const meta: Meta<typeof Description> = {
  component: Description,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Restaurant Details",
    description:
      "And broccoli bacon black ham red banana. Sautéed sauce banana meatball pesto ham stuffed. Party fresh wing pan platter large Hawaiian extra. Chicago personal bbq beef pie mushrooms crust broccoli. Ranch.",
  },
};