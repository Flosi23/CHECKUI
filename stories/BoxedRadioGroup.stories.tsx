import type { Meta, StoryObj } from "@storybook/react";
import { BoxedRadioGroup, RadioGroupItem } from "@lib/RadioGroup";

const meta = {
  title: "Components/BoxedRadioGroup",
  component: BoxedRadioGroup,
  parameters: {
    layout: "centered",
  },
  args: {
    direction: "column",
    children: (
      <>
        <RadioGroupItem value={"1"}>Text 1</RadioGroupItem>
        <RadioGroupItem value={"2"}>Text 2</RadioGroupItem>
      </>
    ),
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BoxedRadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {};

export const Error: Story = {
  args: {
    error: "Error Text"
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
        <RadioGroupItem value={"1"}>
          Text 1
        </RadioGroupItem>
        <RadioGroupItem value={"2"} disabled>
          Text 2
        </RadioGroupItem>
      </>
    ),
  },
};
