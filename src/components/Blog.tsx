import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

const blogs = [
  {
    title: 'The Future of AI: GPT-4 and Beyond',
    excerpt: 'Exploring the latest developments in AI language models and their potential impact on various industries.',
    content: `Artificial Intelligence has made remarkable strides in recent years, with GPT-4 leading the charge in natural language processing. This advancement represents a significant leap forward in AI capabilities, offering improved understanding, reasoning, and generation of human-like text.

    Key developments include:
    • Enhanced contextual understanding
    • Improved logical reasoning
    • Better factual accuracy
    • Reduced hallucinations
    • More nuanced responses

    The impact of these improvements spans across multiple industries, from healthcare to education, promising to revolutionize how we interact with technology. As we look beyond GPT-4, we can anticipate even more sophisticated AI models that will further blur the line between human and machine intelligence.`,
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'Artificial Intelligence'
  },
  {
    title: 'Blockchain Technology in 2024',
    excerpt: 'Understanding the current state of blockchain technology and its applications beyond cryptocurrency.',
    content: `Blockchain technology has evolved far beyond its cryptocurrency origins, now finding applications in various sectors. In 2024, we're seeing innovative uses in supply chain management, digital identity verification, and decentralized finance (DeFi).

    Major developments include:
    • Sustainable blockchain solutions
    • Enterprise blockchain adoption
    • Smart contract automation
    • Cross-chain interoperability
    • Regulatory framework maturation

    These advancements are making blockchain more accessible and practical for businesses while addressing previous concerns about scalability and environmental impact. The technology continues to prove its worth in creating transparent, secure, and efficient systems across industries.`,
    date: 'March 10, 2024',
    readTime: '4 min read',
    category: 'Blockchain'
  },
  {
    title: 'My Journey Through Smart India Hackathon',
    excerpt: 'Personal experiences and lessons learned from participating in one of India\'s biggest hackathons.',
    content: `Participating in the Smart India Hackathon was an incredible learning experience that pushed my technical and collaborative skills to new heights. Our team worked on developing an AI-powered solution for stubble burning detection using satellite imagery.

    Key takeaways:
    • The importance of proper planning and time management
    • How to work effectively in a team under pressure
    • The value of clear communication
    • Technical skills gained in AI and satellite data processing
    • The impact of innovative solutions on real-world problems

    The hackathon not only helped me grow as a developer but also showed me how technology can be used to address significant environmental challenges. The experience has shaped my approach to problem-solving and reinforced my passion for using technology for social good.`,
    date: 'March 5, 2024',
    readTime: '6 min read',
    category: 'Hackathon'
  }
];

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const BlogModal = ({ blog, onClose }) => {
    if (!blog) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                  <span>•</span>
                  <span className="text-blue-600">{blog.category}</span>
                </div>
                <h2 className="text-2xl font-bold">{blog.title}</h2>
              </div>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="prose max-w-none">
              {blog.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700 whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Blog</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.title}
              className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-600">{blog.category}</span>
                  <button 
                    onClick={() => setSelectedBlog(blog)}
                    className="text-blue-600 hover:text-blue-700 flex items-center"
                  >
                    Read More
                    <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {selectedBlog && (
          <BlogModal 
            blog={selectedBlog} 
            onClose={() => setSelectedBlog(null)} 
          />
        )}
      </div>
    </section>
  );
};

export default Blog;
