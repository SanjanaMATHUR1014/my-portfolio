import React from 'react';
import { GraduationCap, Code, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gray-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gray-600 rounded-full">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Education</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Currently pursuing BTech in Computer Science & Engineering. Graduated from DAV Public School, Raniganj, W.B. with strong academic performance - 90% in matriculation and 81% in intermediate.
                </p>
              </div>

              <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gray-600 rounded-full">
                    <Code className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Technical Journey</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Strong foundation in frontend development with expertise in modern web technologies. Currently expanding my skills into backend development to become a well-rounded full-stack developer.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gray-600 rounded-full">
                    <Heart className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Passion & Goals</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  I'm passionate about creating user-friendly web applications and solving complex problems through code. My goal is to contribute to innovative projects that make a positive impact on people's lives.
                </p>
              </div>

              <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Core Strengths</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    Problem-solving and logical thinking
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    Frontend development expertise
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    Continuous learning mindset
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    Team collaboration and communication
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;