import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";

import RestaurantNavBar from "./RestaurantNavBar";

const meta: Meta<typeof RestaurantNavBar> = {
  component: RestaurantNavBar,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabs: [{ label: "overview" }, { label: "menu" }],
    value: 0,
  },
  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs();

    function handleTabChange(event: React.SyntheticEvent, value: number) {
      updateArgs({ value: value });
    }

    return (
      <RestaurantNavBar
        {...args}
        value={value}
        handleTabChange={handleTabChange}
      />
    );
  },
};
