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

export const Default: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithLabel: Story = {
  args: {
    disabled: true,
    label: "Ich habe die AGB gelesen und akzeptiere sie"
  },
};

export const WithError: Story = {
  args: {
    disabled: true,
    label: "Ich habe die AGB gelesen und akzeptiere sie",
    error: "Bitte akzeptieren Sie die AGB"
  },
};
