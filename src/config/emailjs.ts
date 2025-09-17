// EmailJS Configuration
// Follow these steps to set up EmailJS:

// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create a new service (Gmail, Outlook, etc.)
// 3. Create an email template with these variables:
//    - {{from_name}} - sender's name
//    - {{from_email}} - sender's email
//    - {{subject}} - email subject
//    - {{message}} - email message
//    - {{to_email}} - recipient email (chalkhaachraf21@gmail.com)
// 4. Get your Service ID, Template ID, and Public Key from EmailJS dashboard
// 5. Replace the values below with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_your_service_id', // Replace with your EmailJS Service ID
  TEMPLATE_ID: 'template_your_template_id', // Replace with your EmailJS Template ID
  PUBLIC_KEY: 'your_public_key' // Replace with your EmailJS Public Key
};

// Example template content for EmailJS:
// Subject: New message from {{from_name}} - {{subject}}
// Body:
// You have received a new message from your portfolio contact form.
//
// From: {{from_name}} ({{from_email}})
// Subject: {{subject}}
//
// Message:
// {{message}}
//
// ---
// This message was sent from your portfolio website.