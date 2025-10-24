"use client";

const timeline = [
  { 
    type: "study", 
    degree: "Bachelor of Computer Science", 
    institution: "BZU Multan", 
    year: "2019 - 2021",
    icon: "🎓"
  },
  { 
    type: "study", 
    degree: "Master of Computer Science", 
    institution: "Govt College University Faisalabad", 
    year: "2021 - 2023",
    icon: "🎓"
  },
  { 
    type: "study", 
    degree: "Frontend Development & Self Learning", 
    institution: "Learning Academy + Personal Projects", 
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
    title: "Developed Portfolio Website", 
    description: "Created a modern portfolio website using React, Next.js, and TailwindCSS.", 
    date: "Jan 2024",
    icon: "🌐"
  },
  { 
    type: "achievement", 
    title: "E-commerce Platform", 
    description: "Built a fully responsive e-commerce platform with payment integration.", 
    date: "Apr 2024",
    icon: "🛒"
  },
  { 
    type: "achievement", 
    title: "Dashboard App", 
    description: "Delivered an admin dashboard app with charts, analytics, and smooth UI interactions.", 
    date: "Jul 2024",
    icon: "📊"
  },
  { 
    type: "achievement", 
    title: "Real-Time Chat App", 
    description: "Implemented a real-time chat application with WebSocket support.", 
    date: "Sep 2024",
    icon: "💬"
  },
];

export default function AchievementsAndEducation() {
  return (
    <section
      id="achievements"
      className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-900 dark:to-blue-900"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            My Achievements &
            <span className="bg-gradient-to-r from-[#2684FC] to-[#4A90E2] bg-clip-text text-transparent ml-3">
              Education
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            A journey of learning, projects, and milestones in my frontend development career.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Center Line - Hidden on mobile */}
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#2684FC] to-[#4A90E2] h-full hidden md:block rounded-full shadow-lg"></div>

          {/* Mobile Line - Left aligned */}
          <div className="absolute left-6 top-0 w-1 bg-gradient-to-b from-[#2684FC] to-[#4A90E2] h-full md:hidden rounded-full shadow-lg"></div>

          {/* Timeline Items */}
          <div className="relative space-y-8 md:space-y-12">
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <div key={index} className="relative">
                  {/* Desktop Layout */}
                  <div className="hidden md:flex items-center justify-center">
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white dark:bg-gray-800 rounded-full border-4 border-[#2684FC] shadow-lg z-10 flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#2684FC] rounded-full"></div>
                    </div>

                    {/* Content Card */}
                    <div
                      className={`w-5/12 ${
                        isLeft ? "mr-auto pr-8" : "ml-auto pl-8"
                      }`}
                    >
                      <div
                        className={`relative p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                          isLeft ? "text-right" : "text-left"
                        }`}
                      >
                        {/* Arrow */}
                        <div
                          className={`absolute top-6 w-0 h-0 border-t-8 border-b-8 border-t-transparent border-b-transparent ${
                            isLeft
                              ? "right-0 translate-x-full border-l-8 border-l-white dark:border-l-gray-800"
                              : "left-0 -translate-x-full border-r-8 border-r-white dark:border-r-gray-800"
                          }`}
                        ></div>

                        {/* Icon */}
                        <div
                          className={`text-3xl mb-3 ${
                            isLeft ? "text-right" : "text-left"
                          }`}
                        >
                          {item.icon}
                        </div>

                        {/* Content */}
                        {item.type === "study" ? (
                          <>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                              {item.degree}
                            </h3>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                              {item.institution}
                            </p>
                            <span className="inline-block px-3 py-1 bg-[#2684FC]/10 text-[#2684FC] dark:bg-[#2684FC]/20 dark:text-[#4A90E2] text-xs font-medium rounded-full">
                              {item.year}
                            </span>
                          </>
                        ) : (
                          <>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                              {item.description}
                            </p>
                            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 text-xs font-medium rounded-full">
                              {item.date}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="md:hidden flex items-start space-x-4">
                    {/* Timeline Dot */}
                    <div className="relative">
                      <div className="w-6 h-6 bg-white dark:bg-gray-800 rounded-full border-4 border-[#2684FC] shadow-lg flex items-center justify-center">
                        <div className="w-2 h-2 bg-[#2684FC] rounded-full"></div>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1">
                      <div className="p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                        {/* Icon */}
                        <div className="text-2xl mb-2">{item.icon}</div>

                        {/* Content */}
                        {item.type === "study" ? (
                          <>
                            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">
                              {item.degree}
                            </h3>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                              {item.institution}
                            </p>
                            <span className="inline-block px-2 py-1 bg-[#2684FC]/10 text-[#2684FC] dark:bg-[#2684FC]/20 dark:text-[#4A90E2] text-xs font-medium rounded-full">
                              {item.year}
                            </span>
                          </>
                        ) : (
                          <>
                            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                              {item.description}
                            </p>
                            <span className="inline-block px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 text-xs font-medium rounded-full">
                              {item.date}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}