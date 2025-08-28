import React from 'react';
import { ExternalLink, Github, Play, Code, Database, Cloud, Brain } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Full-Stack Web Application',
      description: 'A comprehensive web application built with React frontend and Node.js backend, featuring user authentication, real-time updates, and responsive design.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'Socket.io'],
      category: 'Web Development',
      icon: <Code size={20} />,
      liveUrl: 'https://demo-webapp.com',
      githubUrl: 'https://github.com/hashimiqbal/fullstack-app',
      challenges: [
        'Implemented real-time communication using WebSocket technology',
        'Designed scalable database schema with optimized queries',
        'Built responsive UI with modern React patterns and hooks',
        'Integrated secure authentication and authorization system'
      ]
    },
    {
      title: 'Machine Learning Data Analysis',
      description: 'Data analysis and machine learning project using Python to predict trends and patterns from large datasets with visualization and model evaluation.',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Jupyter', 'NumPy'],
      category: 'Machine Learning',
      icon: <Brain size={20} />,
      liveUrl: 'https://ml-analysis-demo.com',
      githubUrl: 'https://github.com/hashimiqbal/ml-analysis',
      challenges: [
        'Processed and cleaned large datasets with missing values',
        'Implemented multiple ML algorithms and compared performance',
        'Created interactive visualizations for data insights',
        'Achieved 85% accuracy in predictive modeling'
      ]
    },
    {
      title: 'Cloud-Based API Service',
      description: 'RESTful API service deployed on AWS with microservices architecture, featuring automated testing, CI/CD pipeline, and comprehensive documentation.',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'FastAPI', 'AWS', 'Docker', 'PostgreSQL', 'Redis'],
      category: 'Cloud Computing',
      icon: <Cloud size={20} />,
      liveUrl: 'https://api-service-demo.com',
      githubUrl: 'https://github.com/hashimiqbal/cloud-api',
      challenges: [
        'Designed microservices architecture for scalability',
        'Implemented caching strategies for improved performance',
        'Set up automated deployment pipeline with Docker',
        'Achieved 99.9% uptime with proper monitoring and logging'
      ]
    },
    {
      title: 'Database Management System',
      description: 'Custom database management system with query optimization, indexing strategies, and transaction management built from scratch using C++.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['C++', 'Data Structures', 'Algorithms', 'File Systems', 'SQL Parser'],
      category: 'Systems Programming',
      icon: <Database size={20} />,
      liveUrl: '#',
      githubUrl: 'https://github.com/hashimiqbal/custom-dbms',
      challenges: [
        'Implemented B+ tree indexing for efficient data retrieval',
        'Built custom SQL parser and query execution engine',
        'Designed transaction management with ACID properties',
        'Optimized storage and memory management for large datasets'
      ]
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Web Development':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Machine Learning':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Cloud Computing':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'Systems Programming':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my technical skills and problem-solving abilities across different domains
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(project.category)}`}>
                    {project.icon}
                    <span className="ml-2">{project.category}</span>
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Challenges */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    {project.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  {project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <Github size={16} className="mr-2" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Projects Note */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              More Projects Coming Soon
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
              I'm constantly working on new projects and exploring emerging technologies. Check out my GitHub 
              for the latest updates and contributions to open-source projects.
            </p>
            <a
              href="https://github.com/Haz-ctrl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <Github size={20} className="mr-2" />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;