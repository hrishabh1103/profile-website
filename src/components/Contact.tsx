import React from 'react';
import { Send, Github, Linkedin, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_pm72bqr', // Replace with your EmailJS service ID
        'service_pm72bqr', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Hrishabh', // Your name
          reply_to: formData.email,
        },
        'JNDTU3MkVRxxBGhhQ' // Replace with your EmailJS public key
      );

      if (result.status === 200) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-primary-50">
      <Toaster position="top-right" />
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-secondary-800">Get in Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-secondary-800">Contact Information</h3>
            <p className="text-secondary-600 mb-8">
              Feel free to reach out to me for collaborations, opportunities, or just to say hello!
            </p>
            
            <div className="space-y-4">
              <a
                href="https://github.com/hrishabh1103"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-secondary-600 hover:text-primary-600 transition-colors"
              >
                <Github className="mr-3" size={20} />
                github.com/hrishabh1103
              </a>
              <a
                href="https://www.linkedin.com/in/hrishabh1103/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-secondary-600 hover:text-primary-600 transition-colors"
              >
                <Linkedin className="mr-3" size={20} />
                linkedin.com/in/hrishabh1103
              </a>
              <a
                href="mailto:hrishabh110304@gmail.com"
                className="flex items-center text-secondary-600 hover:text-primary-600 transition-colors"
              >
                <Mail className="mr-3" size={20} />
                hrishabh110304@gmail.com
              </a>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-secondary-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-secondary-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-secondary-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-secondary-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-secondary-700 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-secondary-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                required
                disabled={isSubmitting}
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="bg-primary-600 text-white px-6 py-3 rounded-lg flex items-center hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send className="ml-2" size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;