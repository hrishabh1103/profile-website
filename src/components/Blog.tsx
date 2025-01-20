import React from 'react';
import { ArrowRight } from 'lucide-react';

const blogs = [
  {
    title: 'The Future of AI: GPT-4 and Beyond',
    excerpt: 'Exploring the latest developments in AI language models and their potential impact on various industries.',
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'Artificial Intelligence'
  },
  {
    title: 'Blockchain Technology in 2024',
    excerpt: 'Understanding the current state of blockchain technology and its applications beyond cryptocurrency.',
    date: 'March 10, 2024',
    readTime: '4 min read',
    category: 'Blockchain'
  },
  {
    title: 'My Journey Through Smart India Hackathon',
    excerpt: 'Personal experiences and lessons learned from participating in one of India\'s biggest hackathons.',
    date: 'March 5, 2024',
    readTime: '6 min read',
    category: 'Hackathon'
  }
];

const Blog = () => {
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
                  <button className="text-blue-600 hover:text-blue-700 flex items-center">
                    Read More
                    <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;