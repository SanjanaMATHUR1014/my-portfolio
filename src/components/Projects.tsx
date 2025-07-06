import React from 'react';
import { ExternalLink, Github, Code, Play, BookOpen, Cloud, Sparkles } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'A responsive personal portfolio website built with React and Tailwind CSS. Features smooth scrolling, modern UI components, and clean design elements.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
      githubLink: 'https://github.com/SanjanaMATHUR1014/my-portfolio',
      liveLink: 'https://mathur-sanju.vercel.app/',
      icon: <Sparkles className="text-white" size={24} />,
      featured: true
    },
    {
      title: 'StudyNotes Hub',
      description: 'A comprehensive web platform where I uploaded and organized study notes for all semesters. Features categorized notes, search functionality, and easy navigation for students.',
      technologies: ['React', 'Node.js', 'MongoDB', 'File Upload', 'Search API'],
      githubLink: 'https://github.com/SanjanaMATHUR1014/notes-hub',
      liveLink: 'https://notes-hub-two.vercel.app/',
      icon: <BookOpen className="text-white" size={24} />,
      featured: true
    },
    {
      title: 'Saarthi-MedCare',
      description: 'your medical assistance ...Available 24/7 for you to take care of your mental health',
      technologies: ['React',  'CSS3'],
      githubLink: 'https://github.com/SanjanaMATHUR1014/Saarthi',
      liveLink: 'https://saarthi-medcare.vercel.app/',
      icon: <Cloud className="text-white" size={24} />,
      featured: true
    },
    
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gray-400 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and creativity
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-700 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-600 rounded-lg">
                        {project.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                    {project.featured && (
                      <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-600 text-gray-200 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <Github size={18} />
                      Code
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition-colors"
                    >
                      <Play size={18} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://github.com/SanjanaMATHUR1014?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
            >
              <Code size={20} />
              View More Projects on GitHub
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;