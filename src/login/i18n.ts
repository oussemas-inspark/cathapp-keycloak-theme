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
            copyErrorTitle: "Failed to copy code",
            // Hospital code verification page
            verifyHospitalCodePageTitle: "Verify Hospital Code",
            verifyHospitalCodeDescription: "Please enter your hospital code to continue",
            verifyHospitalCodeFormLabel: "Hospital Code",
            verifyHospitalCodePlaceholder: "Enter your hospital code",
            verifyHospitalCodeSubmitButton: "Verify Code",
            invalidHospitalCodeMessage:
                "The hospital code you entered is incorrect. Please try again."
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
            copyErrorTitle: "Échec de la copie du code",
            // Hospital code verification page
            verifyHospitalCodePageTitle: "Vérifier le code de l'hôpital",
            verifyHospitalCodeDescription:
                "Veuillez entrer votre code d'hôpital pour continuer",
            verifyHospitalCodeFormLabel: "Code de l'hôpital",
            verifyHospitalCodePlaceholder: "Entrez votre code d'hôpital",
            verifyHospitalCodeSubmitButton: "Vérifier le code",
            invalidHospitalCodeMessage:
                "Le code de l'hôpital que vous avez entré est incorrect. Veuillez réessayer."
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
            copyErrorTitle: "Fehler beim Kopieren des Codes",
            // Hospital code verification page
            verifyHospitalCodePageTitle: "Krankenhaus-Code überprüfen",
            verifyHospitalCodeDescription:
                "Bitte geben Sie Ihren Krankenhaus-Code ein, um fortzufahren",
            verifyHospitalCodeFormLabel: "Krankenhaus-Code",
            verifyHospitalCodePlaceholder: "Geben Sie Ihren Krankenhaus-Code ein",
            verifyHospitalCodeSubmitButton: "Code überprüfen",
            invalidHospitalCodeMessage:
                "Der eingegebene Krankenhaus-Code ist falsch. Bitte versuchen Sie es erneut."
        },
        es: {
            welcomeMessage:
                "Bienvenido a CathApp: tu solución de confianza para una gestión eficiente de catéteres y coordinación sanitaria.",

            loginAccountTitle: "Iniciar sesión en tu cuenta",
            registerTitle: "Registrar una nueva cuenta",
            email: "Dirección de correo electrónico",
            enterCredentials:
                "Ingresa tus credenciales a continuación para iniciar sesión",
            passwordPlaceholder: "Ingresa tu contraseña",
            noAccount: "¿No tienes una cuenta?",
            doRegister: "Registrarse",
            home: "Inicio",
            dark: "Oscuro",
            light: "Claro",
            system: "Sistema",
            copySuccessTitle: "Código copiado al portapapeles",
            copyErrorTitle: "Error al copiar el código",
            // Hospital code verification page
            verifyHospitalCodePageTitle: "Verificar código del hospital",
            verifyHospitalCodeDescription:
                "Por favor, ingrese su código de hospital para continuar",
            verifyHospitalCodeFormLabel: "Código del hospital",
            verifyHospitalCodePlaceholder: "Ingrese su código de hospital",
            verifyHospitalCodeSubmitButton: "Verificar código",
            invalidHospitalCodeMessage:
                "El código del hospital que ingresó es incorrecto. Por favor, inténtelo de nuevo."
        },
        it: {
            welcomeMessage:
                "Benvenuto su CathApp: la tua soluzione affidabile per una gestione efficiente dei cateteri e il coordinamento sanitario.",

            loginAccountTitle: "Accedi al tuo account",
            registerTitle: "Registra un nuovo account",
            email: "Indirizzo email",
            enterCredentials: "Inserisci le tue credenziali qui sotto per accedere",
            passwordPlaceholder: "Inserisci la tua password",
            noAccount: "Non hai un account?",
            doRegister: "Registrati",
            home: "Home",
            dark: "Scuro",
            light: "Chiaro",
            system: "Sistema",
            copySuccessTitle: "Codice copiato negli appunti",
            copyErrorTitle: "Errore nella copia del codice",
            // Hospital code verification page
            verifyHospitalCodePageTitle: "Verifica il codice dell'ospedale",
            verifyHospitalCodeDescription:
                "Inserisci il tuo codice ospedaliero per continuare",
            verifyHospitalCodeFormLabel: "Codice dell'ospedale",
            verifyHospitalCodePlaceholder: "Inserisci il tuo codice ospedaliero",
            verifyHospitalCodeSubmitButton: "Verifica codice",
            invalidHospitalCodeMessage:
                "Il codice dell'ospedale inserito non è corretto. Riprova."
        }
    })
    .build();

type I18n = typeof ofTypeI18n;

export { useI18n, type I18n };
