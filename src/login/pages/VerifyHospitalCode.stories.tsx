import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

// This is the critical change: specify your new pageId here.
const { KcPageStory } = createKcPageStory({ pageId: "verify-hospital-code.ftl" });

const meta = {
    // This title tells Storybook where to place it in the navigation
    title: "login/verify-hospital-code.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

// This is the default, successful view of your page.
export const Default: Story = {
    render: args => <KcPageStory {...args} />
};

// This story simulates the error message from your Java SPI.
// It's based on the "WithErrorMessage" story from your login.stories.tsx example.
export const WithErrorMessage: Story = {
    render: args => (
        <KcPageStory
            {...args}
            kcContext={{
                // This simulates the error from your Java SPI's
                // context.form().setError("invalidHospitalCodeMessage")
                message: {
                    type: "error",
                    // This text should match the 'invalidHospitalCodeMessage'
                    // from your i18n file.
                    summary: "The hospital code you entered is incorrect. Please try again."
                }
            }}
        />
    )
};