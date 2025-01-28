import type { Meta, StoryObj } from "@storybook/react";
import { ReferralPreview } from "../../widgets/ReferralPreview";
import { mock } from "../../mock/mock";

const meta: Meta<typeof ReferralPreview> = {
  title: "Widgets/ReferralPreview",
  component: ReferralPreview,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ReferralPreview>;

export const Default: Story = {
  args: {
    ...mock.previewData,
  },
};
