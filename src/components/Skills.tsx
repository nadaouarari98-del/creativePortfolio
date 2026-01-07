import React, { useState } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const skills: Skill[] = [
    // Frontend
    { name: 'React', level: 95, category: 'frontend' },
    { name: 'TypeScript', level: 90, category: 'frontend' },
    { name: 'Next.js', level: 88, category: 'frontend' },
    { name: 'Tailwind CSS', level: 92, category: 'frontend' },
    { name: 'Vue.js', level: 80, category: 'frontend' },
    { name: 'HTML/CSS', level: 95, category: 'frontend' },

    // Backend
    { name: 'Node.js', level: 85, category: 'backend' },
    { name: 'Python', level: 82, category: 'backend' },
    { name: 'PostgreSQL', level: 80, category: 'backend' },
    { name: 'MongoDB', level: 78, category: 'backend' },
    { name: 'GraphQL', level: 75, category: 'backend' },
    { name: 'REST APIs', level: 90, category: 'backend' },

    // Tools & Other
    { name: 'Git', level: 90, category: 'tools' },
    { name: 'Docker', level: 75, category: 'tools' },
    { name: 'Figma', level: 88, category: 'tools' },
    { name: 'AWS', level: 70, category: 'tools' },
    { name: 'Jest/Testing', level: 82, category: 'tools' },
    { name: 'CI/CD', level: 78, category: 'tools' },
  ];

  const categories = [
    { id: 'all', label: 'All Skills', icon: '🚀' },
    { id: 'frontend', label: 'Frontend', icon: '🎨' },
    { id: 'backend', label: 'Backend', icon: '⚙️' },
    { id: 'tools', label: 'Tools & DevOps', icon: '🛠️' },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="relative py-20 sm:py-32 bg-slate-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-cyan-400 font-semibold text-lg uppercase tracking-wider mb-4">My Expertise</h3>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-purple-500/50 scale-105'
                  : 'bg-slate-800 text-gray-400 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-white font-semibold text-lg">{skill.name}</h4>
                <span className="text-cyan-400 font-bold text-sm">{skill.level}%</span>
              </div>

              {/* Progress bar */}
              <div className="relative h-2 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${skill.level}%`,
                    transitionDelay: `${index * 50}ms`
                  }}
                >
                  <div className="absolute inset-0 bg-white/30 animate-shimmer"></div>
                </div>
              </div>

              {/* Category badge */}
              <div className="mt-3">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-slate-700 text-gray-400 rounded-full">
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg">
            Always learning, always growing. Currently exploring{' '}
            <span className="text-cyan-400 font-medium">Web3</span>,{' '}
            <span className="text-purple-400 font-medium">AI/ML</span>, and{' '}
            <span className="text-pink-400 font-medium">3D Web Experiences</span>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};
