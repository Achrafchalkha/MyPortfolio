import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/resume';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const titles = ['Computer Engineering Student', 'Software Developer', 'Java Specialist', 'Web Developer'];
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const typeText = () => {
      const currentTitle = titles[titleIndex];
      
      if (isDeleting) {
        setTypedText(currentTitle.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
        setTypingSpeed(50);
      } else {
        setTypedText(currentTitle.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
        setTypingSpeed(100);
      }
      
      if (!isDeleting && charIndex === currentTitle.length) {
        setIsDeleting(true);
        setTypingSpeed(1000); // Pause at the end
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
        setTypingSpeed(300); // Pause before typing next title
      }
    };
    
    const timer = setTimeout(typeText, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex, titles, typingSpeed]);

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-950 z-0" />
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
              {personalInfo.name}
            </h1>
            
            <div className="h-8 mb-6">
              <h2 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300">
                <span>{typedText}</span>
                <span className="animate-pulse">|</span>
              </h2>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-8 max-w-lg">
              {personalInfo.summary}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="btn-primary"
              >
                Contact you
              </Link>
                <a 
                href="/MyResume-English(PFA).pdf" 
                className="btn-outline flex items-center"
                rel="noopener noreferrer"
                target="_blank"
                >
                <Download size={16} className="mr-2" />
                Download CV
                </a>
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="https://github.com/achrafchalkha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/achraf-chalkha-878484290/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
             
            </div>
          </motion.div>
          
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <img 
              src="/1730805694900 (1).jpg" 
              alt="Hero Image" 
              className="w-2/3 h-80 lg:h-[24rem] rounded-2xl object-cover shadow-lg ml-36"
              />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-lg bg-accent-500/10 backdrop-blur-sm z-[-1]"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-lg bg-primary-500/10 backdrop-blur-sm z-[-1]"></div>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 dark:text-gray-400 animate-bounce">
          <Link to="about" smooth={true} duration={500} className="cursor-pointer">
            <ChevronDown size={28} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;