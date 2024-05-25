import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@lib/Checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  args: {
    disabled: false,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Label: Story = {
  args: {
    children: "I agree to the terms and conditions",
  },
};

export const Error: Story = {
  args: {
    children: "I agree to the terms and conditions",
    error: "Please agree to the terms and conditions",
  },
};
