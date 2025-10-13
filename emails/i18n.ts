import i18n from "i18next";
import { GetMessages } from "keycloakify-emails";
import { initReactI18next } from "react-i18next";

import deTranslation from "./locales/de/translation.json";
import enTranslation from "./locales/en/translation.json";
import esTranslation from "./locales/es/translation.json";
import frTranslation from "./locales/fr/translation.json";
import itTranslation from "./locales/it/translation.json";

const resources = {
    en: {
        translation: enTranslation
    },
    fr: {
        translation: frTranslation
    },
    de: {
        translation: deTranslation
    },
    es: {
        translation: esTranslation
    },
    it: {
        translation: itTranslation
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
    } else if (props.locale === "es") {
        return {
            "requiredAction.CONFIGURE_TOTP": "Configurar OTP",
            "requiredAction.TERMS_AND_CONDITIONS": "Términos y condiciones",
            "requiredAction.UPDATE_PASSWORD": "Actualizar contraseña",
            "requiredAction.UPDATE_PROFILE": "Actualizar perfil",
            "requiredAction.VERIFY_EMAIL": "Verificar correo electrónico",
            "requiredAction.CONFIGURE_RECOVERY_AUTHN_CODES":
                "Generar códigos de recuperación",

            "linkExpirationFormatter.timePeriodUnit.seconds":
                "{0,choice,0#segundos|1#segundo|1<segundos}",
            "linkExpirationFormatter.timePeriodUnit.minutes":
                "{0,choice,0#minutos|1#minuto|1<minutos}",
            "linkExpirationFormatter.timePeriodUnit.hours":
                "{0,choice,0#horas|1#hora|1<horas}",
            "linkExpirationFormatter.timePeriodUnit.days":
                "{0,choice,0#días|1#día|1<días}"
        };
    } else if (props.locale === "it") {
        return {
            "requiredAction.CONFIGURE_TOTP": "Configura OTP",
            "requiredAction.TERMS_AND_CONDITIONS": "Termini e condizioni",
            "requiredAction.UPDATE_PASSWORD": "Aggiorna password",
            "requiredAction.UPDATE_PROFILE": "Aggiorna profilo",
            "requiredAction.VERIFY_EMAIL": "Verifica email",
            "requiredAction.CONFIGURE_RECOVERY_AUTHN_CODES": "Genera codici di recupero",

            "linkExpirationFormatter.timePeriodUnit.seconds":
                "{0,choice,0#secondi|1#secondo|1<secondi}",
            "linkExpirationFormatter.timePeriodUnit.minutes":
                "{0,choice,0#minuti|1#minuto|1<minuti}",
            "linkExpirationFormatter.timePeriodUnit.hours":
                "{0,choice,0#ore|1#ora|1<ore}",
            "linkExpirationFormatter.timePeriodUnit.days":
                "{0,choice,0#giorni|1#giorno|1<giorni}"
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
