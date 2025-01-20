import React from 'react';
import { Download } from 'lucide-react';

const skills = [
  { name: 'Python', level: 90 },
  { name: 'TensorFlow', level: 85 },
  { name: 'PyTorch', level: 80 },
  { name: 'Problem Solving', level: 85 },
  { name: 'Machine Learning', level: 90 },
  { name: 'Deep Learning', level: 85 },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-secondary-800">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-secondary-800">Who I Am</h3>
            <p className="text-secondary-600 mb-6">
              I'm a passionate Data Scientist and AI enthusiast with expertise in machine learning, 
              deep learning, and blockchain technology. My journey in tech has been driven by a 
              desire to solve complex problems and create innovative solutions.
            </p>
            <p className="text-secondary-600 mb-8">
              With experience in various hackathons and real-world projects, I've developed a 
              strong foundation in AI/ML technologies and their practical applications.
            </p>
            <a
              href="/resume.pdf"
              download="Hrishabh_Gupta_Resume.pdf"
              className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Download Resume
              <Download className="ml-2" size={20} />
            </a>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-secondary-800">Skills</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-secondary-700">{skill.name}</span>
                    <span className="text-secondary-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary-100 rounded-full h-2">
                    <div
                      className="bg-primary-600 h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;