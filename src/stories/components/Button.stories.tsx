import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../components/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Create Referral",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Create Referral",
    variant: "secondary",
  },
};
