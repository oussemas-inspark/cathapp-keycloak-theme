import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputError } from "@/components/ui/input-error";
import { Label } from "@/components/ui/label";
import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";

type VerifyHospitalCodeProps = PageProps<
    Extract<KcContext, { pageId: "verify-hospital-code.ftl" }>,
    I18n
>;

export default function VerifyHospitalCode(props: Readonly<VerifyHospitalCodeProps>) {
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
            displayMessage={!messagesPerField.existsError("hospital_code")}
            headerNode={
                <div className="text-start">
                    <p className="text-2xl font-bold">{msg("verifyHospitalCodePageTitle")}</p>
                    <p className="text-balance font-normal text-sm text-muted-foreground">
                        {msg("verifyHospitalCodeDescription")}
                    </p>
                    <hr className="my-3" />
                </div>
            }
        >
            <form
                id="kc-verify-hospital-code-form"
                className={messagesPerField.existsError("hospital_code") ? "space-y-1" : "space-y-4"}
                action={url.loginAction}
                method="post"
            >
                <div>
                    <Label htmlFor="hospital_code">
                        {msg("verifyHospitalCodeFormLabel")}
                    </Label>
                    <Input
                        type="text"
                        id="hospital_code"
                        name="hospital_code"
                        autoFocus
                        className="autofill:bg-background"
                        autoComplete="off"
                        placeholder={msgStr("verifyHospitalCodePlaceholder")}
                        error={messagesPerField.existsError("hospital_code")}
                    />
                    {messagesPerField.existsError("hospital_code") && (
                        <InputError id="input-error-hospital-code">
                            {messagesPerField.getFirstError("hospital_code")}
                        </InputError>
                    )}
                </div>

                <div className={kcClsx("kcFormGroupClass")}>
                    <Button
                        className="w-full"
                        type="submit"
                    >
                        {msgStr("verifyHospitalCodeSubmitButton")}
                    </Button>

                    {isAppInitiatedAction && (
                        <Button
                            variant="outline"
                            className="w-full mt-3"
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