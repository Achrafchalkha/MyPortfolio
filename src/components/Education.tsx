import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { educationData } from '../data/resume';

const Education: React.FC = () => {
  return (
    <section id="education" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          My academic journey and qualifications
        </motion.p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200 dark:bg-primary-900 rounded-full hidden md:block"></div>

          {educationData.map((education, index) => (
            <motion.div 
              key={index}
              className={`flex flex-col md:flex-row md:items-center mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="flex-1 md:px-8">
                <div className="card p-6 bg-white dark:bg-gray-900 hover:shadow-lg transition-shadow">
                  <div className="mb-4 text-sm font-semibold inline-block py-1.5 px-3 rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-800 dark:text-primary-300">
                    {education.period}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{education.institution}</h3>
                  <h4 className="text-gray-700 dark:text-gray-300 mb-2">{education.degree}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{education.location}</p>
                </div>
              </div>

              <div className="hidden md:flex items-center justify-center relative w-12 h-12 mt-6 md:mt-0">
                <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center shadow-lg z-10">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
              </div>

              <div className="flex-1 md:px-8">
                {/* This div is just for layout */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;