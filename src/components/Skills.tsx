import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/resume';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills & Technologies
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          The technologies, languages, and tools I work with
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              className="card p-6 bg-white dark:bg-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="inline-block px-3 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-800 dark:text-primary-300 text-sm"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.05 * skillIndex }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Skill Proficiency
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Technical proficiency across different domains of software development
          </p>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <div className="flex justify-between mb-1 text-sm font-medium">
                <span>Backend Development</span>
                <span>90%</span>
              </div>
              <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <motion.div 
                  className="bg-primary-600 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '90%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                ></motion.div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1 text-sm font-medium">
                <span>Frontend Development</span>
                <span>85%</span>
              </div>
              <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <motion.div 
                  className="bg-primary-600 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '85%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                ></motion.div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1 text-sm font-medium">
                <span>DevOps & Tools</span>
                <span>75%</span>
              </div>
              <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <motion.div 
                  className="bg-primary-600 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '75%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                ></motion.div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1 text-sm font-medium">
                <span>Database Management</span>
                <span>85%</span>
              </div>
              <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <motion.div 
                  className="bg-primary-600 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '85%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                ></motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;