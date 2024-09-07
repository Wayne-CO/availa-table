import type { Meta, StoryObj } from "@storybook/react";

import MenuCard from "./MenuCard";

const meta: Meta<typeof MenuCard> = {
  component: MenuCard,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "336px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Main Combo",
    price: "$3.50",
    description: "Combo description",
  },
};

export const LongTexts: Story = {
  args: {
    name: "V6 Main Combo The Naming of This Food Ideal To Be 2 Lines Only with long name",
    price: "$3.50",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti cupiditate minima veritatis eum temporibus, ipsam atque quos consectetur qui libero rem corporis facilis commodi sit nostrum, facere enim unde quod. Eaque, dolorum? Perferendis saepe, quo dolores consequatur ducimus veniam numquam explicabo in magnam placeat similique labore debitis enim tempore unde amet autem quam facilis minima qui tempora deleniti! Quisquam, similique. Laudantium, maiores. Labore aliquam ut in excepturi fuga explicabo? Optio et sit minus commodi porro reprehenderit aperiam quibusdam eum a, corrupti dolores quod corporis eos placeat impedit expedita, beatae pariatur.",
  },
};
