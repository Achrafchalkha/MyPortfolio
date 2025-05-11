import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projectsData } from '../data/resume';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Highlighting some of my recent development work
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="card overflow-hidden group hover:ring-2 hover:ring-primary-200 dark:hover:ring-primary-800 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              onMouseEnter={() => setSelectedProject(index)}
              onMouseLeave={() => setSelectedProject(null)}
            >
              <div className="relative h-48 overflow-hidden">
                {project.imageUrl && (
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl text-white font-bold mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="inline-block px-2 py-1 text-xs rounded-md bg-white/20 backdrop-blur-sm text-white"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="inline-block px-2 py-1 text-xs rounded-md bg-white/20 backdrop-blur-sm text-white">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium"
                      >
                        <Github size={16} className="mr-1" />
                        Code
                      </a>
                    )}
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        Live Demo
                      </a>
                    )}
                  </div>
                  
                  <div className="flex items-center">
                   
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;