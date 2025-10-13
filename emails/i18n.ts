import i18n from "i18next";
import { GetMessages } from "keycloakify-emails";
import { initReactI18next } from "react-i18next";

import deTranslation from "./locales/de/translation.json";
import enTranslation from "./locales/en/translation.json";
import frTranslation from "./locales/fr/translation.json";

const resources = {
    en: {
        translation: enTranslation
    },
    fr: {
        translation: frTranslation
    },
    de: {
        translation: deTranslation
    }
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;

/**
 * we want to have this as function with a params, to give developers a
 * flexibility to initialize theirs own i18n solution here
 */
export const getMessages: GetMessages = props => {
    if (props.locale === "de") {
        return {
            "requiredAction.CONFIGURE_TOTP": "OTP konfigurieren",
            "requiredAction.TERMS_AND_CONDITIONS": "Allgemeine Geschäftsbedingungen",
            "requiredAction.UPDATE_PASSWORD": "Passwort aktualisieren",
            "requiredAction.UPDATE_PROFILE": "Profil aktualisieren",
            "requiredAction.VERIFY_EMAIL": "E-Mail-Adresse bestätigen",
            "requiredAction.CONFIGURE_RECOVERY_AUTHN_CODES":
                "Wiederherstellungscodes generieren",

            "linkExpirationFormatter.timePeriodUnit.seconds":
                "{0,choice,0#Sekunden|1#Sekunde|1<Sekunden}",
            "linkExpirationFormatter.timePeriodUnit.minutes":
                "{0,choice,0#Minuten|1#Minute|1<Minuten}",
            "linkExpirationFormatter.timePeriodUnit.hours":
                "{0,choice,0#Stunden|1#Stunde|1<Stunden}",
            "linkExpirationFormatter.timePeriodUnit.days":
                "{0,choice,0#Tage|1#Tag|1<Tage}"
        };
    } else if (props.locale === "fr") {
        return {
            "requiredAction.CONFIGURE_TOTP": "Configurer OTP",
            "requiredAction.TERMS_AND_CONDITIONS": "Termes et conditions",
            "requiredAction.UPDATE_PASSWORD": "Mettre à jour le mot de passe",
            "requiredAction.UPDATE_PROFILE": "Mettre à jour le profil",
            "requiredAction.VERIFY_EMAIL": "Vérifier l'email",
            "requiredAction.CONFIGURE_RECOVERY_AUTHN_CODES":
                "Générer des codes de récupération",

            "linkExpirationFormatter.timePeriodUnit.seconds":
                "{0,choice,0#secondes|1#seconde|1<secondes}",
            "linkExpirationFormatter.timePeriodUnit.minutes":
                "{0,choice,0#minutes|1#minute|1<minutes}",
            "linkExpirationFormatter.timePeriodUnit.hours":
                "{0,choice,0#heures|1#heure|1<heures}",
            "linkExpirationFormatter.timePeriodUnit.days":
                "{0,choice,0#jours|1#jour|1<jours}"
        };
    } else {
        return {
            "requiredAction.CONFIGURE_TOTP": "Configure OTP",
            "requiredAction.TERMS_AND_CONDITIONS": "Terms and Conditions",
            "requiredAction.UPDATE_PASSWORD": "Update Password",
            "requiredAction.UPDATE_PROFILE": "Update Profile",
            "requiredAction.VERIFY_EMAIL": "Verify Email",
            "requiredAction.CONFIGURE_RECOVERY_AUTHN_CODES": "Generate Recovery Codes",

            "linkExpirationFormatter.timePeriodUnit.seconds":
                "{0,choice,0#seconds|1#second|1<seconds}",
            "linkExpirationFormatter.timePeriodUnit.minutes":
                "{0,choice,0#minutes|1#minute|1<minutes}",
            "linkExpirationFormatter.timePeriodUnit.hours":
                "{0,choice,0#hours|1#hour|1<hours}",
            "linkExpirationFormatter.timePeriodUnit.days":
                "{0,choice,0#days|1#day|1<days}"
        };
    }
};
