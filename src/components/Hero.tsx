import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-primary-50 to-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-5"></div>
      
      <div className="container mx-auto px-6 py-24 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">
              Hi, I'm <span className="text-primary-600">Hrishabh Gupta</span>
            </h1>
            <p className="text-2xl text-secondary-600 mb-8">
              A Data Scientist and AI Enthusiast
            </p>
            <p className="text-secondary-600 mb-8">
              Transforming data into insights and building intelligent solutions for tomorrow's challenges.
            </p>
            <div className="flex space-x-4">
              <a
                href="#projects"
                className="bg-primary-600 text-white px-6 py-3 rounded-lg flex items-center hover:bg-primary-700 transition-colors"
              >
                View My Work
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="#contact"
                className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden shadow-xl">
              <img
                src="/images/profile.png"
                alt="Hrishabh Gupta"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;