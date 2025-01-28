import type { Meta, StoryObj } from "@storybook/react";
import { FormHeader } from "../../components/FormHeader";

const meta: Meta<typeof FormHeader> = {
  title: "Components/FormHeader",
  component: FormHeader,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof FormHeader>;

export const Default: Story = {
  args: {
    children: "Lorem ipsum",
  },
};
