import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "@lib/Spinner";

const meta = {
  title: "Components/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: "primary",
  },
};

export const PrimaryTransparent: Story = {
  args: {
    color: "primary-transparent",
  },
};

export const OnPrimary: Story = {
  args: {
    color: "on-primary",
  },
  decorators: [
    (Story) => (
      <div className="rounded-lg bg-primary p-10">
        <Story />
      </div>
    ),
  ],
};
