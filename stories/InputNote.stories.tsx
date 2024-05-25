import type { Meta, StoryObj } from "@storybook/react";
import { InputNote, InputNoteContent, InputNoteTitle } from "@lib/InputNote";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/InputNote",
  component: InputNote,
  parameters: {
    layout: "centered",
  },
  args: {
    children: (
      <>
        <InputNoteTitle>Information from CHECK24</InputNoteTitle>
        <InputNoteContent>You will receive a confirmation via email.</InputNoteContent>
      </>
    ),
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputNote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {};

export const Close: Story = {
  args: {
    onClickClose: fn(),
  },
};
