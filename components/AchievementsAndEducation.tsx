"use client";

const timeline = [
  { 
    type: "study", 
    degree: "BSc Computer Science", 
    institution: "BZU Multan", 
    year: "2019-21",
    icon: "🎓"
  },
  { 
    type: "study", 
    degree: "MSc Computer Science", 
    institution: "GCU Faisalabad", 
    year: "2021-23",
    icon: "🎓"
  },
  { 
    type: "study", 
    degree: "Frontend Development", 
    institution: "Self Learning", 
    year: "8 months",
    icon: "💻"
  },
  { 
    type: "study", 
    degree: "Internship", 
    institution: "Metalogix Sahiwal", 
    year: "3 months",
    icon: "🏢"
  },
  { 
    type: "study", 
    degree: "Full-time Job", 
    institution: "Metalogix Sahiwal", 
    year: "Present",
    icon: "💼"
  },
  { 
    type: "achievement", 
    title: "Portfolio Website", 
    description: "React, Next.js, TailwindCSS", 
    date: "Jan 2024",
    icon: "🌐"
  },
  { 
    type: "achievement", 
    title: "E-commerce Platform", 
    description: "Payment integration", 
    date: "Apr 2024",
    icon: "🛒"
  },
  { 
    type: "achievement", 
    title: "Dashboard App", 
    description: "Charts & analytics", 
    date: "Jul 2024",
    icon: "📊"
  },
  { 
    type: "achievement", 
    title: "Real-Time Chat App", 
    description: "WebSocket support", 
    date: "Sep 2024",
    icon: "💬"
  },
];

export default function AchievementsAndEducation() {
  return (
    <section
      id="achievements"
      className="py-12 sm:py-16 bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-900 dark:to-blue-900"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Achievements &
            <span className="bg-gradient-to-r from-[#2684FC] to-[#4A90E2] bg-clip-text text-transparent ml-3">
              Education
            </span>
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            A journey of learning, projects, and milestones in my development career.
          </p>
        </div>

        {/* Horizontal Wave Timeline */}
        <div className="relative max-w-7xl mx-auto">
          {/* Wave Path - Desktop */}
          <div className="hidden md:block relative h-32">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,60 Q150,20 300,60 T600,60 T900,60 T1200,60"
                stroke="url(#gradient)"
                strokeWidth="3"
                fill="none"
                className="drop-shadow-sm"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2684FC" />
                  <stop offset="100%" stopColor="#4A90E2" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Mobile Vertical Line */}
          <div className="md:hidden absolute left-4 top-0 w-0.5 bg-gradient-to-b from-[#2684FC] to-[#4A90E2] h-full rounded-full"></div>

          {/* Timeline Items */}
          <div className="relative">
            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 -mt-16">
              {timeline.map((item, index) => {
                const isTop = index % 2 === 0;
                
                return (
                  <div key={index} className="relative">
                    {/* Connection Dot */}
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#2684FC] rounded-full border-2 border-white dark:border-gray-800 shadow-lg z-10 ${isTop ? 'top-16' : 'bottom-16'}`}></div>
                    
                    {/* Card */}
                    <div className={`relative p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${isTop ? 'mb-20' : 'mt-20'}`}>
                      {/* Icon */}
                      <div className="text-lg mb-1 text-center">{item.icon}</div>
                      
                      {/* Content */}
                      {item.type === "study" ? (
                        <>
                          <h3 className="text-xs font-bold text-gray-900 dark:text-white mb-1 text-center leading-tight">
                            {item.degree}
                          </h3>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1 text-center">
                            {item.institution}
                          </p>
                          <span className="block text-center px-2 py-0.5 bg-[#2684FC]/10 text-[#2684FC] dark:bg-[#2684FC]/20 dark:text-[#4A90E2] text-xs font-medium rounded-full">
                            {item.year}
                          </span>
                        </>
                      ) : (
                        <>
                          <h3 className="text-xs font-bold text-gray-900 dark:text-white mb-1 text-center leading-tight">
                            {item.title}
                          </h3>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1 text-center">
                            {item.description}
                          </p>
                          <span className="block text-center px-2 py-0.5 bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400 text-xs font-medium rounded-full">
                            {item.date}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden space-y-4">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  {/* Timeline Dot */}
                  <div className="relative">
                    <div className="w-3 h-3 bg-[#2684FC] rounded-full border-2 border-white dark:border-gray-800 shadow-sm"></div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
                    <div className="flex items-start space-x-2">
                      {/* Icon */}
                      <div className="text-base flex-shrink-0">{item.icon}</div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        {item.type === "study" ? (
                          <>
                            <h3 className="text-xs font-bold text-gray-900 dark:text-white mb-1 leading-tight">
                              {item.degree}
                            </h3>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                              {item.institution}
                            </p>
                            <span className="inline-block px-2 py-0.5 bg-[#2684FC]/10 text-[#2684FC] dark:bg-[#2684FC]/20 dark:text-[#4A90E2] text-xs font-medium rounded-full">
                              {item.year}
                            </span>
                          </>
                        ) : (
                          <>
                            <h3 className="text-xs font-bold text-gray-900 dark:text-white mb-1 leading-tight">
                              {item.title}
                            </h3>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                              {item.description}
                            </p>
                            <span className="inline-block px-2 py-0.5 bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400 text-xs font-medium rounded-full">
                              {item.date}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}