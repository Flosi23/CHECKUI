import type { Meta, StoryObj } from "@storybook/react";
import { Plectrum } from "@lib/Plectrum";

const meta = {
  title: "Components/Plectrum",
  component: Plectrum,
  parameters: {
    layout: "centered",
  },
  args: {
    children: <>
      <span className="text-2xl font-semibold leading-5 mb-2">Gratis </span>
      <span className="leading-4">für jeden</span>
    </>
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Plectrum>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
