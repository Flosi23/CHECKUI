import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@lib/Button";
import { Search } from "@lib/icons";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    disabled: false,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    children: "Filled",
    variant: "filled",
  },
};

export const Outlined: Story = {
  args: {
    children: "Outlined",
    variant: "outlined",
  },
};

export const OutlinedPrimary: Story = {
  args: {
    children: "Outlined Primary",
    variant: "outlined-primary",
  },
};

export const Icon: Story = {
  args: {
    children: "Button with Icon",
    icon: <Search />,
  },
};
