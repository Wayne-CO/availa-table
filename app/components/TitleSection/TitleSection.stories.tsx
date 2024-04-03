import type { Meta, StoryObj } from "@storybook/react";

import TitleSection from "./TitleSection";

const meta: Meta<typeof TitleSection> = {
  component: TitleSection,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "restaurant details",
  },
};
