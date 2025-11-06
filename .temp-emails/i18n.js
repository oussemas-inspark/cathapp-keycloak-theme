// emails/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// emails/locales/de/translation.json
var translation_default = {
  "email-test": {
    subject: "E-Mail-Test",
    greeting: "Hallo",
    passwordUpdate: "Sie haben Ihr Passwort f\xFCr Ihr {{realmName}}-Konto am {{date}} ge\xE4ndert. Wenn Sie diese \xC4nderung vorgenommen haben, ist keine weitere Aktion erforderlich.",
    passwordReset: "Wenn Sie diese \xC4nderung jedoch nicht vorgenommen haben, setzen Sie bitte Ihr Passwort sofort zur\xFCck.",
    passwordAdvice: "Denken Sie daran, ein starkes und einzigartiges Passwort f\xFCr Ihr {{realmName}}-Konto zu verwenden. Weitere Informationen zum Erstellen eines sicheren Passworts finden Sie hier:",
    loginButton: "Bei Inspark anmelden",
    contactSupport: "Haben Sie noch Fragen? Bitte wenden Sie sich an den Support von {{realmName}}.",
    thanks: "Vielen Dank,",
    supportTeam: "Ihr {{realmName}} Support-Team"
  },
  "email-update-confirmation": {
    subject: "Best\xE4tigung der neuen E-Mail-Adresse",
    linkExpiration: "Dieser Link l\xE4uft in {{expiration}} ab.",
    updateEmailAddress: "Um Ihr Konto bei {{realmName}} mit der neuen E-Mail-Adresse {{newEmail}} zu aktualisieren,",
    clickLinkBelow: "klicken Sie bitte auf den untenstehenden Link.",
    updateEmail: "E-Mail aktualisieren",
    ignoreMessage: "Wenn Sie diese \xC4nderung nicht vornehmen m\xF6chten, ignorieren Sie einfach diese Nachricht."
  },
  "email-verification": {
    subject: "E-Mail-Best\xE4tigung",
    message: "Ein Konto f\xFCr {{firstName}} wurde mit dieser E-Mail-Adresse erstellt. Wenn Sie dieses Konto erstellt haben, klicken Sie auf den untenstehenden Link, um Ihre E-Mail-Adresse zu best\xE4tigen.",
    verifyButton: "E-Mail best\xE4tigen",
    linkExpiration: "Dieser Link l\xE4uft in {{expiration}} ab.",
    ignoreMessage: "Wenn Sie dieses Konto nicht erstellt haben, ignorieren Sie einfach diese Nachricht."
  },
  "event-login_error": {
    subject: "Anmeldefehler",
    message: "Ein fehlgeschlagener Anmeldeversuch f\xFCr Ihr Konto wurde am {{date}} von der IP-Adresse {{ipAddress}} festgestellt.",
    contactAdmin: "Wenn Sie dies nicht waren, wenden Sie sich bitte an den Administrator."
  },
  "event-remove_credential": {
    subject: "Anmeldeinformationen entfernt",
    message: "Die Anmeldeinformationen {{credentialType}} wurden am {{date}} von der IP-Adresse {{ipAddress}} aus Ihrem Konto entfernt.",
    contactAdmin: "Wenn Sie dies nicht waren, wenden Sie sich bitte an den Administrator."
  },
  "event-remove_totp": {
    subject: "OTP entfernt",
    message: "Das Einmalpasswort (OTP) wurde am {{date}} von der IP-Adresse {{ipAddress}} aus Ihrem Konto entfernt.",
    contactAdmin: "Wenn Sie dies nicht waren, wenden Sie sich bitte an den Administrator."
  },
  "event-update_credential": {
    subject: "Anmeldeinformationen aktualisiert",
    message: "Ihre Anmeldeinformationen {{credentialType}} wurden am {{date}} von der IP-Adresse {{ipAddress}} ge\xE4ndert.",
    contactAdmin: "Wenn Sie dies nicht waren, wenden Sie sich bitte an den Administrator."
  },
  "event-update_password": {
    subject: "Passwortaktualisierung",
    message: "Ihr Passwort wurde am {{date}} von der IP-Adresse {{ipAddress}} ge\xE4ndert.",
    contactAdmin: "Wenn Sie dies nicht waren, wenden Sie sich bitte an den Administrator."
  },
  "event-update_totp": {
    subject: "OTP aktualisiert",
    message: "Ihr Einmalpasswort (OTP) wurde am {{date}} von der IP-Adresse {{ipAddress}} aktualisiert.",
    contactAdmin: "Wenn Sie dies nicht waren, wenden Sie sich bitte an den Administrator."
  },
  "event-user_disabled_by_permanent_lockout": {
    subject: "Benutzer dauerhaft gesperrt",
    message: "Ihr Benutzerkonto wurde am {{date}} aufgrund mehrerer fehlgeschlagener Anmeldeversuche dauerhaft gesperrt.",
    contactAdmin: "Bitte wenden Sie sich an den Administrator."
  },
  "event-user_disabled_by_temporary_lockout": {
    subject: "Benutzer vor\xFCbergehend gesperrt",
    message: "Ihr Benutzerkonto wurde am {{date}} aufgrund mehrerer fehlgeschlagener Anmeldeversuche vor\xFCbergehend gesperrt.",
    contactAdmin: "Bitte wenden Sie sich an den Administrator."
  },
  executeActions: {
    subject: "Aktualisieren Sie Ihr Konto",
    message: "Ihr Administrator hat angefordert, Ihr {{realmName}}-Konto zu aktualisieren, indem Sie die folgenden Aktionen ausf\xFChren:",
    clickLink: "Klicken Sie auf den untenstehenden Link, um diesen Vorgang zu starten.",
    linkExpiration: "Dieser Link l\xE4uft in {{expiration}} ab.",
    ignoreMessage: "Wenn Sie diese Anfrage nicht erwartet haben, ignorieren Sie bitte diese Nachricht. Es werden keine \xC4nderungen vorgenommen.",
    updateAccountButton: "Konto aktualisieren"
  },
  "identity-provider-link": {
    subject: "Verkn\xFCpfung mit Ihrem {0}-Konto",
    message: "Jemand m\xF6chte Ihr {{identityProviderDisplayName}}-Konto mit dem {{realmName}}-Konto von Benutzer {{username}} verkn\xFCpfen.",
    clickLink: "Wenn Sie dies waren, klicken Sie auf den untenstehenden Link, um die Konten zu verkn\xFCpfen.",
    linkExpiration: "Dieser Link l\xE4uft in {{expiration}} ab.",
    ignoreMessage: "Wenn Sie diese \xC4nderung nicht vornehmen m\xF6chten, ignorieren Sie einfach diese Nachricht.",
    linkAccountsButton: "Konten verkn\xFCpfen",
    loginInfo: "Nach der Verkn\xFCpfung k\xF6nnen Sie sich bei {{identityProviderDisplayName}} \xFCber {{realmName}} anmelden."
  },
  "org-invite": {
    subject: "Einladung zum Beitritt zur Organisation {0}",
    greeting: "Hallo, {{firstName}} {{lastName}}.",
    message: "Sie wurden eingeladen, der Organisation {{organizationName}} beizutreten. Klicken Sie auf den untenstehenden Link, um beizutreten.",
    linkExpiration: "Dieser Link l\xE4uft in {{expiration}} ab.",
    ignoreMessage: "Wenn Sie der Organisation nicht beitreten m\xF6chten, ignorieren Sie bitte diese Nachricht.",
    joinButton: "Organisation beitreten"
  },
  "password-reset": {
    subject: "Passwort zur\xFCcksetzen",
    message: "Jemand hat angefordert, die Anmeldeinformationen Ihres {{realmName}}-Kontos zu \xE4ndern. Wenn Sie dies waren, klicken Sie auf den untenstehenden Link, um sie zur\xFCckzusetzen.",
    linkExpiration: "Dieser Link l\xE4uft in {{expiration}} ab.",
    ignoreMessage: "Wenn Sie Ihre Anmeldeinformationen nicht zur\xFCcksetzen m\xF6chten, ignorieren Sie bitte diese Nachricht. Es werden keine \xC4nderungen vorgenommen.",
    resetButton: "Anmeldeinformationen zur\xFCcksetzen"
  },
  "verify-hospital-code": {
    verifyHospitalCodeSubject: "Verifizieren Sie Ihren Krankenhauscode",
    verifyHospitalCodeBody: "Hallo {{0}},",
    verifyHospitalCodeMessage: "Bitte verwenden Sie den folgenden Code, um Ihre Krankenhauszugeh\xF6rigkeit zu verifizieren:",
    verifyHospitalCodeInstructions: "Alternativ k\xF6nnen Sie auf die Schaltfl\xE4che unten klicken, um den Verifizierungsprozess abzuschlie\xDFen:",
    verifyHospitalCodeButton: "Krankenhauscode verifizieren"
  },
  footer: {
    allRightsReserved: "\xA9 {{currentYear}} {{realmName}}, alle Rechte vorbehalten",
    address: "7 Rue de Lille, Bizerte, 1053, Tunis, Tunesien"
  }
};

// emails/locales/en/translation.json
var translation_default2 = {
  "email-test": {
    subject: "Email Test",
    greeting: "Hi",
    passwordUpdate: "You updated the password for your Twitch account on {{date}}. If this was you, then no further action is required.",
    passwordReset: "However if you did NOT perform this password change, please reset your account password immediately.",
    passwordAdvice: "Remember to use a password that is both strong and unique to your Twitch account. To learn more about how to create a strong and unique password,",
    loginButton: "Login to Inspark",
    contactSupport: "Still have questions? Please contact {{realmName}} Support",
    thanks: "Thanks,",
    supportTeam: "{{realmName}}, Support Team"
  },
  "email-update-confirmation": {
    subject: "Verify new email",
    linkExpiration: " This link will expire within {{expiration}}.",
    updateEmailAddress: "To update your {{realmName}} account with email address {{newEmail}}",
    clickLinkBelow: "click the link below",
    updateEmail: "Update Email",
    ignoreMessage: "If you don't want to proceed with this modification, just ignore this message."
  },
  "email-verification": {
    subject: "Verify email",
    message: "Someone has created a {{firstName}} account with this email address. If this was you, click the link below to verify your email address.",
    verifyButton: "Verify email",
    linkExpiration: "This link will expire within {{expiration}}.",
    ignoreMessage: "If you didn't create this account, just ignore this message."
  },
  "event-login_error": {
    subject: "Login error",
    message: "A failed login attempt was detected to your account on {{date}} from {{ipAddress}}.",
    contactAdmin: "If this was not you, please contact an administrator."
  },
  "event-remove_credential": {
    subject: "Remove credential",
    message: "Credential {{credentialType}} was removed from your account on {{date}} from {{ipAddress}}.",
    contactAdmin: "If this was not you, please contact an administrator."
  },
  "event-remove_totp": {
    subject: "Remove OTP",
    message: "OTP was removed from your account on {{date}} from {{ipAddress}}.",
    contactAdmin: "If this was not you, please contact an administrator."
  },
  "event-update_credential": {
    subject: "Update credential",
    message: "Your {{credentialType}} credential was changed on {{date}} from {{ipAddress}}.",
    contactAdmin: "If this was not you, please contact an administrator."
  },
  "event-update_password": {
    subject: "Update password",
    message: "Your password was changed on {{date}} from {{ipAddress}}.",
    contactAdmin: "If this was not you, please contact an administrator."
  },
  "event-update_totp": {
    subject: "Update OTP",
    message: "OTP was updated for your account on {{date}} from {{ipAddress}}.",
    contactAdmin: "If this was not you, please contact an administrator."
  },
  "event-user_disabled_by_permanent_lockout": {
    subject: "User disabled by permanent lockout",
    message: "Your user has been disabled permanently because of multiple failed attempts on {{date}}.",
    contactAdmin: "Please contact an administrator."
  },
  "event-user_disabled_by_temporary_lockout": {
    subject: "User disabled by temporary lockout",
    message: "Your user has been disabled temporarily because of multiple failed attempts on {{date}}.",
    contactAdmin: "Please contact an administrator."
  },
  executeActions: {
    subject: "Update Your Account",
    message: "Your administrator has just requested that you update your {{realmName}} account by performing the following action(s):",
    clickLink: "Click on the link below to start this process.",
    linkExpiration: "This link will expire within {{expiration}}.",
    ignoreMessage: "If you are unaware that your administrator has requested this, just ignore this message and nothing will be changed.",
    updateAccountButton: "Update Account"
  },
  "identity-provider-link": {
    subject: "Link {0} with your account",
    message: "Someone wants to link your {{identityProviderDisplayName}} account with {{realmName}} account of user {{username}}.",
    clickLink: "If this was you, click the link below to link accounts",
    linkExpiration: "This link will expire within {{expiration}}.",
    ignoreMessage: "If you don't want to proceed with this modification, just ignore this message.",
    linkAccountsButton: "Link Accounts",
    loginInfo: "If you link accounts, you will be able to login to {{identityProviderDisplayName}} through {{realmName}}."
  },
  "org-invite": {
    subject: "Invitation to join the {0} organization",
    greeting: "Hi, {{firstName}} {{lastName}}.",
    message: "You were invited to join the {{organizationName}} organization. Click the link below to join.",
    linkExpiration: "This link will expire within {{expiration}}.",
    ignoreMessage: "If you don't want to join the organization, just ignore this message.",
    joinButton: "Join the organization"
  },
  "password-reset": {
    subject: "Reset password",
    message: "Someone just requested to change your {{realmName}} account's credentials. If this was you, click on the link below to reset them.",
    linkExpiration: "This link will expire within {{expiration}}.",
    ignoreMessage: "If you don't want to reset your credentials, just ignore this message and nothing will be changed.",
    resetButton: "Reset credentials"
  },
  "verify-hospital-code": {
    verifyHospitalCodeSubject: "Verify Your Hospital Code",
    verifyHospitalCodeBody: "Hello {{0}},",
    verifyHospitalCodeMessage: "Please use the following code to verify your hospital affiliation:",
    verifyHospitalCodeInstructions: "Alternatively, you can click the button below to complete the verification process:",
    verifyHospitalCodeButton: "Verify Hospital Code"
  },
  footer: {
    allRightsReserved: "\xA9 {{currentYear}} {{realmName}}, All Rights Reserved",
    address: "7 Bizerte Island Street, 1053, Tunis, Tunisia"
  }
};

// emails/locales/es/translation.json
var translation_default3 = {
  "email-test": {
    subject: "Prueba de correo electr\xF3nico",
    greeting: "Hola",
    passwordUpdate: "Actualizaste la contrase\xF1a de tu cuenta de Twitch el {{date}}. Si fuiste t\xFA, no es necesaria ninguna acci\xF3n adicional.",
    passwordReset: "Sin embargo, si NO realizaste este cambio de contrase\xF1a, restablece la contrase\xF1a de tu cuenta de inmediato.",
    passwordAdvice: "Recuerda usar una contrase\xF1a que sea segura y \xFAnica para tu cuenta de Twitch. Para obtener m\xE1s informaci\xF3n sobre c\xF3mo crear una contrase\xF1a segura y \xFAnica,",
    loginButton: "Iniciar sesi\xF3n en Inspark",
    contactSupport: "\xBFA\xFAn tienes preguntas? Contacta con el soporte de {{realmName}}",
    thanks: "Gracias,",
    supportTeam: "Equipo de soporte de {{realmName}}"
  },
  "email-update-confirmation": {
    subject: "Verificar nuevo correo electr\xF3nico",
    linkExpiration: " Este enlace caducar\xE1 en {{expiration}}.",
    updateEmailAddress: "Para actualizar tu cuenta de {{realmName}} con la direcci\xF3n de correo electr\xF3nico {{newEmail}}",
    clickLinkBelow: "haz clic en el enlace a continuaci\xF3n",
    updateEmail: "Actualizar correo electr\xF3nico",
    ignoreMessage: "Si no deseas continuar con esta modificaci\xF3n, simplemente ignora este mensaje."
  },
  "email-verification": {
    subject: "Verificar correo electr\xF3nico",
    message: "Alguien cre\xF3 una cuenta de {{firstName}} con esta direcci\xF3n de correo electr\xF3nico. Si fuiste t\xFA, haz clic en el enlace a continuaci\xF3n para verificar tu direcci\xF3n de correo electr\xF3nico.",
    verifyButton: "Verificar correo electr\xF3nico",
    linkExpiration: "Este enlace caducar\xE1 en {{expiration}}.",
    ignoreMessage: "Si no creaste esta cuenta, simplemente ignora este mensaje."
  },
  "event-login_error": {
    subject: "Error de inicio de sesi\xF3n",
    message: "Se detect\xF3 un intento fallido de inicio de sesi\xF3n en tu cuenta el {{date}} desde {{ipAddress}}.",
    contactAdmin: "Si no fuiste t\xFA, contacta con un administrador."
  },
  "event-remove_credential": {
    subject: "Eliminar credencial",
    message: "La credencial {{credentialType}} fue eliminada de tu cuenta el {{date}} desde {{ipAddress}}.",
    contactAdmin: "Si no fuiste t\xFA, contacta con un administrador."
  },
  "event-remove_totp": {
    subject: "Eliminar OTP",
    message: "OTP fue eliminado de tu cuenta el {{date}} desde {{ipAddress}}.",
    contactAdmin: "Si no fuiste t\xFA, contacta con un administrador."
  },
  "event-update_credential": {
    subject: "Actualizar credencial",
    message: "Tu credencial {{credentialType}} fue cambiada el {{date}} desde {{ipAddress}}.",
    contactAdmin: "Si no fuiste t\xFA, contacta con un administrador."
  },
  "event-update_password": {
    subject: "Actualizar contrase\xF1a",
    message: "Tu contrase\xF1a fue cambiada el {{date}} desde {{ipAddress}}.",
    contactAdmin: "Si no fuiste t\xFA, contacta con un administrador."
  },
  "event-update_totp": {
    subject: "Actualizar OTP",
    message: "OTP fue actualizado para tu cuenta el {{date}} desde {{ipAddress}}.",
    contactAdmin: "Si no fuiste t\xFA, contacta con un administrador."
  },
  "event-user_disabled_by_permanent_lockout": {
    subject: "Usuario deshabilitado por bloqueo permanente",
    message: "Tu usuario ha sido deshabilitado permanentemente debido a m\xFAltiples intentos fallidos el {{date}}.",
    contactAdmin: "Por favor, contacta con un administrador."
  },
  "event-user_disabled_by_temporary_lockout": {
    subject: "Usuario deshabilitado por bloqueo temporal",
    message: "Tu usuario ha sido deshabilitado temporalmente debido a m\xFAltiples intentos fallidos el {{date}}.",
    contactAdmin: "Por favor, contacta con un administrador."
  },
  executeActions: {
    subject: "Actualiza tu cuenta",
    message: "Tu administrador acaba de solicitar que actualices tu cuenta de {{realmName}} realizando la(s) siguiente(s) acci\xF3n(es):",
    clickLink: "Haz clic en el enlace a continuaci\xF3n para iniciar este proceso.",
    linkExpiration: "Este enlace caducar\xE1 en {{expiration}}.",
    ignoreMessage: "Si no sab\xEDas que tu administrador solicit\xF3 esto, simplemente ignora este mensaje y no se cambiar\xE1 nada.",
    updateAccountButton: "Actualizar cuenta"
  },
  "identity-provider-link": {
    subject: "Vincular {0} con tu cuenta",
    message: "Alguien quiere vincular tu cuenta de {{identityProviderDisplayName}} con la cuenta de {{realmName}} del usuario {{username}}.",
    clickLink: "Si fuiste t\xFA, haz clic en el enlace a continuaci\xF3n para vincular las cuentas",
    linkExpiration: "Este enlace caducar\xE1 en {{expiration}}.",
    ignoreMessage: "Si no deseas continuar con esta modificaci\xF3n, simplemente ignora este mensaje.",
    linkAccountsButton: "Vincular cuentas",
    loginInfo: "Si vinculas las cuentas, podr\xE1s iniciar sesi\xF3n en {{identityProviderDisplayName}} a trav\xE9s de {{realmName}}."
  },
  "org-invite": {
    subject: "Invitaci\xF3n para unirte a la organizaci\xF3n {0}",
    greeting: "Hola, {{firstName}} {{lastName}}.",
    message: "Fuiste invitado a unirte a la organizaci\xF3n {{organizationName}}. Haz clic en el enlace a continuaci\xF3n para unirte.",
    linkExpiration: "Este enlace caducar\xE1 en {{expiration}}.",
    ignoreMessage: "Si no deseas unirte a la organizaci\xF3n, simplemente ignora este mensaje.",
    joinButton: "Unirse a la organizaci\xF3n"
  },
  "password-reset": {
    subject: "Restablecer contrase\xF1a",
    message: "Alguien acaba de solicitar cambiar las credenciales de tu cuenta de {{realmName}}. Si fuiste t\xFA, haz clic en el enlace a continuaci\xF3n para restablecerlas.",
    linkExpiration: "Este enlace caducar\xE1 en {{expiration}}.",
    ignoreMessage: "Si no deseas restablecer tus credenciales, simplemente ignora este mensaje y no se cambiar\xE1 nada.",
    resetButton: "Restablecer credenciales"
  },
  "verify-hospital-code": {
    verifyHospitalCodeSubject: "Verifica tu c\xF3digo de hospital",
    verifyHospitalCodeBody: "Hola {{0}},",
    verifyHospitalCodeMessage: "Por favor, usa el siguiente c\xF3digo para verificar tu afiliaci\xF3n hospitalaria:",
    verifyHospitalCodeInstructions: "Alternativamente, puedes hacer clic en el bot\xF3n de abajo para completar el proceso de verificaci\xF3n:",
    verifyHospitalCodeButton: "Verificar c\xF3digo de hospital"
  },
  footer: {
    allRightsReserved: "\xA9 {{currentYear}} {{realmName}}, Todos los derechos reservados",
    address: "Calle Isla de Bizerta 7, 1053, T\xFAnez, T\xFAnez"
  }
};

// emails/locales/fr/translation.json
var translation_default4 = {
  "email-test": {
    subject: "Test de courriel",
    greeting: "Bonjour",
    passwordUpdate: "Vous avez mis \xE0 jour le mot de passe de votre compte Twitch le {{date}}. Si c'\xE9tait vous, aucune autre action n'est requise.",
    passwordReset: "Cependant, si vous n'avez PAS effectu\xE9 ce changement de mot de passe, veuillez r\xE9initialiser imm\xE9diatement le mot de passe de votre compte.",
    passwordAdvice: "N'oubliez pas d'utiliser un mot de passe \xE0 la fois fort et unique pour votre compte Twitch. Pour en savoir plus sur la cr\xE9ation d'un mot de passe fort et unique,",
    loginButton: "Connexion \xE0 Inspark",
    contactSupport: "Vous avez encore des questions ? Veuillez contacter le support {{realmName}}",
    thanks: "Merci,",
    supportTeam: "\xC9quipe de support {{realmName}}"
  },
  "email-update-confirmation": {
    subject: "V\xE9rifier le nouveau courriel",
    linkExpiration: "Ce lien expirera dans {{expiration}}.",
    updateEmailAddress: "Pour mettre \xE0 jour votre compte {{realmName}} avec l'adresse courriel {{newEmail}}",
    clickLinkBelow: "cliquez sur le lien ci-dessous",
    updateEmail: "Mettre \xE0 jour le courriel",
    ignoreMessage: "Si vous ne souhaitez pas proc\xE9der \xE0 cette modification, ignorez simplement ce message."
  },
  "email-verification": {
    subject: "V\xE9rifier le courriel",
    message: "Quelqu'un a cr\xE9\xE9 un compte {{firstName}} avec cette adresse courriel. Si c'\xE9tait vous, cliquez sur le lien ci-dessous pour v\xE9rifier votre adresse courriel.",
    verifyButton: "V\xE9rifier le courriel",
    linkExpiration: "Ce lien expirera dans {{expiration}}.",
    ignoreMessage: "Si vous n'avez pas cr\xE9\xE9 ce compte, ignorez simplement ce message."
  },
  "event-login_error": {
    subject: "Erreur de connexion",
    message: "Une tentative de connexion \xE9chou\xE9e a \xE9t\xE9 d\xE9tect\xE9e sur votre compte le {{date}} depuis {{ipAddress}}.",
    contactAdmin: "Si ce n'\xE9tait pas vous, veuillez contacter un administrateur."
  },
  "event-remove_credential": {
    subject: "Supprimer les informations d'identification",
    message: "Les informations d'identification {{credentialType}} ont \xE9t\xE9 supprim\xE9es de votre compte le {{date}} depuis {{ipAddress}}.",
    contactAdmin: "Si ce n'\xE9tait pas vous, veuillez contacter un administrateur."
  },
  "event-remove_totp": {
    subject: "Supprimer OTP",
    message: "OTP a \xE9t\xE9 supprim\xE9 de votre compte le {{date}} depuis {{ipAddress}}.",
    contactAdmin: "Si ce n'\xE9tait pas vous, veuillez contacter un administrateur."
  },
  "event-update_credential": {
    subject: "Mettre \xE0 jour les informations d'identification",
    message: "Vos informations d'identification {{credentialType}} ont \xE9t\xE9 modifi\xE9es le {{date}} depuis {{ipAddress}}.",
    contactAdmin: "Si ce n'\xE9tait pas vous, veuillez contacter un administrateur."
  },
  "event-update_password": {
    subject: "Mettre \xE0 jour le mot de passe",
    message: "Votre mot de passe a \xE9t\xE9 modifi\xE9 le {{date}} depuis {{ipAddress}}.",
    contactAdmin: "Si ce n'\xE9tait pas vous, veuillez contacter un administrateur."
  },
  "event-update_totp": {
    subject: "Mettre \xE0 jour OTP",
    message: "OTP a \xE9t\xE9 mis \xE0 jour pour votre compte le {{date}} depuis {{ipAddress}}.",
    contactAdmin: "Si ce n'\xE9tait pas vous, veuillez contacter un administrateur."
  },
  "event-user_disabled_by_permanent_lockout": {
    subject: "Utilisateur d\xE9sactiv\xE9 par verrouillage permanent",
    message: "Votre utilisateur a \xE9t\xE9 d\xE9sactiv\xE9 de mani\xE8re permanente en raison de plusieurs tentatives \xE9chou\xE9es le {{date}}.",
    contactAdmin: "Veuillez contacter un administrateur."
  },
  "event-user_disabled_by_temporary_lockout": {
    subject: "Utilisateur d\xE9sactiv\xE9 par verrouillage temporaire",
    message: "Votre utilisateur a \xE9t\xE9 d\xE9sactiv\xE9 temporairement en raison de plusieurs tentatives \xE9chou\xE9es le {{date}}.",
    contactAdmin: "Veuillez contacter un administrateur."
  },
  executeActions: {
    subject: "Mettre \xE0 jour votre compte",
    message: "Votre administrateur a demand\xE9 que vous mettiez \xE0 jour votre compte {{realmName}} en effectuant les actions suivantes :",
    clickLink: "Cliquez sur le lien ci-dessous pour commencer ce processus.",
    linkExpiration: "Ce lien expirera dans {{expiration}}.",
    ignoreMessage: "Si vous n'\xEAtes pas au courant que votre administrateur a demand\xE9 cela, ignorez simplement ce message et rien ne changera.",
    updateAccountButton: "Mettre \xE0 jour le compte"
  },
  "identity-provider-link": {
    subject: "Lier {0} avec votre compte",
    message: "Quelqu'un veut lier votre compte {{identityProviderDisplayName}} avec le compte {{realmName}} de l'utilisateur {{username}}.",
    clickLink: "Si c'\xE9tait vous, cliquez sur le lien ci-dessous pour lier les comptes",
    linkExpiration: "Ce lien expirera dans {{expiration}}.",
    ignoreMessage: "Si vous ne souhaitez pas proc\xE9der \xE0 cette modification, ignorez simplement ce message.",
    linkAccountsButton: "Lier les comptes",
    loginInfo: "Si vous liez les comptes, vous pourrez vous connecter \xE0 {{identityProviderDisplayName}} via {{realmName}}."
  },
  "org-invite": {
    subject: "Invitation \xE0 rejoindre l'organisation {0}",
    greeting: "Bonjour, {{firstName}} {{lastName}}.",
    message: "Vous avez \xE9t\xE9 invit\xE9 \xE0 rejoindre l'organisation {{organizationName}}. Cliquez sur le lien ci-dessous pour rejoindre.",
    linkExpiration: "Ce lien expirera dans {{expiration}}.",
    ignoreMessage: "Si vous ne souhaitez pas rejoindre l'organisation, ignorez simplement ce message.",
    joinButton: "Rejoindre l'organisation"
  },
  "password-reset": {
    subject: "R\xE9initialiser le mot de passe",
    message: "Quelqu'un a demand\xE9 \xE0 changer les informations d'identification de votre compte {{realmName}}. Si c'\xE9tait vous, cliquez sur le lien ci-dessous pour les r\xE9initialiser.",
    linkExpiration: "Ce lien expirera dans {{expiration}}.",
    ignoreMessage: "Si vous ne souhaitez pas r\xE9initialiser vos informations d'identification, ignorez simplement ce message et rien ne changera.",
    resetButton: "R\xE9initialiser le mot de passe"
  },
  "verify-hospital-code": {
    verifyHospitalCodeSubject: "V\xE9rifiez votre code d'h\xF4pital",
    verifyHospitalCodeBody: "Bonjour {{0}},",
    verifyHospitalCodeMessage: "Veuillez utiliser le code suivant pour v\xE9rifier votre affiliation hospitali\xE8re :",
    verifyHospitalCodeInstructions: "Vous pouvez \xE9galement cliquer sur le bouton ci-dessous pour terminer le processus de v\xE9rification :",
    verifyHospitalCodeButton: "V\xE9rifier le code de l'h\xF4pital"
  },
  footer: {
    allRightsReserved: "\xA9 {{currentYear}} {{realmName}}, Tous droits r\xE9serv\xE9s",
    address: "7 rue de l'\xEEle de Bizerte, 1053, Tunis, Tunisie"
  }
};

// emails/locales/it/translation.json
var translation_default5 = {
  "email-test": {
    subject: "Test email",
    greeting: "Ciao",
    passwordUpdate: "Hai aggiornato la password del tuo account Twitch il {{date}}. Se sei stato tu, non \xE8 necessaria alcuna azione ulteriore.",
    passwordReset: "Tuttavia, se NON hai effettuato questa modifica della password, reimposta immediatamente la password del tuo account.",
    passwordAdvice: "Ricorda di utilizzare una password sicura e univoca per il tuo account Twitch. Per saperne di pi\xF9 su come creare una password sicura e univoca,",
    loginButton: "Accedi a Inspark",
    contactSupport: "Hai ancora domande? Contatta il supporto di {{realmName}}",
    thanks: "Grazie,",
    supportTeam: "Team di supporto {{realmName}}"
  },
  "email-update-confirmation": {
    subject: "Verifica nuova email",
    linkExpiration: " Questo link scadr\xE0 entro {{expiration}}.",
    updateEmailAddress: "Per aggiornare il tuo account {{realmName}} con l'indirizzo email {{newEmail}}",
    clickLinkBelow: "clicca sul link qui sotto",
    updateEmail: "Aggiorna email",
    ignoreMessage: "Se non desideri procedere con questa modifica, ignora semplicemente questo messaggio."
  },
  "email-verification": {
    subject: "Verifica email",
    message: "Qualcuno ha creato un account {{firstName}} con questo indirizzo email. Se sei stato tu, clicca sul link qui sotto per verificare il tuo indirizzo email.",
    verifyButton: "Verifica email",
    linkExpiration: "Questo link scadr\xE0 entro {{expiration}}.",
    ignoreMessage: "Se non hai creato questo account, ignora semplicemente questo messaggio."
  },
  "event-login_error": {
    subject: "Errore di accesso",
    message: "\xC8 stato rilevato un tentativo di accesso fallito al tuo account il {{date}} da {{ipAddress}}.",
    contactAdmin: "Se non sei stato tu, contatta un amministratore."
  },
  "event-remove_credential": {
    subject: "Rimuovi credenziale",
    message: "La credenziale {{credentialType}} \xE8 stata rimossa dal tuo account il {{date}} da {{ipAddress}}.",
    contactAdmin: "Se non sei stato tu, contatta un amministratore."
  },
  "event-remove_totp": {
    subject: "Rimuovi OTP",
    message: "OTP \xE8 stato rimosso dal tuo account il {{date}} da {{ipAddress}}.",
    contactAdmin: "Se non sei stato tu, contatta un amministratore."
  },
  "event-update_credential": {
    subject: "Aggiorna credenziale",
    message: "La tua credenziale {{credentialType}} \xE8 stata modificata il {{date}} da {{ipAddress}}.",
    contactAdmin: "Se non sei stato tu, contatta un amministratore."
  },
  "event-update_password": {
    subject: "Aggiorna password",
    message: "La tua password \xE8 stata modificata il {{date}} da {{ipAddress}}.",
    contactAdmin: "Se non sei stato tu, contatta un amministratore."
  },
  "event-update_totp": {
    subject: "Aggiorna OTP",
    message: "OTP \xE8 stato aggiornato per il tuo account il {{date}} da {{ipAddress}}.",
    contactAdmin: "Se non sei stato tu, contatta un amministratore."
  },
  "event-user_disabled_by_permanent_lockout": {
    subject: "Utente disabilitato da blocco permanente",
    message: "Il tuo utente \xE8 stato disabilitato permanentemente a causa di molteplici tentativi falliti il {{date}}.",
    contactAdmin: "Contatta un amministratore."
  },
  "event-user_disabled_by_temporary_lockout": {
    subject: "Utente disabilitato da blocco temporaneo",
    message: "Il tuo utente \xE8 stato disabilitato temporaneamente a causa di molteplici tentativi falliti il {{date}}.",
    contactAdmin: "Contatta un amministratore."
  },
  executeActions: {
    subject: "Aggiorna il tuo account",
    message: "Il tuo amministratore ha appena richiesto di aggiornare il tuo account {{realmName}} eseguendo le seguenti azioni:",
    clickLink: "Clicca sul link qui sotto per avviare questo processo.",
    linkExpiration: "Questo link scadr\xE0 entro {{expiration}}.",
    ignoreMessage: "Se non sei a conoscenza che il tuo amministratore ha richiesto ci\xF2, ignora semplicemente questo messaggio e nulla verr\xE0 modificato.",
    updateAccountButton: "Aggiorna account"
  },
  "identity-provider-link": {
    subject: "Collega {0} con il tuo account",
    message: "Qualcuno vuole collegare il tuo account {{identityProviderDisplayName}} con l'account {{realmName}} dell'utente {{username}}.",
    clickLink: "Se sei stato tu, clicca sul link qui sotto per collegare gli account",
    linkExpiration: "Questo link scadr\xE0 entro {{expiration}}.",
    ignoreMessage: "Se non desideri procedere con questa modifica, ignora semplicemente questo messaggio.",
    linkAccountsButton: "Collega account",
    loginInfo: "Se colleghi gli account, potrai accedere a {{identityProviderDisplayName}} tramite {{realmName}}."
  },
  "org-invite": {
    subject: "Invito a unirsi all'organizzazione {0}",
    greeting: "Ciao, {{firstName}} {{lastName}}.",
    message: "Sei stato invitato a unirti all'organizzazione {{organizationName}}. Clicca sul link qui sotto per unirti.",
    linkExpiration: "Questo link scadr\xE0 entro {{expiration}}.",
    ignoreMessage: "Se non desideri unirti all'organizzazione, ignora semplicemente questo messaggio.",
    joinButton: "Unisciti all'organizzazione"
  },
  "password-reset": {
    subject: "Reimposta password",
    message: "Qualcuno ha appena richiesto di modificare le credenziali del tuo account {{realmName}}. Se sei stato tu, clicca sul link qui sotto per reimpostarle.",
    linkExpiration: "Questo link scadr\xE0 entro {{expiration}}.",
    ignoreMessage: "Se non desideri reimpostare le tue credenziali, ignora semplicemente questo messaggio e nulla verr\xE0 modificato.",
    resetButton: "Reimposta credenziali"
  },
  "verify-hospital-code": {
    verifyHospitalCodeSubject: "Verifica il tuo codice ospedaliero",
    verifyHospitalCodeBody: "Ciao {{0}},",
    verifyHospitalCodeMessage: "Si prega di utilizzare il seguente codice per verificare l'affiliazione ospedaliera:",
    verifyHospitalCodeInstructions: "In alternativa, puoi fare clic sul pulsante qui sotto per completare il processo di verifica:",
    verifyHospitalCodeButton: "Verifica codice ospedaliero"
  },
  footer: {
    allRightsReserved: "\xA9 {{currentYear}} {{realmName}}, Tutti i diritti riservati",
    address: "Via Isola di Biserta 7, 1053, Tunisi, Tunisia"
  }
};

// emails/i18n.ts
var resources = {
  en: {
    translation: translation_default2
  },
  fr: {
    translation: translation_default4
  },
  de: {
    translation: translation_default
  },
  es: {
    translation: translation_default3
  },
  it: {
    translation: translation_default5
  }
};
i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
  // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
  // if you're using a language detector, do not define the lng option
  interpolation: {
    escapeValue: false
    // react already safes from xss
  }
});
var i18n_default = i18n;
var getMessages = (props) => {
  if (props.locale === "de") {
    return {
      "requiredAction.CONFIGURE_TOTP": "OTP konfigurieren",
      "requiredAction.TERMS_AND_CONDITIONS": "Allgemeine Gesch\xE4ftsbedingungen",
      "requiredAction.UPDATE_PASSWORD": "Passwort aktualisieren",
      "requiredAction.UPDATE_PROFILE": "Profil aktualisieren",
      "requiredAction.VERIFY_EMAIL": "E-Mail-Adresse best\xE4tigen",
      "requiredAction.CONFIGURE_RECOVERY_AUTHN_CODES": "Wiederherstellungscodes generieren",
      "linkExpirationFormatter.timePeriodUnit.seconds": "{0,choice,0#Sekunden|1#Sekunde|1<Sekunden}",
      "linkExpirationFormatter.timePeriodUnit.minutes": "{0,choice,0#Minuten|1#Minute|1<Minuten}",
      "linkExpirationFormatter.timePeriodUnit.hours": "{0,choice,0#Stunden|1#Stunde|1<Stunden}",
      "linkExpirationFormatter.timePeriodUnit.days": "{0,choice,0#Tage|1#Tag|1<Tage}"
    };
  } else if (props.locale === "fr") {
    return {
      "requiredAction.CONFIGURE_TOTP": "Configurer OTP",
      "requiredAction.TERMS_AND_CONDITIONS": "Termes et conditions",
      "requiredAction.UPDATE_PASSWORD": "Mettre \xE0 jour le mot de passe",
      "requiredAction.UPDATE_PROFILE": "Mettre \xE0 jour le profil",
      "requiredAction.VERIFY_EMAIL": "V\xE9rifier l'email",
      "requiredAction.CONFIGURE_RECOVERY_AUTHN_CODES": "G\xE9n\xE9rer des codes de r\xE9cup\xE9ration",
      "linkExpirationFormatter.timePeriodUnit.seconds": "{0,choice,0#secondes|1#seconde|1<secondes}",
      "linkExpirationFormatter.timePeriodUnit.minutes": "{0,choice,0#minutes|1#minute|1<minutes}",
      "linkExpirationFormatter.timePeriodUnit.hours": "{0,choice,0#heures|1#heure|1<heures}",
      "linkExpirationFormatter.timePeriodUnit.days": "{0,choice,0#jours|1#jour|1<jours}"
    };
  } else if (props.locale === "es") {
    return {
      "requiredAction.CONFIGURE_TOTP": "Configurar OTP",
      "requiredAction.TERMS_AND_CONDITIONS": "T\xE9rminos y condiciones",
      "requiredAction.UPDATE_PASSWORD": "Actualizar contrase\xF1a",
      "requiredAction.UPDATE_PROFILE": "Actualizar perfil",
      "requiredAction.VERIFY_EMAIL": "Verificar correo electr\xF3nico",
      "requiredAction.CONFIGURE_RECOVERY_AUTHN_CODES": "Generar c\xF3digos de recuperaci\xF3n",
      "linkExpirationFormatter.timePeriodUnit.seconds": "{0,choice,0#segundos|1#segundo|1<segundos}",
      "linkExpirationFormatter.timePeriodUnit.minutes": "{0,choice,0#minutos|1#minuto|1<minutos}",
      "linkExpirationFormatter.timePeriodUnit.hours": "{0,choice,0#horas|1#hora|1<horas}",
      "linkExpirationFormatter.timePeriodUnit.days": "{0,choice,0#d\xEDas|1#d\xEDa|1<d\xEDas}"
    };
  } else if (props.locale === "it") {
    return {
      "requiredAction.CONFIGURE_TOTP": "Configura OTP",
      "requiredAction.TERMS_AND_CONDITIONS": "Termini e condizioni",
      "requiredAction.UPDATE_PASSWORD": "Aggiorna password",
      "requiredAction.UPDATE_PROFILE": "Aggiorna profilo",
      "requiredAction.VERIFY_EMAIL": "Verifica email",
      "requiredAction.CONFIGURE_RECOVERY_AUTHN_CODES": "Genera codici di recupero",
      "linkExpirationFormatter.timePeriodUnit.seconds": "{0,choice,0#secondi|1#secondo|1<secondi}",
      "linkExpirationFormatter.timePeriodUnit.minutes": "{0,choice,0#minuti|1#minuto|1<minuti}",
      "linkExpirationFormatter.timePeriodUnit.hours": "{0,choice,0#ore|1#ora|1<ore}",
      "linkExpirationFormatter.timePeriodUnit.days": "{0,choice,0#giorni|1#giorno|1<giorni}"
    };
  } else {
    return {
      "requiredAction.CONFIGURE_TOTP": "Configure OTP",
      "requiredAction.TERMS_AND_CONDITIONS": "Terms and Conditions",
      "requiredAction.UPDATE_PASSWORD": "Update Password",
      "requiredAction.UPDATE_PROFILE": "Update Profile",
      "requiredAction.VERIFY_EMAIL": "Verify Email",
      "requiredAction.CONFIGURE_RECOVERY_AUTHN_CODES": "Generate Recovery Codes",
      "linkExpirationFormatter.timePeriodUnit.seconds": "{0,choice,0#seconds|1#second|1<seconds}",
      "linkExpirationFormatter.timePeriodUnit.minutes": "{0,choice,0#minutes|1#minute|1<minutes}",
      "linkExpirationFormatter.timePeriodUnit.hours": "{0,choice,0#hours|1#hour|1<hours}",
      "linkExpirationFormatter.timePeriodUnit.days": "{0,choice,0#days|1#day|1<days}"
    };
  }
};
export {
  i18n_default as default,
  getMessages
};
//# sourceMappingURL=i18n.js.map
