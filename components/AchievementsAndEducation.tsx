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

        {/* Horizontal Scrollable Timeline */}
        <div className="relative">
          {/* Scrollable Container */}
          <div className="overflow-x-auto pb-4">
            <div className="relative min-w-max px-4">
              {/* Road Path */}
              <div className="relative h-32 mb-8">
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox={`0 0 ${timeline.length * 300} 120`}
                  preserveAspectRatio="none"
                  style={{ minWidth: `${timeline.length * 300}px` }}
                >
                  {/* Single Color Road Path */}
                  <path
                    d={`M50,60 ${timeline.map((_, index) => {
                      const x = 50 + index * 300;
                      const y = 60 + (index % 2 === 0 ? 0 : Math.sin(index) * 20);
                      return `L${x},${y}`;
                    }).join(' ')}`}
                    stroke="#2684FC"
                    strokeWidth="4"
                    fill="none"
                    className="drop-shadow-sm"
                  />
                  
                  {/* Road Dots */}
                  {timeline.map((_, index) => {
                    const x = 50 + index * 300;
                    const y = 60 + (index % 2 === 0 ? 0 : Math.sin(index) * 20);
                    return (
                      <circle
                        key={index}
                        cx={x}
                        cy={y}
                        r="8"
                        fill="#2684FC"
                        stroke="white"
                        strokeWidth="3"
                        className="drop-shadow-sm"
                      />
                    );
                  })}
                </svg>
              </div>

              {/* Timeline Items */}
              <div className="flex gap-8" style={{ minWidth: `${timeline.length * 300}px` }}>
                {timeline.map((item, index) => {
                  const isTop = index % 2 === 0;
                  
                  return (
                    <div key={index} className="relative flex-shrink-0 w-64">
                      {/* Card */}
                      <div className={`relative p-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${isTop ? '-mt-32' : 'mt-8'}`}>
                        {/* Icon */}
                        <div className="text-2xl mb-3 text-center">{item.icon}</div>
                        
                        {/* Content */}
                        {item.type === "study" ? (
                          <>
                            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2 text-center leading-tight">
                              {item.degree}
                            </h3>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 text-center">
                              {item.institution}
                            </p>
                            <div className="text-center">
                              <span className="inline-block px-3 py-1 bg-[#2684FC]/10 text-[#2684FC] dark:bg-[#2684FC]/20 dark:text-[#4A90E2] text-xs font-medium rounded-full">
                                {item.year}
                              </span>
                            </div>
                          </>
                        ) : (
                          <>
                            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2 text-center leading-tight">
                              {item.title}
                            </h3>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 text-center">
                              {item.description}
                            </p>
                            <div className="text-center">
                              <span className="inline-block px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400 text-xs font-medium rounded-full">
                                {item.date}
                              </span>
                            </div>
                          </>
                        )}

                        {/* Connector Line */}
                        <div className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-[#2684FC] ${isTop ? 'top-full h-8' : 'bottom-full h-8'}`}></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Scroll Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {timeline.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-[#2684FC]/30 hover:bg-[#2684FC] transition-colors cursor-pointer"
                onClick={() => {
                  const container = document.querySelector('.overflow-x-auto');
                  if (container) {
                    container.scrollTo({
                      left: index * 300,
                      behavior: 'smooth'
                    });
                  }
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Mobile Compact View */}
        <div className="md:hidden mt-8">
          <div className="space-y-4">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                {/* Timeline Dot */}
                <div className="relative">
                  <div className="w-4 h-4 bg-[#2684FC] rounded-full border-2 border-white dark:border-gray-800 shadow-sm flex-shrink-0 mt-1"></div>
                  {index < timeline.length - 1 && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-[#2684FC]/30"></div>
                  )}
                </div>

                {/* Content Card */}
                <div className="flex-1 p-3 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
                  <div className="flex items-start space-x-3">
                    {/* Icon */}
                    <div className="text-lg flex-shrink-0">{item.icon}</div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {item.type === "study" ? (
                        <>
                          <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1 leading-tight">
                            {item.degree}
                          </h3>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                            {item.institution}
                          </p>
                          <span className="inline-block px-2 py-1 bg-[#2684FC]/10 text-[#2684FC] dark:bg-[#2684FC]/20 dark:text-[#4A90E2] text-xs font-medium rounded-full">
                            {item.year}
                          </span>
                        </>
                      ) : (
                        <>
                          <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1 leading-tight">
                            {item.title}
                          </h3>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                            {item.description}
                          </p>
                          <span className="inline-block px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400 text-xs font-medium rounded-full">
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
    </section>
  );
}