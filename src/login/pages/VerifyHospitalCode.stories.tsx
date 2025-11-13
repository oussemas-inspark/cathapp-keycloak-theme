import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "verify-hospital-code.ftl" });

const meta = {
    title: "login/verify-hospital-code.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: args => <KcPageStory {...args} />
};

export const WithInvalidCode: Story = {
    render: args => (
        <KcPageStory
            {...args}
            kcContext={{
                messagesPerField: {
                    existsError: (fieldName: string) => fieldName === "hospital_code",
                    get: (fieldName: string) => 
                        fieldName === "hospital_code" 
                            ? "The hospital code you entered is incorrect. Please try again." 
                            : "",
                    getFirstError: (fieldName: string) =>
                        fieldName === "hospital_code"
                            ? "The hospital code you entered is incorrect. Please try again."
                            : ""
                }
            }}
        />
    )
};

export const WithErrorMessage: Story = {
    render: args => (
        <KcPageStory
            {...args}
            kcContext={{
                message: {
                    type: "error",
                    summary: "The hospital code you entered is incorrect. Please try again."
                }
            }}
        />
    )
};

export const French: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "fr"
                }
            }}
        />
    )
};

export const German: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "de"
                }
            }}
        />
    )
};

export const Spanish: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "es"
                }
            }}
        />
    )
};

export const Italian: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "it"
                }
            }}
        />
    )
};