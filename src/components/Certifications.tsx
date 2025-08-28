import React from 'react';
import { Award, ExternalLink, Calendar, BookOpen, Code, Cloud, Database } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2024',
      status: 'Completed',
      verificationUrl: 'https://www.credly.com/badges/fc6e76a9-df24-45e6-98d9-3f41266a0baa/linked_in_profile',
      description: 'Foundational understanding of AWS cloud services, security, and pricing models.',
      skills: ['Cloud Computing', 'AWS Services', 'Security', 'Cost Management'],
      icon: <Cloud size={24} />
    }
  ];

  const academicAchievements = [
    {
      title: 'Master\'s Degree in Computer Science',
      institution: 'University of St Andrews',
      period: '2021-2026',
      description: 'Pursuing a degree in Computer Science.'
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications & Achievements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </div>

        {/* Professional Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
              >
                {/* Certificate Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mr-3">
                      <div className="text-blue-600 dark:text-blue-400">
                        {cert.icon}
                      </div>
                    </div>
                    <div>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(cert.status)}`}>
                        {cert.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar size={16} className="mr-1" />
                    {cert.date}
                  </div>
                </div>

                {/* Certificate Content */}
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                  {cert.name}
                </h4>
                
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                  {cert.issuer}
                </p>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verification Link */}
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                >
                  <ExternalLink size={16} className="mr-1" />
                  Verify
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Academic Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {academicAchievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 text-center"
              >
                <div className="p-3 bg-white dark:bg-gray-800 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                  {achievement.institution}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {achievement.period}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Goals */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Commitment to Continuous Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
              I believe in staying current with rapidly evolving technology trends. My certification journey 
              reflects my commitment to mastering both foundational concepts and cutting-edge technologies. 
              I'm currently working towards additional certifications in cloud computing and advanced machine learning.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                Next: AWS Solutions Architect
              </span>
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                Goal: TensorFlow Developer Certificate
              </span>
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                Target: Kubernetes Administrator
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;