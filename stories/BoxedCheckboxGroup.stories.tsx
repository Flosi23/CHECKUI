import type { Meta, StoryObj } from "@storybook/react";
import { BoxedCheckboxGroup, Checkbox } from "@lib/Checkbox";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/BoxedCheckboxGroup",
  component: BoxedCheckboxGroup,
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
        <Checkbox value={"1"}>Text 1</Checkbox>
        <Checkbox value={"2"}>Text 2</Checkbox>
      </>
    ),
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BoxedCheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {};

export const Error: Story = {
  args: {
    error: "Error Text",
  },
};

export const DisabledSingleElement: Story = {
  args: {
    children: (
      <>
        <Checkbox value={"1"}>Text 1</Checkbox>
        <Checkbox value={"2"} disabled>
          Text 2
        </Checkbox>
      </>
    ),
  },
};
