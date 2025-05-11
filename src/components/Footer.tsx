import React from 'react';
import { Link } from 'react-scroll';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="text-2xl font-bold cursor-pointer"
            >
              AC<span className="text-primary-400">.</span>
            </Link>
            <p className="mt-4 text-gray-400 max-w-md">
              Computer Engineering student passionate about software development, 
              seeking opportunities to apply and enhance my skills in real-world projects.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://github.com/achrafchalkha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-full"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/achraf-chalkha-878484290/"  
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-full"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:chalkhaachraf21@gmail.com"
                className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-full"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                <span className="block">Fes, Morocco</span>
              </li>
              <li className="text-gray-400">
                <a 
                  href="mailto:chalkhaachraf21@gmail.com"
                  className="hover:text-primary-400 transition-colors"
                >
                  chalkhaachraf21@gmail.com
                </a>
              </li>
              <li className="text-gray-400">
                <a 
                  href="tel:+212770708444"
                  className="hover:text-primary-400 transition-colors"
                >
                  +212 770-708444
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 my-6" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Achraf Chalkha. All rights reserved.
          </p>
          
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="flex items-center text-gray-400 hover:text-primary-400 transition-colors mt-4 sm:mt-0 cursor-pointer"
          >
            <span className="mr-2 text-sm">Back to top</span>
            <ArrowUp size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;