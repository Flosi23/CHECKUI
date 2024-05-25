import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "@lib/Label";

const meta = {
  title: "Components/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  args: {
    variant: "bestseller",
    children: "Bestseller",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
  args: {
    variant: "regular",
    children: "Leistungs-Empfehlung",
    showInfoIcon: true,
  },
};

export const Bestseller: Story = {
  args: {
    variant: "bestseller",
    children: "Bestseller",
  },
};
