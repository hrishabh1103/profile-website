import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Hackathons', href: '#hackathons' },
    { name: 'Contact', href: '#contact' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-primary-600">
            <img 
              src="/images/logo.png" 
              alt="HG Logo" 
              className="h-12 w-auto hover:scale-105 transition-transform" // Increased from h-10 to h-16
            />
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-secondary-600 hover:text-primary-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/hrishabh1103" target="_blank" rel="noopener noreferrer" className="text-secondary-600 hover:text-primary-600">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/hrishabh1103/" target="_blank" rel="noopener noreferrer" className="text-secondary-600 hover:text-primary-600">
              <Linkedin size={20} />
            </a>
            <a href="mailto:hrishabh110304@gmail.com" className="text-secondary-600 hover:text-primary-600">
              <Mail size={20} />
            </a>
          </div>

          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-secondary-600 hover:text-primary-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com/hrishabh1103" target="_blank" rel="noopener noreferrer" className="text-secondary-600 hover:text-primary-600">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/hrishabh1103/" target="_blank" rel="noopener noreferrer" className="text-secondary-600 hover:text-primary-600">
                <Linkedin size={20} />
              </a>
              <a href="mailto:hrishabh110304@gmail.com" className="text-secondary-600 hover:text-primary-600">
                <Mail size={20} />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;