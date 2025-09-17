import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github,
  CheckCircle
} from 'lucide-react';
import { personalInfo } from '../data/resume';
import { EMAILJS_CONFIG } from '../config/emailjs';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setShowSuccess(false);
    
    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      alert('Veuillez remplir tous les champs obligatoires.');
      setIsLoading(false);
      return;
    }
    
    // EmailJS configuration from config file
    const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = EMAILJS_CONFIG;
    
    // Validate EmailJS configuration
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY || 
        SERVICE_ID.includes('your_') || TEMPLATE_ID.includes('your_') || PUBLIC_KEY.includes('your_')) {
      console.error('EmailJS configuration is incomplete');
      alert('Configuration EmailJS incomplète. Veuillez configurer les identifiants EmailJS.');
      setIsLoading(false);
      return;
    }
    
    const templateParams = {
      name: formData.name, // Maps to {{name}} in template
      from_email: formData.email, // Maps to {{from_email}} in template
      reply_to: formData.email, // Sets reply-to address
      subject: formData.subject || 'Contact from Portfolio',
      message: formData.message, // Maps to {{message}} in template
      time: new Date().toLocaleString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }), // Maps to {{time}} in template
      to_email: 'chalkhaachraf21@gmail.com'
    };
    
    try {
      console.log('Sending email with params:', templateParams);
      const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      console.log('Email sent successfully:', result);
      
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
      
      // More specific error handling
      if (error instanceof Error) {
        if (error.message.includes('Invalid template ID')) {
          alert('Template ID invalide. Veuillez vérifier la configuration EmailJS.');
        } else if (error.message.includes('Invalid service ID')) {
          alert('Service ID invalide. Veuillez vérifier la configuration EmailJS.');
        } else if (error.message.includes('Invalid public key')) {
          alert('Clé publique invalide. Veuillez vérifier la configuration EmailJS.');
        } else {
          alert(`Erreur lors de l'envoi: ${error.message}`);
        }
      } else {
        alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-primary-500" />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`
    },
    {
      icon: <Phone className="w-5 h-5 text-primary-500" />,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`
    },
    {
      icon: <MapPin className="w-5 h-5 text-primary-500" />,
      label: 'Location',
      value: personalInfo.location
    },
    {
      icon: <Linkedin className="w-5 h-5 text-primary-500" />,
      label: 'LinkedIn',
      value: 'Achraf Chalkha',
      href: 'https://www.linkedin.com/in/achraf-chalkha-878484290/'
    },
    {
      icon: <Github className="w-5 h-5 text-primary-500" />,
      label: 'GitHub',
      value: 'achrafchalkha',
      href: 'https://github.com/achrafchalkha'
    }
  ];

  return (
    <section id="contact" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Feel free to reach out for opportunities or just to say hello
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Contact Information
            </h3>
            
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="mt-1 p-2 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                    {info.icon}
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                    {info.href ? (
                      <a 
                        href={info.href} 
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="font-medium text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-medium text-gray-900 dark:text-white">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Availability
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Currently open to:
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                Internship opportunities
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                Part-time software development roles
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                Collaboration on interesting projects
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="card bg-white dark:bg-gray-900 p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Send a Message
              </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 sm:col-span-1">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-600"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-600"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-600"
                      placeholder="How can I help you?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-600 resize-none"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  
                  {/* Success Message */}
                  {showSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-3" />
                      <span className="text-green-800 dark:text-green-300 font-medium">
                         Message envoyé avec succès! Je vous répondrai bientôt.
                       </span>
                    </motion.div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-primary w-full py-3 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="flex items-center">
                      {isLoading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </span>
                  </button>
                </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;