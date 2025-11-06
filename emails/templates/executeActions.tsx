import { btnTextColor, primaryColor } from "emails/constants";
import { previewLocale } from "emails/utils/previewLocale";
import { applyRTL } from "emails/utils/RTL";
import i18n, { TFunction } from "i18next";
import { Button, Raw, Text, render } from "jsx-email";
import { GetTemplate, GetTemplateProps } from "keycloakify-emails";
import { createVariablesHelper } from "keycloakify-emails/variables";
import { EmailLayout } from "../layout";

type TemplateProps = Omit<GetTemplateProps, "plainText"> & { t: TFunction };

const paragraph = {
    lineHeight: 1.5,
    fontSize: 14,
    textAlign: "left" as const
};

// Style for the hospital code box
const codeBox = {
    backgroundColor: "#f6f9fc",
    padding: "10px 15px",
    borderRadius: "5px",
    border: "1px solid #e0e0e0",
    fontSize: "18px",
    fontWeight: "bold",
    letterSpacing: "1px",
    textAlign: "center" as const,
    margin: "20px 0"
};

const rtlStyle = {
    direction: "rtl" as const,
    textAlign: "right" as const
};

export const previewProps: TemplateProps = {
    t: i18n.getFixedT(previewLocale),
    locale: previewLocale,
    themeName: "vanilla"
};

export const templateName = "ExecuteActions";

// This helper is used by BOTH templates
const { exp } = createVariablesHelper("executeActions.ftl");

export const Template = ({ locale, t }: TemplateProps) => {
    const isRTL = locale === "ar";

    return (
        <EmailLayout preview={t("executeActions.subject")} locale={locale}>
            {/* This is the FreeMarker logic.
              We check if the *only* required action is 'verify-hospital-code'.
            */}
            <Raw content="<#assign isHospitalCode=false />" />
            <Raw content="<#if requiredActions?? && (requiredActions?size == 1) && (requiredActions[0] == 'verify-hospital-code')>" />
            <Raw content="<#assign isHospitalCode=true />" />
            {/* This line conditionally sets the email SUBJECT */}
            <Raw content="<#assign subjectKey='verifyHospitalCodeSubject' />" />
            <Raw content="<#else>" />
            {/* This line sets the default email SUBJECT */}
            <Raw content="<#assign subjectKey='executeActions.subject' />" />
            <Raw content="</#if>" />

            {/* This is the conditional BODY.
              We render the "Verify Hospital Code" template content.
            */}
            <Raw content="<#if isHospitalCode>" />

            <Text style={applyRTL(paragraph, isRTL, rtlStyle)}>
                {t("verifyHospitalCodeBody", {
                    0: exp("user.firstName")
                })}
            </Text>

            <Text style={applyRTL(paragraph, isRTL, rtlStyle)}>
                {t("verifyHospitalCodeMessage")}
            </Text>

            <div
                style={codeBox}
                dangerouslySetInnerHTML={{
                    __html: "${user.attributes.hospital_code[0]!''}"
                }}
            />

            <Text style={applyRTL(paragraph, isRTL, rtlStyle)}>
                {t("verifyHospitalCodeInstructions")}
            </Text>

            <Button
                width={220}
                height={40}
                backgroundColor={primaryColor}
                borderRadius={3}
                textColor={btnTextColor}
                align={isRTL ? "right" : "left"}
                fontSize={15}
                href={exp("link")}
            >
                {t("verifyHospitalCodeButton")}
            </Button>

            <Text style={applyRTL(paragraph, isRTL, rtlStyle)}>
                {t("email-update-confirmation.linkExpiration", {
                    expiration: exp("linkExpirationFormatter(linkExpiration)")
                })}
            </Text>

            {/* This is the "else" block.
              We render the "Default Execute Actions" template content.
            */}
            <Raw content="<#else>" />

            <Text style={applyRTL(paragraph, isRTL, rtlStyle)}>
                {t("executeActions.message", { realmName: exp("realmName") })}
                <Raw content="<#assign requiredActionsText><#if requiredActions??><#list requiredActions><#items as reqActionItem>${msg('requiredAction.${reqActionItem}')}<#sep>, </#sep></#items></#list></#if></#assign>" />
            </Text>

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

            {/* This closes the <#if isHospitalCode> block */}
            <Raw content="</#if>" />
        </EmailLayout>
    );
};

export const getTemplate: GetTemplate = async props => {
    const t = i18n.getFixedT(props.locale);
    return await render(<Template {...props} t={t} />, { plainText: props.plainText });
};
