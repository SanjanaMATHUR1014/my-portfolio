import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here (integrate with EmailJS or similar service)
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-white" size={24} />,
      title: 'Email',
      content: '14sanjanamathur@gmail.com',
      link: 'mailto:14sanjanamathur@gmail.com'
    },
    {
      icon: <Phone className="text-white" size={24} />,
      title: 'Phone',
      content: '+91 7478909738',
      link: 'tel:+917478909738'
    },
    {
      icon: <MapPin className="text-white" size={24} />,
      title: 'Location',
      content: 'Raniganj, West Bengal, India',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="text-white" size={24} />,
      name: 'GitHub',
      url: 'https://github.com/SanjanaMATHUR1014',
      color: 'hover:bg-gray-600'
    },
    {
      icon: <Linkedin className="text-white" size={24} />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/s-mathur14',
      color: 'hover:bg-gray-600'
    },
    {
      icon: <Instagram className="text-white" size={24} />,
      name: 'Instagram',
      url: 'https://www.instagram.com/mathur_sanjanamathur/?next=%2F#',
      color: 'hover:bg-gray-600'
    },
    
  ];

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gray-400 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a friendly chat about technology!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="p-3 bg-gray-600 rounded-full">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{info.title}</h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-300 hover:text-white transition-colors duration-200"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-300">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-white mb-6">Connect With Me</h3>
                <div className="grid grid-cols-3 gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-gray-600 rounded-lg hover:text-white transition-all duration-300 ${social.color} flex items-center justify-center`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-300">Follow me on social media for updates!</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 resize-none text-white placeholder-gray-400"
                      placeholder="Tell me about your project or just say hi!"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-500 transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 text-center border-t border-gray-600 pt-8">
            <p className="text-gray-400">
              © 2025 Sanjana Mathur. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;