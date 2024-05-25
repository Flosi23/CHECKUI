import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, RadioGroupItem } from "@lib/RadioGroup";

const meta = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  args: {
    children: (
      <>
        <RadioGroupItem value="1">Option 1</RadioGroupItem>
        <RadioGroupItem value="2">Option 2</RadioGroupItem>
      </>
    ),
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Row: Story = {
  args: {
    direction: "row",
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
