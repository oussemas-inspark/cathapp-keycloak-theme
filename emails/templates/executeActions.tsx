import { btnTextColor, primaryColor } from "emails/constants";
import { previewLocale } from "emails/utils/previewLocale";
import { applyRTL } from "emails/utils/RTL";
import i18n, { TFunction } from "i18next";
import { Button, Raw, Text, render } from "jsx-email";
import { GetSubject, GetTemplate, GetTemplateProps } from "keycloakify-emails";
import { createVariablesHelper } from "keycloakify-emails/variables";
import { EmailLayout } from "../layout";

type TemplateProps = Omit<GetTemplateProps, "plainText"> & { t: TFunction };

const paragraph = {
    lineHeight: 1.5,
    fontSize: 14,
    textAlign: "left" as const
};

const rtlStyle = {
    direction: "rtl" as const,
    textAlign: "right" as const
};

// --- New Styles for the Code Block ---

// Corresponds to: my-6 p-6 bg-gray-50 border border-gray-200 rounded-lg text-center
const codeContainerStyle = {
    // Only margin-bottom is needed now
    margin: "0 0 24px 0", 
    padding: "24px",
    backgroundColor: "#F9FAFB",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    textAlign: "center" as const // This helps center the block's content
};

// This is the style for the label (which you provided)
const codeLabelStyle = {
    ...paragraph,
    marginBottom: "12px",
    color: "#374151"
};

// This is the style for the code (from our last change)
const codeStyle = {
    ...paragraph,
    textAlign: "center" as const,
    fontSize: "32px",
    fontWeight: "bold" as const,
    fontFamily: "'Courier New', Courier, monospace",
    color: "#555555",
    letterSpacing: "0.1em"
};

// ----------------------------------------

export const previewProps: TemplateProps = {
    t: i18n.getFixedT(previewLocale),
    locale: previewLocale,
    themeName: "vanilla"
};

export const templateName = "ExecuteActions";

const { exp } = createVariablesHelper("executeActions.ftl");

export const Template = ({ locale, t }: TemplateProps) => {
    const isRTL = locale === "ar";

    return (
        <EmailLayout preview={t("executeActions.subject")} locale={locale}>
            {/* ... existing text... */}
            <Text style={applyRTL(paragraph, isRTL, rtlStyle)}>
                {t("executeActions.message", { realmName: exp("realmName") })}
                <Raw content="<#assign requiredActionsText><#if requiredActions??><#list requiredActions><#items as reqActionItem>${msg('requiredAction.${reqActionItem}')}<#sep>, </#sep></#items></#list></#if></#assign>" />
            </Text>

            <Raw content="<#if requiredActions?? && requiredActions?seq_contains('verify-hospital-code')>" />
            <Raw content='<#assign hospital_code = (user.getAttributes().hospital_code)!"">' />

            {/* 1. The label is now OUTSIDE and BEFORE the container */}
            <Text style={applyRTL(codeLabelStyle, isRTL, rtlStyle)}>
                {t("executeActions.hospitalCodeLabel")}
            </Text>

            {/* 2. This container now ONLY holds the code */}
            <div style={codeContainerStyle}>
                <Text style={codeStyle}>
                    <Raw content="${hospital_code}" />
                </Text>
            </div>

            <Raw content="</#if>" />

            <Text style={applyRTL(paragraph, isRTL, rtlStyle)}>
                {t("executeActions.clickLink")}
            </Text>

            <Button
                width={200}
                height={40}
                backgroundColor={primaryColor}
                textColor={btnTextColor}
                align={isRTL ? "right" : "left"}
                borderRadius={3}
                fontSize={15}
                href={exp("link")}
            >
                {t("executeActions.updateAccountButton")}
            </Button>

            <Text style={applyRTL(paragraph, isRTL, rtlStyle)}>
                {t("executeActions.linkExpiration", {
                    expiration: exp("linkExpirationFormatter(linkExpiration)")
                })}
            </Text>

            <Text style={applyRTL(paragraph, isRTL, rtlStyle)}>
                {t("executeActions.ignoreMessage")}
            </Text>
        </EmailLayout>
    );
};

export const getTemplate: GetTemplate = async props => {
    const t = i18n.getFixedT(props.locale);
    return await render(<Template {...props} t={t} />, { plainText: props.plainText });
};

export const getSubject: GetSubject = async props => {
    const t = i18n.getFixedT(props.locale);
    return t("executeActions.subject");
};