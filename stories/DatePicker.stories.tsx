import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "@lib/DatePicker";
import { fn } from "@storybook/test";
import { Edit } from "@lib/icons";

const meta = {
  title: "Components/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
  args: {
    label: "Name",
    name: "name",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {};

export const Error: Story = {
  args: {
    error: "Error Text",
  },
};

export const ErrorFilledOut: Story = {
  args: {
    error: "Error Text",
    defaultValue: "Max",
  },
};

export const DisabledEmpty: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledFilledOut: Story = {
  args: {
    defaultValue: "Max",
    disabled: true,
  },
};

export const HelpOverlay: Story = {
  args: {
    onClickHelpIcon: fn(),
  },
};

export const HelpOverlayIcon: Story = {
  args: {
    onClickHelpIcon: fn(),
    icon: Edit,
  },
};

export const Icon: Story = {
  args: {
    icon: Edit,
  },
};

export const DisabledHelpOverlayIcon: Story = {
  args: {
    onClickHelpIcon: fn(),
    icon: Edit,
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};
