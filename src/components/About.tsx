import React from 'react';
import { Code, Rocket, Users, Award, BookOpen, Target } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code size={32} />,
      title: 'Full-Stack Development',
      description: 'Proficient in modern web technologies including React, Node.js, Python, and cloud platforms with a focus on scalable architecture.'
    },
    {
      icon: <BookOpen size={32} />,
      title: 'Continuous Learning',
      description: 'Currently pursuing Master\'s degree in Computer Science while staying updated with emerging technologies and industry best practices.'
    },
    {
      icon: <Rocket size={32} />,
      title: 'Innovation Focus',
      description: 'Passionate about exploring cutting-edge technologies like machine learning, cloud computing, and modern development frameworks.'
    },
    {
      icon: <Target size={32} />,
      title: 'Problem Solver',
      description: 'Strong analytical skills with experience in algorithm design, data structures, and building efficient solutions to complex challenges.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Innovation through code and design
          </p>
        </div>

        {/* Professional Journey */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Journey</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Academic Excellence</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Currently pursuing a Master's degree in Computer Science, building upon a strong foundation in software engineering 
                  principles, algorithms, and system design. My academic journey has equipped me with both theoretical knowledge 
                  and practical skills essential for modern software development.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technical Expertise</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Experienced in full-stack development with proficiency in React, Node.js, Python, and cloud technologies. 
                  I've worked on diverse projects ranging from web applications to machine learning implementations, 
                  always focusing on clean code and scalable solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Strengths */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-shadow"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4 flex justify-center">
                {highlight.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {highlight.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Values & Approach */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            My Approach to Technology
          </h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I believe in writing readable, maintainable code that not only solves immediate problems but also scales 
              for future needs. My approach combines solid computer science fundamentals with modern development 
              practices, ensuring robust and efficient solutions.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Whether working on frontend interfaces, backend systems, or exploring machine learning applications, 
              I'm committed to delivering high-quality software that makes a positive impact. I'm always eager to 
              learn new technologies and collaborate with teams to build innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;