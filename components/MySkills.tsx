'use client';

import { Icon } from '@iconify/react';

const skills = [
  {
    icon: 'logos:react',
    title: 'React.js',
    description: 'Building dynamic, component-based user interfaces with reusable logic.',
    gradient: 'from-blue-50 to-blue-100',
    iconColor: 'text-blue-600',
    bubbleColor: 'from-[#2684FC]/20 to-[#4A90E2]/20',
    bubbles: [{ position: 'bottom-left', size: 'w-4 h-4', animation: 'animate-pulse' }]
  },
  {
    icon: 'logos:nextjs-icon',
    title: 'Next.js',
    description: 'Creating SEO-friendly, server-side rendered applications for optimal performance.',
    gradient: 'from-gray-50 to-gray-200',
    iconColor: 'text-black',
    bubbleColor: 'from-[#000000]/20 to-[#4A90E2]/20',
    bubbles: [
      { position: 'top-left', size: 'w-3 h-3', animation: 'animate-bounce' },
      { position: 'bottom-right', size: 'w-4 h-4', animation: 'animate-pulse delay-300' }
    ]
  },
  {
    icon: 'mdi:robot',
    title: 'No-Code AI Tools',
    description: 'Leveraging AI platforms to build intelligent applications without coding.',
    gradient: 'from-purple-50 to-purple-100',
    iconColor: 'text-purple-600',
    bubbleColor: 'from-[#8e2de2]/20 to-[#4a00e0]/20',
    bubbles: [{ position: 'top-right', size: 'w-4 h-4', animation: 'animate-bounce delay-500' }]
  },
  {
    icon: 'akar-icons:github-fill',
    title: 'GitHub',
    description: 'Version control and collaborative development for modern projects.',
    gradient: 'from-gray-50 to-gray-100',
    iconColor: 'text-gray-800',
    bubbleColor: 'from-[#333]/20 to-[#6e5494]/20',
    bubbles: [{ position: 'top-right', size: 'w-4 h-4', animation: 'animate-pulse delay-200' }]
  },
  {
    icon: 'logos:tailwindcss-icon',
    title: 'Tailwind & Bootstrap',
    description: 'Creating responsive, mobile-first, and modern UI designs efficiently.',
    gradient: 'from-indigo-50 to-indigo-100',
    iconColor: 'text-indigo-600',
    bubbleColor: 'from-[#4c51bf]/20 to-[#667eea]/20',
    bubbles: [{ position: 'bottom-right', size: 'w-3 h-3', animation: 'animate-bounce delay-700' }]
  },
  {
    icon: 'mdi:api',
    title: 'RESTful APIs',
    description: 'Integrating and optimizing APIs for smooth data flow between frontend and backend.',
    gradient: 'from-red-50 to-red-100',
    iconColor: 'text-red-600',
    bubbleColor: 'from-[#e53e3e]/20 to-[#f56565]/20',
    bubbles: [
      { position: 'top-right', size: 'w-3 h-3', animation: 'animate-pulse delay-600' },
      { position: 'bottom-right', size: 'w-4 h-4', animation: 'animate-pulse delay-600' }
    ]
  }
];

export default function MySkills() {
  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Frontend Skills That Power
            <span className="block bg-gradient-to-r from-[#2684FC] to-[#4A90E2] bg-clip-text text-transparent">
              Every Project
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
            Skilled in modern tools and frameworks to craft dynamic, scalable, and elegant user interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="relative group p-6 lg:p-8 rounded-2xl lg:rounded-3xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Dynamic Floating Bubbles */}
              {skill.bubbles.map((bubble, bubbleIndex) => {
                const positionClasses: Record<string, string> = {
                  'top-right': '-top-2 -right-2 lg:-top-3 lg:-right-3',
                  'top-left': '-top-2 -left-2 lg:-top-3 lg:-left-3',
                  'bottom-right': '-bottom-1 -right-1 lg:-bottom-2 lg:-right-2',
                  'bottom-left': '-bottom-1 -left-1 lg:-bottom-2 lg:-left-2'
                };
                return (
                  <div
                    key={bubbleIndex}
                    className={`absolute ${positionClasses[bubble.position]} ${bubble.size} bg-gradient-to-r ${skill.bubbleColor} rounded-full ${bubble.animation}`}
                  ></div>
                );
              })}
              
              <div className={`w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl bg-gradient-to-r ${skill.gradient} p-3 lg:p-4 mb-4 lg:mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg flex items-center justify-center`}>
                <Icon icon={skill.icon} className={`w-full h-full ${skill.iconColor}`} />
              </div>
              
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4">
                {skill.title}
              </h3>
              
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}