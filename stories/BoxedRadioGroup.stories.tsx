import type { Meta, StoryObj } from "@storybook/react";
import { BoxedRadioGroup, RadioGroupItem } from "@lib/RadioGroup";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/BoxedRadioGroup",
  component: BoxedRadioGroup,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
  args: {
    label: "Label",
    onClickHelpIcon: fn(),
    direction: "column",
    children: (
      <>
        <RadioGroupItem value="1">Option 1</RadioGroupItem>
        <RadioGroupItem value="2">Option 2</RadioGroupItem>
      </>
    ),
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BoxedRadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {};

export const Row: Story = {
  args: {
    direction: "row",
  },
};

export const Error: Story = {
  args: {
    error: "Error Text",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledSingleElement: Story = {
  args: {
    children: (
      <>
        <RadioGroupItem value="1">Option 1</RadioGroupItem>
        <RadioGroupItem value="2" disabled>
          Option 2
        </RadioGroupItem>
      </>
    ),
  },
};
