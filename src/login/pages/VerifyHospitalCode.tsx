import { Button } from "@/components/ui/button"; // Using your Button component
import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";

// Define the props for our custom page
type VerifyHospitalCodeProps = PageProps<
  Extract<KcContext, { pageId: "verify-hospital-code.ftl" }>,
  I18n
>;

export default function VerifyHospitalCode(props: VerifyHospitalCodeProps) {
  const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

  const { kcClsx } = getKcClsx({
    doUseDefaultCss,
    classes
  });

  const { msg, msgStr } = i18n;
  const { url, messagesPerField, isAppInitiatedAction } = kcContext;

  return (
    <Template
      kcContext={kcContext}
      i18n={i18n}
      doUseDefaultCss={doUseDefaultCss}
      classes={classes}
      // This will display global errors (like 'invalidHospitalCodeMessage')
      displayMessage={messagesPerField.exists("global")}
      headerNode={msg("verifyHospitalCodePageTitle")}
    >
      {/* 
        This form is now a CHILD of Template, just like in your UpdateEmail.tsx.
        The action MUST be url.loginAction for Keycloak to route it
        to your SPI's processAction method.
      */}
      <form
        id="kc-verify-hospital-code-form"
        className="space-y-6" // Using the class from your example
        action={url.loginAction}
        method="post"
      >
        {/* This div replaces the UserProfileFormFields component */}
        <div className={kcClsx("kcFormGroupClass")}>
          <label htmlFor="hospital_code" className={kcClsx("kcLabelClass")}>
            {msg("verifyHospitalCodeFormLabel")}
          </label>
          <input
            type="text"
            id="hospital_code"
            // This 'name' is critical. It MUST match the key
            // your Java SPI (VerifyHospitalCodeProvider) expects.
            name="hospital_code"
            className={kcClsx("kcInputClass")}
            autoFocus
          />
          {/* This block will display field-specific errors if you add them */}
          {messagesPerField.existsError("hospital_code") && (
            <span
              id="input-error-hospital-code"
              className={kcClsx("kcInputErrorMessageClass")}
              aria-live="polite"
              dangerouslySetInnerHTML={{
                __html: messagesPerField.get("hospital_code")
              }}
            />
          )}
        </div>

        <div className="space-y-3">
          {/* Using your custom Button component */}
          <Button className="w-full" type="submit">
            {msgStr("verifyHospitalCodeSubmitButton")}
          </Button>

          {/* 
            Including the 'Cancel' button for consistency 
            with your UpdateEmail.tsx
          */}
          {isAppInitiatedAction && (
            <Button
              variant="outline"
              className="w-full"
              type="submit"
              name="cancel-aia"
              value="true"
            >
              {msg("doCancel")}
            </Button>
          )}
        </div>
      </form>
    </Template>
  );
}