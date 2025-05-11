import React from 'react';
import { motion } from 'framer-motion';
import { Award, Check as Chess } from 'lucide-react';
import { certificationsData, extracurricularData } from '../data/resume';

const Certifications: React.FC = () => {
  return (
    <section className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Certifications & Activities
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Professional certifications and extracurricular involvements
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <motion.h3 
              className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Award className="w-6 h-6 mr-2 text-primary-500" />
              Certifications
            </motion.h3>
            
            <div className="space-y-6">
              {certificationsData.map((cert, index) => (
                <motion.div 
                  key={index}
                  className="card p-5 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{cert.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">Issuer: {cert.issuer}</p>
                  {cert.date && (
                    <p className="text-gray-500 dark:text-gray-500 text-xs">{cert.date}</p>
                  )}
                  {cert.url && (
                    <a 
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-primary-600 dark:text-primary-400 text-sm hover:underline"
                    >
                      {cert.url ? "View Certificate" : "No Certificate Available"}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <motion.h3 
              className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Chess className="w-6 h-6 mr-2 text-primary-500" />
              Extracurricular Activities
            </motion.h3>
            
            {extracurricularData.map((activity, index) => (
              <motion.div 
                key={index}
                className="card p-6 mb-6 last:mb-0 bg-gradient-to-br from-primary-50 to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-100 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">{activity.title}</h4>
                <p className="text-gray-700 dark:text-gray-300">{activity.description}</p>
              </motion.div>
            ))}
            
            <motion.div
              className="card p-6 mt-8 bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900/20 dark:to-gray-900 border border-secondary-200 dark:border-secondary-800/30"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Personal Interests</h4>
              <div className="flex flex-wrap gap-3 mt-2">
                <span className="bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full text-sm text-gray-700 dark:text-gray-300 shadow-sm">
                  Chess
                </span>
                <span className="bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full text-sm text-gray-700 dark:text-gray-300 shadow-sm">
                  Problem Solving
                </span>
                <span className="bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full text-sm text-gray-700 dark:text-gray-300 shadow-sm">
                  Software Architecture
                </span>
                <span className="bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full text-sm text-gray-700 dark:text-gray-300 shadow-sm">
                  New Technologies
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;