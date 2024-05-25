import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxGroup } from "@lib/Checkbox";

const meta = {
  title: "Components/CheckboxGroup",
  component: CheckboxGroup,
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
    direction: "column",
    children: (
      <>
        <Checkbox value="1">Text 1</Checkbox>
        <Checkbox value="2">Text 2</Checkbox>
      </>
    ),
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {};

export const DisabledSingleElement: Story = {
  args: {
    children: (
      <>
        <Checkbox value="1">Text 1</Checkbox>
        <Checkbox value="2" disabled>
          Text 2
        </Checkbox>
      </>
    ),
  },
};
