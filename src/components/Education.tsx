import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'BTech in Computer Science & Engineering',
      institution: 'Bengal College of Engineering and Technology',
      year: '2022 - 2026',
      location: 'Durgapur, West Bengal',
      status: 'Currently Pursuing',
      description: 'Relevant coursework: Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Software Engineering, Web Development',
      highlights: ['Consistent Academic Performance', 'Active in Technical Clubs', 'Project-Based Learning']
    },
    {
      degree: 'Intermediate (Science)',
      institution: 'R.L.J.D.M.C DAV Public School, Raniganj',
      year: '2020',
      location: 'Raniganj, West Bengal',
      status: '81%',
      description: 'Science stream with Mathematics, Physics, Chemistry, and Biology',
      highlights: ['Strong Foundation in Mathematics', 'Physics', 'Science Stream Focus']
    },
    {
      degree: 'Matriculation',
      institution: 'R.L.J.D.M.C DAV Public School, Raniganj',
      year: '2018',
      location: 'Raniganj, West Bengal',
      status: '90%',
      description: 'All subjects with distinction in Mathematics and Science',
      highlights: ['Academic Excellence', 'Mathematics Proficiency', 'Science Achievement']
    }
  ];

  const achievements = [
    'Consistent Academic Performance',
    'Strong Foundation in Computer Science',
    'Active Participation in Technical Projects',
    'Problem-Solving Skills Development',
    'Programming Language Proficiency',
    'Web Development Expertise'
  ];

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Education & Achievements
            </h2>
            <div className="w-24 h-1 bg-gray-400 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto">
              My educational journey and academic achievements
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Education Timeline */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {educationData.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 p-6 rounded-lg shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 bg-gray-700 rounded-full">
                        <GraduationCap className="text-white" size={24} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="text-xl font-bold text-white mb-1 sm:mb-0">
                            {edu.degree}
                          </h3>
                          <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {edu.status}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-4 mb-3 text-gray-300">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span className="text-sm">{edu.year}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span className="text-sm">{edu.location}</span>
                          </div>
                        </div>
                        
                        <h4 className="font-semibold text-white mb-2">{edu.institution}</h4>
                        <p className="text-gray-300 mb-3">{edu.description}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {edu.highlights.map((highlight, highlightIndex) => (
                            <span
                              key={highlightIndex}
                              className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-xs font-medium"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg sticky top-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gray-700 rounded-full">
                    <Award className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Key Achievements</h3>
                </div>
                
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-gray-700 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-200 text-sm leading-relaxed">{achievement}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-gray-700 rounded-lg text-white">
                  <h4 className="font-semibold mb-2">Academic Focus</h4>
                  <p className="text-sm opacity-90">
                    Strong emphasis on practical learning through projects and hands-on experience in modern web development technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;