import type { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";
import RestaurantNavBar from "./RestaurantNavBar";

const meta: Meta<typeof RestaurantNavBar> = {
  component: RestaurantNavBar,
};

export default meta;
type Story = StoryObj<typeof meta>;

function NavBarContainer() {
  const [value, setValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <RestaurantNavBar
      tabs={[{ label: "overview" }, { label: "menu" }]}
      value={value}
      handleTabChange={handleTabChange}
    />
  );
}

export const Default: Story = {
  render: () => <NavBarContainer />,
};
