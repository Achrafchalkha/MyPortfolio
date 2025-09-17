import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experienceData } from '../data/resume';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and internship experiences
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experienceData.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 overflow-hidden">
                  {/* Header with gradient background */}
                  <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-6 text-white">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="mb-4 lg:mb-0">
                        <h3 className="text-2xl font-bold mb-2">
                          {experience.position}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                          <p className="text-lg font-semibold text-primary-100">
                            {experience.company}
                          </p>
                          <span className="hidden sm:block text-primary-200">•</span>
                          <p className="text-primary-200">
                            {experience.location}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                          <span className="text-white font-medium">
                            {experience.period}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                      Key Responsibilities & Achievements
                    </h4>
                    <div className="grid gap-3">
                      {experience.responsibilities.map((responsibility, idx) => (
                        <div key={idx} className="flex items-start group/item">
                          <div className="flex-shrink-0 w-6 h-6 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mr-4 mt-0.5 group-hover/item:bg-primary-200 dark:group-hover/item:bg-primary-800/50 transition-colors duration-200">
                            <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed flex-1 group-hover/item:text-gray-900 dark:group-hover/item:text-gray-100 transition-colors duration-200">
                            {responsibility}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;