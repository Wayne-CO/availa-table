import type { Meta, StoryObj } from "@storybook/react";

import Description from "./Description";

const meta: Meta<typeof Description> = {
  component: Description,
  decorators: [
    (Story) => (
      <div style={{ width: "688px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    description:
      "And broccoli bacon black ham red banana. Sautéed sauce banana meatball pesto ham stuffed. Party fresh wing pan platter large Hawaiian extra. Chicago personal bbq beef pie mushrooms crust broccoli. Ranch.",
  },
};
