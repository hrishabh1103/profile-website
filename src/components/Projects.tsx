import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'House Price Prediction System',
    description: 'Advanced machine learning model for accurate house price predictions using historical data and market trends.',
    technologies: ['Python', 'scikit-learn', 'TensorFlow', 'Pandas'],
    github: 'https://github.com/hrishabh1103/House_Price_Prediction_ML',
    demo: 'https://house-price.demo.com'
  },
  {
    title: 'E-commerce Product Recommendation',
    description: 'Personalized recommendation system using collaborative filtering and deep learning.',
    technologies: ['Python', 'PyTorch', 'Flask', 'MongoDB'],
    github: 'https://github.com/hrishabh1103/E_com_Recommendation_sys',
    demo: 'https://recommendations.demo.com'
  },
  {
    title: 'Social Media Sentiment Analysis',
    description: 'Real-time sentiment analysis of social media posts using NLP and deep learning.',
    technologies: ['Python', 'BERT', 'FastAPI', 'Redis'],
    github: 'https://github.com/hrishabh1103/Social-Media-Sentiment-Analysis',
    demo: 'https://sentiment.demo.com'
  },
  {
    title: 'Blockchain-based Voting Machine',
    description: 'Secure and transparent voting system built on blockchain technology.',
    technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
    github: 'https://github.com/hrishabh1103/Blockchain_Based_Voting_Machine',
    demo: 'https://voting.demo.com'
  },
  {
    title: 'Genius AI Voice Assistant',
    description: 'Advanced voice assistant using natural language processing and speech recognition.',
    technologies: ['Python', 'TensorFlow', 'PyAudio', 'NLTK'],
    github: 'https://github.com/hrishabh1103/Genius_AI_Minor_project',
    demo: 'https://genius-ai-minor-project.vercel.app/'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-primary-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-secondary-800">Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-secondary-800">{project.title}</h3>
                <p className="text-secondary-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-600 hover:text-primary-600 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-600 hover:text-primary-600 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;