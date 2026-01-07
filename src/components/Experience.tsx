import React from 'react';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
  technologies: string[];
}

export const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      company: 'TechVision Inc.',
      role: 'Senior Frontend Developer',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      achievements: [
        'Led a team of 5 developers in redesigning the company\'s flagship product, resulting in a 40% increase in user engagement',
        'Implemented a comprehensive design system using React and Tailwind CSS, reducing development time by 30%',
        'Mentored junior developers and conducted code reviews to maintain high code quality standards',
        'Optimized application performance, achieving a 50% reduction in initial load time',
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GraphQL'],
    },
    {
      company: 'Creative Digital Agency',
      role: 'Full Stack Developer',
      period: '2020 - 2022',
      location: 'New York, NY',
      achievements: [
        'Developed and launched 15+ client websites and web applications from concept to deployment',
        'Collaborated with designers and project managers to deliver pixel-perfect, responsive solutions',
        'Built RESTful APIs and integrated third-party services for various client projects',
        'Implemented automated testing strategies, increasing code coverage to 85%',
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'AWS'],
    },
    {
      company: 'StartupHub',
      role: 'Frontend Developer',
      period: '2019 - 2020',
      location: 'Austin, TX',
      achievements: [
        'Built responsive user interfaces for a fast-growing SaaS platform serving 10,000+ users',
        'Integrated payment systems and analytics tools to track user behavior and conversions',
        'Participated in agile development processes and daily standups',
        'Contributed to open-source projects and documented best practices',
      ],
      technologies: ['Vue.js', 'JavaScript', 'SCSS', 'Firebase', 'Stripe API'],
    },
  ];

  return (
    <section id="experience" className="relative py-20 sm:py-32 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-200 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-purple-600 font-semibold text-lg uppercase tracking-wider mb-4">Career Journey</h3>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Work Experience
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A timeline of growth, learning, and meaningful contributions
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? 'lg:text-right' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12 lg:col-start-2'}`}>
                  <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 border-l-4 border-gradient-to-b from-cyan-500 to-purple-500">
                    {/* Company and role */}
                    <div className="mb-4">
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap gap-2 items-center mb-2">
                        <span className="text-lg font-semibold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
                          {exp.company}
                        </span>
                        <span className="text-slate-400">•</span>
                        <span className="text-slate-600">{exp.location}</span>
                      </div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-100 to-purple-100 rounded-full">
                        <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm font-medium text-purple-700">{exp.period}</span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-4 text-left">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-slate-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 text-left">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm font-medium bg-slate-100 text-slate-700 rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 hover:text-white transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className={`hidden lg:block ${index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1'}`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            <span>Let's Work Together</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
