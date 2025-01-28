import type { Meta, StoryObj } from "@storybook/react";
import { ReferralBuilderForm } from "../../widgets/ReferralBuilderForm";
import { mock } from "../../mock/mock";

const meta: Meta<typeof ReferralBuilderForm> = {
  title: "Widgets/ReferralBuilderForm",
  component: ReferralBuilderForm,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ReferralBuilderForm>;

export const Default: Story = {
  args: {
    ...mock.formData,
  },
};
