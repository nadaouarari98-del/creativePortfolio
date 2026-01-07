import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20 sm:py-32 bg-slate-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-200 rounded-full filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300">
              <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                  AJ
                </div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-cyan-600 font-semibold text-lg uppercase tracking-wider">About Me</h3>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
                Turning Ideas Into{' '}
                <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
                  Digital Reality
                </span>
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                I'm a passionate creative developer with a love for building beautiful, functional web experiences.
                With over 5 years of experience in the industry, I've had the privilege of working with startups
                and established companies to bring their visions to life.
              </p>

              <p>
                My approach combines technical excellence with creative problem-solving. I believe that great
                design isn't just about how something looks—it's about how it works, how it feels, and the
                impact it creates for users.
              </p>

              <p>
                When I'm not coding, you'll find me exploring new design trends, contributing to open-source
                projects, or capturing moments through photography. I'm always eager to learn and take on
                new challenges that push the boundaries of what's possible on the web.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
                  5+
                </div>
                <div className="text-sm text-slate-600 mt-1 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
                  50+
                </div>
                <div className="text-sm text-slate-600 mt-1 font-medium">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
                  20+
                </div>
                <div className="text-sm text-slate-600 mt-1 font-medium">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
