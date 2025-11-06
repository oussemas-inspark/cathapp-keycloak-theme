import { btnTextColor, primaryColor } from "emails/constants";
import { previewLocale } from "emails/utils/previewLocale";
import { applyRTL } from "emails/utils/RTL";
import i18n, { TFunction } from "i18next";
import { Button, Text, render } from "jsx-email";
import { GetSubject, GetTemplate, GetTemplateProps } from "keycloakify-emails";
import { createVariablesHelper } from "keycloakify-emails/variables";
import { EmailLayout } from "../layout";

type TemplateProps = Omit<GetTemplateProps, "plainText"> & { t: TFunction };

// Helper styles
const paragraph = {
    lineHeight: 1.5,
    fontSize: 14,
    textAlign: "left" as const
};

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

export const templateName = "Verify Hospital Code Email";

// We use "executeActions.ftl" as the base because our custom SPI
// is overriding the sendExecuteActions method. This gives us
// access to all the standard variables like 'link', 'user', etc.
const { exp } = createVariablesHelper("executeActions.ftl");

export const Template = ({ locale, t }: TemplateProps) => {
    const isRTL = locale === "ar";

    return (
        <EmailLayout preview={t("verifyHospitalCodeSubject")} locale={locale}>
            {/* Use interpolation for the body text, {0} maps to user's name */}
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
                    __html: "${hospitalCode}"
                }}
            />

            <Text style={applyRTL(paragraph, isRTL, rtlStyle)}>
                {t("verifyHospitalCodeInstructions")}
            </Text>

            <Button
                width={220} // Adjusted width for longer text
                height={40}
                backgroundColor={primaryColor}
                borderRadius={3}
                textColor={btnTextColor}
                align={isRTL ? "right" : "left"}
                fontSize={15}
                href={exp("link")} // The link from the Java SPI
            >
                {t("verifyHospitalCodeButton")}
            </Button>

            <Text style={applyRTL(paragraph, isRTL, rtlStyle)}>
                {/* We can re-use an existing translation key if it fits */}
                {t("email-update-confirmation.linkExpiration", {
                    expiration: exp("linkExpirationFormatter(linkExpiration)")
                })}
            </Text>
        </EmailLayout>
    );
};

// This renders the React component to an HTML string
export const getTemplate: GetTemplate = async props => {
    const t = i18n.getFixedT(props.locale);
    return await render(<Template {...props} t={t} />, { plainText: props.plainText });
};

// This tells Keycloakify what subject key to use from your i18n files
export const getSubject: GetSubject = async props => {
    const t = i18n.getFixedT(props.locale);
    return t("verifyHospitalCodeSubject");
};
