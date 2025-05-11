import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Sun, Moon, Github, Linkedin, Mail } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const menuItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Education', to: 'education' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Contact', to: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white dark:bg-gray-900 shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-xl md:text-2xl font-bold cursor-pointer"
          >
            AC<span className="text-primary-600 dark:text-primary-400">.</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 font-medium cursor-pointer"
                activeClass="text-primary-600 dark:text-primary-400 font-semibold"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="https://github.com/achrafchalkha" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <Github size={20} />
          </a>
            <a 
            href="https://www.linkedin.com/in/achraf-chalkha-878484290/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
            <Linkedin size={20} />
            </a>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-gray-700 dark:text-gray-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      />
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 z-50 shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 pb-6 px-6">
          <ul className="space-y-4 mb-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
                  activeClass="text-primary-600 dark:text-primary-400 font-semibold"
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex justify-center space-x-5">
            <a 
              href="https://github.com/achrafchalkha" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/achraf-chalkha" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:chalkhaachraf21@gmail.com" 
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;