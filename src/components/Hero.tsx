import React from 'react';
import { Download, Mail, ArrowDown } from 'lucide-react';
import img from './sanju.jpg'
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src={img}
                alt="Sanjana Mathur" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="text-gray-300">
              Sanjana Mathur
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed font-medium">
            Final-year CSE student | Aspiring Software Developer
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          
            My journey in technology began with a curiosity about how things work, which evolved into a deep 
            interest in programming and software development.

          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-gray-700 text-white px-10 py-4 rounded-lg font-semibold hover:bg-gray-600 transition-colors duration-300 flex items-center gap-3">
              <Download size={22} />
              Download Resume
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-gray-400 text-gray-300 px-10 py-4 rounded-lg font-semibold hover:bg-gray-700 hover:text-white transition-colors duration-300 flex items-center gap-3"
            >
              <Mail size={22} />
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ArrowDown size={28} className="text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;