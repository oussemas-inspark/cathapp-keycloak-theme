/* eslint-disable @typescript-eslint/no-unused-vars */
import { i18nBuilder } from "keycloakify/login";
import type { ThemeName } from "../kc.gen";

/** @see: https://docs.keycloakify.dev/features/i18n */
const { useI18n, ofTypeI18n } = i18nBuilder
    .withThemeName<ThemeName>()
    .withCustomTranslations({
        en: {
            welcomeMessage:
                "Welcome to CathApp – Your trusted solution for efficient catheter management and healthcare coordination.",

            loginAccountTitle: "Login to your account",
            registerTitle: "Register a new account",
            email: "Email Address",
            enterCredentials: "Enter your credentials below to login",
            passwordPlaceholder: "Enter your password",
            noAccount: "Don't have an account?",
            doRegister: "Sign up",
            home: "Home",
            dark: "Dark",
            light: "Light",
            system: "System",
            copySuccessTitle: "Code copied to clipboard",
            copyErrorTitle: "Failed to copy code"
        },
        fr: {
            welcomeMessage:
                "Bienvenue sur CathApp – Votre solution fiable pour la gestion des cathéters et la coordination des soins de santé.",
            loginAccountTitle: "Connectez-vous à votre compte",
            registerTitle: "Créer un nouveau compte",
            email: "Adresse e-mail",
            enterCredentials:
                "Entrez vos informations d'identification ci-dessous pour vous connecter",
            passwordPlaceholder: "Entrez votre mot de passe",
            doRegister: "S'inscrire",
            noAccount: "Vous n'avez pas de compte ?",
            home: "Accueil",
            dark: "Sombre",
            light: "Clair",
            system: "Système",
            copySuccessTitle: "Code copié dans le presse-papiers",
            copyErrorTitle: "Échec de la copie du code"
        },
        de: {
            welcomeMessage:
                "Willkommen bei CathApp – Ihre vertrauenswürdige Lösung für effizientes Kathetermanagement und Gesundheitskoordination.",

            loginAccountTitle: "Melden Sie sich bei Ihrem Konto an",
            registerTitle: "Neues Konto erstellen",
            email: "E-Mail-Adresse",
            enterCredentials: "Geben Sie unten Ihre Anmeldedaten ein, um sich anzumelden",
            passwordPlaceholder: "Geben Sie Ihr Passwort ein",
            doRegister: "Registrieren",
            noAccount: "Sie haben noch kein Konto?",
            home: "Startseite",
            dark: "Dunkel",
            light: "Hell",
            system: "System",
            copySuccessTitle: "Code in die Zwischenablage kopiert",
            copyErrorTitle: "Fehler beim Kopieren des Codes"
        }
    })
    .build();

type I18n = typeof ofTypeI18n;

export { useI18n, type I18n };
