import React from 'react';
import { Code, Cpu, BookOpen, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/resume';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6 text-primary-500" />,
      title: "Software Development",
      description: "Experience in web, desktop, and console application development with modern technologies."
    },
    {
      icon: <Cpu className="w-6 h-6 text-primary-500" />,
      title: "Engineering Student",
      description: "Fourth-year student with a strong foundation in computer science and engineering principles."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-primary-500" />,
      title: "Continuous Learner",
      description: "Passion for learning new technologies and methodologies to stay current in the field."
    },
    {
      icon: <UserCheck className="w-6 h-6 text-primary-500" />,
      title: "Team Leader",
      description: "Experience leading and organizing events as Chess Club Team Leader at ENSAH."
    }
  ];

  return (
    <section id="about" className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Get to know more about my background, skills, and what drives me as a developer
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Computer Engineering Student & Java Developer
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm a fourth-year Software Engineering student at the National School of Applied Sciences in Al Hoceima, 
              Morocco. My journey into software development began with a curiosity about how applications work
              and has evolved into a passion for creating efficient, user-friendly solutions.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              With experience across various development domains, I've built web applications, 
              desktop software, and console applications. I'm particularly passionate about Java programming 
              and modern web development technologies like React.js. I'm always seeking new challenges and 
              opportunities to expand my knowledge and skills.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <span className="font-semibold mr-1 text-gray-900 dark:text-white">Location:</span>
                <span className="text-gray-700 dark:text-gray-300">{personalInfo.location}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold mr-1 text-gray-900 dark:text-white">Email:</span>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center">
                <span className="font-semibold mr-1 text-gray-900 dark:text-white">Phone:</span>
                <a 
                  href={`tel:${personalInfo.phone}`}
                  className="text-gray-700 dark:text-gray-300"
                >
                  {personalInfo.phone}
                </a>
              </div>
              <div className="flex items-center">
                <span className="font-semibold mr-1 text-gray-900 dark:text-white">LinkedIn:</span>
                <a 
                 href="https://www.linkedin.com/in/achraf-chalkha-878484290/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  Profile
                </a>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="card p-6 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{item.title}</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;