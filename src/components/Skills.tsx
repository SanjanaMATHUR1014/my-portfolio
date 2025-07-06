import React from 'react';
import { Code, Layers, PenTool as Tool, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="text-white" size={32} />,
      title: 'Frontend Development',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS']
    },
    {
      icon: <Layers className="text-white" size={32} />,
      title: 'Programming Languages',
      skills: ['Java', 'C', 'C++', 'JavaScript', 'Python (Basic)', 'SQL']
    },
    {
      icon: <Tool className="text-white" size={32} />,
      title: 'Tools & Technologies',
      skills: ['Git & GitHub', 'VS Code','Intellij idea']
    },
    {
      icon: <Brain className="text-white" size={32} />,
      title: 'Currently Learning',
      skills: ['Node.js', 'MongoDB', 'Express.js', 'REST APIs', 'Backend Development', 'Database Design']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gray-400 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and the technologies I work with
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-gray-700 rounded-full">
                    {category.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skill Level Indicators */}
          <div className="mt-16 bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Proficiency Levels
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-lg">90%</span>
                </div>
                <h4 className="font-semibold text-white">Frontend</h4>
                <p className="text-sm text-gray-300">HTML, CSS, JavaScript, React</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-lg">85%</span>
                </div>
                <h4 className="font-semibold text-white">Programming</h4>
                <p className="text-sm text-gray-300">Java, C, C++</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-lg">60%</span>
                </div>
                <h4 className="font-semibold text-white">Backend</h4>
                <p className="text-sm text-gray-300">Node.js, MongoDB (Learning)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;