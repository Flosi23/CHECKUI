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
        <RadioGroupItem value={"1"}>Text 1</RadioGroupItem>
        <RadioGroupItem value={"2"}>Text 2</RadioGroupItem>
      </>
    ),
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {};

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
