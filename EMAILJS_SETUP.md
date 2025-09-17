# Configuration EmailJS pour le Formulaire de Contact

Ce guide vous explique comment configurer EmailJS pour permettre l'envoi direct d'emails depuis votre portfolio.

## Étapes de Configuration

### 1. Créer un compte EmailJS
- Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
- Créez un compte gratuit (200 emails/mois inclus)

### 2. Configurer un Service Email
- Dans le dashboard EmailJS, allez dans "Email Services"
- Cliquez sur "Add New Service"
- Choisissez votre fournisseur email (Gmail recommandé)
- Suivez les instructions pour connecter votre compte email
- Notez votre **Service ID**

### 3. Créer un Template Email
- Allez dans "Email Templates"
- Cliquez sur "Create New Template"
- Configurez le template avec ces variables :

**Sujet du template :**
```
Nouveau message de {{from_name}} - {{subject}}
```

**Corps du template :**
```
Vous avez reçu un nouveau message depuis votre portfolio.

De : {{from_name}} ({{from_email}})
Sujet : {{subject}}

Message :
{{message}}

---
Ce message a été envoyé depuis votre site portfolio.
```

- Sauvegardez et notez votre **Template ID**

### 4. Obtenir la Clé Publique
- Allez dans "Account" > "General"
- Copiez votre **Public Key**

### 5. Mettre à Jour la Configuration
- Ouvrez le fichier `src/config/emailjs.ts`
- Remplacez les valeurs par vos vraies credentials :

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_xxxxxxx', // Votre Service ID
  TEMPLATE_ID: 'template_xxxxxxx', // Votre Template ID
  PUBLIC_KEY: 'xxxxxxxxxxxxxxx' // Votre Public Key
};
```

### 6. Tester le Formulaire
- Redémarrez votre serveur de développement
- Testez le formulaire de contact
- Vérifiez que vous recevez bien l'email

## Fonctionnalités Implémentées

✅ Envoi direct d'emails sans client email local
✅ Notification de succès après envoi
✅ Indicateur de chargement pendant l'envoi
✅ Gestion d'erreurs
✅ Réinitialisation automatique du formulaire
✅ Animation fluide des notifications

## Dépannage

**Erreur 403 :** Vérifiez que votre Public Key est correcte
**Erreur 400 :** Vérifiez que vos Service ID et Template ID sont corrects
**Pas d'email reçu :** Vérifiez vos spams et la configuration de votre service email

## Limites du Plan Gratuit
- 200 emails par mois
- 2 services email maximum
- Support communautaire

Pour plus d'emails, vous pouvez upgrader vers un plan payant sur EmailJS.