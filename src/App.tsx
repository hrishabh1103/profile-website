import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import Contact from './components/Contact';
import Blog from './components/Blog';
import SplashScreen from './components/SplashScreen';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4500); // Increased to match the new animation duration (4s + 0.5s fadeout)

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash && <SplashScreen />}
      <div className={`min-h-screen bg-white ${showSplash ? 'hidden' : ''}`}>
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Hackathons />
          <Contact />
          <Blog />
        </main>
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                <div className="space-y-2">
                  <a href="mailto:hrishabh110304@gmail.com" className="flex items-center hover:text-blue-400 transition-colors">
                    <Mail className="mr-2" size={16} />
                    hrishabh110304@gmail.com
                  </a>
                  <div className="flex items-center">
                    <Phone className="mr-2" size={16} />
                    +91 (Contact on Email)
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/hrishabh1103"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/hrishabh1103/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <a href="#about" className="block hover:text-blue-400 transition-colors">About</a>
                  <a href="#projects" className="block hover:text-blue-400 transition-colors">Projects</a>
                  <a href="#contact" className="block hover:text-blue-400 transition-colors">Contact</a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center">
              <p>&copy; {new Date().getFullYear()} Hrishabh Gupta. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
