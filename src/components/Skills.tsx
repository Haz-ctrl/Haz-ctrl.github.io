import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript/TypeScript', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'C/C++', level: 75 },
        { name: 'SQL', level: 80 }
      ]
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript ES6+', level: 85 },
        { name: 'Responsive Design', level: 80 },
        { name: 'UI/UX Principles', level: 75 }
      ]
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 75 },
        { name: 'MongoDB', level: 75 },
        { name: 'PostgreSQL', level: 70 },
        { name: 'RESTful APIs', level: 80 }
      ]
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', level: 75 },
        { name: 'Docker', level: 70 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'CI/CD', level: 65 },
        { name: 'Linux/Unix', level: 75 }
      ]
    },
    {
      title: 'Machine Learning & Data',
      skills: [
        { name: 'Machine Learning', level: 75 },
        { name: 'Data Analysis', level: 80 },
        { name: 'TensorFlow/PyTorch', level: 70 },
        { name: 'Pandas/NumPy', level: 80 },
        { name: 'Data Visualization', level: 75 }
      ]
    },
    {
      title: 'Software Engineering',
      skills: [
        { name: 'Algorithm Design', level: 85 },
        { name: 'Data Structures', level: 85 },
        { name: 'System Design', level: 75 },
        { name: 'Testing', level: 80 },
        { name: 'Agile/Scrum', level: 75 }
      ]
    }
  ];

  const SkillBar: React.FC<{ skill: { name: string; level: number } }> = ({ skill }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {skill.name}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-blue-600 to-teal-600 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise across the modern technology stack
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar key={skillIndex} skill={skill} />
              ))}
            </div>
          ))}
        </div>

        {/* Additional Skills & Interests */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Additional Expertise & Interests
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Computer Vision', 'Natural Language Processing', 'Microservices Architecture',
              'API Design', 'Database Optimization', 'Performance Tuning', 'Security Best Practices',
              'Mobile Development', 'Blockchain Technology', 'IoT Development', 'DevOps Practices',
              'Technical Writing', 'Code Review', 'Mentoring', 'Open Source Contribution'
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Continuous Learning Mindset
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Technology evolves rapidly, and I believe in staying current with emerging trends and best practices. 
              Through my academic studies, personal projects, and hands-on experience, I continuously expand my 
              skill set to tackle new challenges and contribute to innovative solutions. I'm particularly excited 
              about the intersection of traditional software engineering with emerging fields like AI/ML and cloud-native development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;