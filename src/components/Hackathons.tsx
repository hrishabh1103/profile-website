import React from 'react';
import { Trophy } from 'lucide-react';

const hackathons = [
  {
    title: 'Smart India Hackathon 2024',
    description: 'Developed an AI-powered solution for stubble burning detection and management using satellite imagery and machine learning.',
    technologies: ['TensorFlow', 'Computer Vision', 'Satellite API']
  },
  {
    title: 'Bajaj HackRx 5.0',
    description: 'Built an advanced document forgery detection system using deep learning and computer vision techniques.',
    technologies: ['PyTorch', 'OpenCV', 'Flask']
  },
  {
    title: 'TCS CodeVita Season 12',
    description: 'Participated in competitive programming challenges, solving complex algorithmic problems.',
    technologies: ['Python', 'Data Structures', 'Algorithms']
  }
];

const Hackathons = () => {
  return (
    <section id="hackathons" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Hackathons & Competitions</h2>
        
        <div className="space-y-8">
          {hackathons.map((hackathon) => (
            <div
              key={hackathon.title}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Trophy className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{hackathon.title}</h3>
                  <p className="text-gray-600 mb-4">{hackathon.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {hackathon.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;