# Guide de Configuration EmailJS

## Problème identifié ✅
**Erreur EmailJS**: "The Public Key is invalid. To find this ID, visit https://dashboard.emailjs.com/admin/account"

**Cause**: La PUBLIC_KEY `test_public_key` est une valeur de test invalide.

## Configuration actuelle
- ✅ SERVICE_ID: `service_1l0tcds` (correct)
- ❌ TEMPLATE_ID: `template_test` (valeur de test)
- ❌ PUBLIC_KEY: `test_public_key` (INVALIDE - cause de l'erreur)
- ✅ Email de destination: `chalkhaachraf21@gmail.com` (correct)
- ✅ Paramètres d'envoi: Fonctionnent correctement

## Étapes pour résoudre le problème

### 1. Aller sur EmailJS
- Visitez https://www.emailjs.com/
- Connectez-vous à votre compte (ou créez-en un)

### 2. Vérifier votre service
- Allez dans "Email Services"
- Vérifiez que le service `service_1l0tcds` existe
- Si ce n'est pas le cas, créez un nouveau service Gmail/Outlook

### 3. Créer/Vérifier le template
- Allez dans "Email Templates"
- Créez un nouveau template avec ces variables :
  ```
  Subject: Nouveau message de {{from_name}} - {{subject}}
  
  Contenu:
  Vous avez reçu un nouveau message depuis votre portfolio.
  
  De: {{from_name}} ({{from_email}})
  Sujet: {{subject}}
  
  Message:
  {{message}}
  
  ---
  Envoyé vers: {{to_email}}
  ```
- Notez l'ID du template (ex: `template_abc123`)

## Template EmailJS recommandé :

### Version simple :
```html
Bonjour,

Vous avez reçu un nouveau message de {{name}} ({{from_email}}) le {{time}}.

Sujet : {{subject}}

Message :
{{message}}

Cordialement,
Votre site web
```

### Version stylisée (recommandée) :
```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px"> 
   <div>A message by {{name}} has been received. Kindly respond at your earliest convenience.</div> 
   <div 
     style=" 
       margin-top: 20px; 
       padding: 15px 0; 
       border-width: 1px 0; 
       border-style: dashed; 
       border-color: lightgrey; 
     " 
   > 
     <table role="presentation"> 
       <tr> 
         <td style="vertical-align: top"> 
           <div 
             style=" 
               padding: 6px 10px; 
               margin: 0 10px; 
               background-color: aliceblue; 
               border-radius: 5px; 
               font-size: 26px; 
             " 
             role="img" 
           > 
             👤 
           </div> 
         </td> 
         <td style="vertical-align: top"> 
           <div style="color: #2c3e50; font-size: 16px"> 
             <strong>{{name}}</strong> ({{from_email}})
           </div> 
           <div style="color: #7f8c8d; font-size: 13px">{{time}}</div>
           <div style="color: #34495e; font-size: 14px; margin: 8px 0"><strong>Sujet:</strong> {{subject}}</div>
           <p style="font-size: 16px; color: #2c3e50">{{message}}</p> 
         </td> 
       </tr> 
     </table> 
   </div> 
 </div>
```

**Variables utilisées dans le template :**
- `{{name}}` - Nom de l'expéditeur
- `{{from_email}}` - Email de l'expéditeur
- `{{subject}}` - Sujet du message
- `{{message}}` - Contenu du message
- `{{time}}` - Heure d'envoi

## Configuration Reply-To dans EmailJS :

**Important :** EmailJS envoie toujours depuis votre propre email (chalkhaachraf21@gmail.com). C'est normal !

Pour pouvoir répondre directement à l'expéditeur :
1. Dans votre template EmailJS, ajoutez dans les **Settings** :
   - **Reply-To** : `{{reply_to}}`
2. Cela permettra de répondre directement à l'email de l'expéditeur

**Résultat :** Quand vous cliquez "Répondre", l'email sera adressé à l'expéditeur original, pas à vous-même.

### 4. Obtenir la clé publique
- Allez dans "Account" > "General"
- Copiez votre "Public Key" (ex: `user_abc123xyz`)

### 5. Mettre à jour la configuration
Remplacez dans `src/config/emailjs.ts` :
```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_1l0tcds', // ✅ Déjà correct
  TEMPLATE_ID: 'VOTRE_TEMPLATE_ID_REEL', // ❌ À remplacer
  PUBLIC_KEY: 'VOTRE_CLE_PUBLIQUE_REELLE' // ❌ À remplacer
};
```

### 6. Tester
- Sauvegardez les fichiers
- Testez le formulaire de contact
- Vérifiez la réception de l'email sur `chalkhaachraf21@gmail.com`

## Notes importantes
- Le SERVICE_ID `service_1l0tcds` est déjà configuré correctement
- L'email de destination `chalkhaachraf21@gmail.com` est déjà configuré
- Seuls TEMPLATE_ID et PUBLIC_KEY doivent être mis à jour avec les vraies valeurs

## En cas de problème
- Vérifiez que le service EmailJS est bien connecté à Gmail
- Assurez-vous que le template contient toutes les variables nécessaires
- Consultez la console du navigateur pour les erreurs détaillées