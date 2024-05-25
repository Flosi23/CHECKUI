import type { Meta, StoryObj } from "@storybook/react";
import { GratificationBar } from "@lib/GratificationBar";
import { Edit } from "@lib/icons";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/GratificationBar",
  component: GratificationBar,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    children: "25 € Gutschein und 500 Punkte vorgemerkt",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof GratificationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
  args: {
  },
};

export const Icon: Story = {
  args: {
    icon: <Edit className={"w-18 stroke-0"} />,
  },
};

export const HelpOverlay: Story = {
  args: {
    icon: <Edit className={"w-18 stroke-0"} />,
    onClickHelpIcon: fn()
  },
};

export const GoldClub: Story = {
  args: {
    variant: "goldclub",
    icon: <Edit className={"w-18 stroke-0"} />,
    onClickHelpIcon: fn()
  },
};

export const TwoLines: Story = {
  args: {
    children: <div>
      <p>25 € Gutschein und 500 Punkte vorgemerkt</p>
      <p className={"mt-0.5"}>... jetzt nur bei CHECK24</p>
    </div>,
    lines: 2,
  },
}

export const Error: Story = {
  args: {
    error: true,
    onClickHelpIcon: fn(),
  },
}
