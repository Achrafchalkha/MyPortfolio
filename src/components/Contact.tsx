import React, { useState } from 'react';
import { motion } from 'framer-motion';
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

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'initial' | 'loading' | 'success' | 'error'>('initial');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    
    // This is a mock submission - in a real app, you would send data to a server
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset after 3 seconds
      setTimeout(() => {
        setFormStatus('initial');
      }, 3000);
    }, 1500);
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
              
                {formStatus === 'success' ? (
                <div className="flex flex-col items-center justify-center py-8">
                  <svg className="w-16 h-16 text-red-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.054 0 1.918-.816 1.995-1.85L21 18V6c0-1.054-.816-1.918-1.85-1.995L19 4H5c-1.054 0-1.918.816-1.995 1.85L3 6v12c0 1.054.816 1.918 1.85 1.995L5 20z" />
                  </svg>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Message Not Sent!
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
                  Something went wrong. Please contact me directly at:
                  </p>
                  <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
                  >
                  {personalInfo.email}
                  </a>
                </div>
              ) : (
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
                  
                  <button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className="btn-primary w-full py-3 flex items-center justify-center"
                  >
                    {formStatus === 'loading' ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;