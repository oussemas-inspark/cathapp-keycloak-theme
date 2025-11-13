/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { ExtendKcContext } from "keycloakify/login";
import type { KcEnvName, ThemeName } from "../kc.gen";

export type KcContextExtension = {
    themeName: ThemeName;
    properties: Record<KcEnvName, string> & {};
    client: {
        baseUrl?: string;
    };
};

export type KcContextExtensionPerPage = {
    "verify-hospital-code.ftl": {
        // Add any custom context properties for this page if needed
        // These are optional and will be used for Storybook mocking
    };
};

export type KcContext = ExtendKcContext<KcContextExtension, KcContextExtensionPerPage>;
