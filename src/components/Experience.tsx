import React from 'react';
import { Calendar, MapPin, ExternalLink, Code, Database, Cloud, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Software Engineering Intern (CIB, Payments Technology)',
      company: 'J.P. Morgan Chase',
      location: 'London, UK',
      period: 'Summer 2025',
      type: 'Internship',
      description:
        'Built a production microservice that streamlines creation of LLM knowledge bases, integrating seamlessly with existing engineering workflows.',
      achievements: [
        'Designed and shipped a FastAPI microservice with endpoints to index Git repositories and register them into firmwide LLM knowledge bases',
        'Implemented Confluence → knowledge-base export to enable querying documentation alongside code',
        'Added an endpoint for engineers to chat directly with their knowledge bases',
        'Integrated with CI/CD and webhooks to fit existing release pipelines and developer tooling',
        'Built a job scheduler to safely handle concurrent indexing requests with retries and backoff',
        'Produced clear API docs and concise examples to drive adoption; team estimates indicate ~US$1.3M annual savings'
      ],
      technologies: ['Python', 'FastAPI', 'Docker', 'Kubernetes', 'Oracle DB', 'REST APIs', 'CI/CD', 'Webhooks'],
      icon: <Briefcase size={24} />
    },
    {
      title: 'Software Engineering Intern (CIB, Securities Services)',
      company: 'J.P. Morgan Chase',
      location: 'London, UK',
      period: 'Summer 2024',
      type: 'Internship',
      description:
        'Created a scheduled repository-hygiene analysis tool to deliver continuous analytics across project repositories.',
      achievements: [
        'Developed a scheduler-driven analyser that generated up-to-date repo hygiene metrics across a large codebase',
        'Integrated with internal APIs and applications to surface insights to stakeholders',
        'Practised TDD with strong unit/integration coverage and peer code reviews',
        'Containerised workloads and delivered via firm CI/CD; deployed to cloud/Kubernetes environments',
        'Gained hands-on experience delivering maintainable software in a large enterprise setting'
      ],
      technologies: ['Python', 'Docker', 'AWS', 'Kubernetes', 'Jules CI/CD', 'Git', 'TDD'],
      icon: <Briefcase size={24} />
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Academic':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Project Work':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Internship':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Building expertise through academic excellence and practical application
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-blue-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-3">
                          <div className="text-blue-600 dark:text-blue-400">
                            {exp.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {exp.title}
                          </h3>
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(exp.type)}`}>
                            {exp.type}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar size={16} className="mr-1" />
                        {exp.period}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-blue-600 dark:text-blue-400 mb-2">
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                      <MapPin size={16} className="mr-1" />
                      {exp.location}
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                            <span className="text-green-500 mr-2 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Goals */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Looking Forward
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              As I continue my academic journey and gain more industry experience, I'm excited to contribute to 
              innovative projects that leverage cutting-edge technologies. I'm particularly interested in roles 
              that combine software engineering with emerging fields like machine learning, cloud computing, 
              and scalable system design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;