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

        {/* Vertical Alternating Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#2684FC] to-[#4A90E2]"></div>

            {/* Timeline Items */}
            <div className="space-y-6 sm:space-y-8">
              {timeline.map((item, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <div key={index} className="relative flex items-center">
                    {/* Left Side Content */}
                    <div className={`w-1/2 ${isLeft ? 'pr-8 text-right' : 'pr-0'}`}>
                      {isLeft && (
                        <div className="inline-block">
                          <div className="flex items-center justify-end gap-2 mb-1">
                            <span className="text-base sm:text-lg">{item.icon}</span>
                            <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                              {item.type === "study" ? item.degree : item.title}
                            </h3>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                            {item.type === "study" ? item.institution : item.description}
                          </p>
                          <p className="text-xs sm:text-sm font-medium text-[#2684FC] dark:text-[#4A90E2] mt-1">
                            {item.type === "study" ? item.year : item.date}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Center Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#2684FC] rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>

                    {/* Right Side Content */}
                    <div className={`w-1/2 ${!isLeft ? 'pl-8 text-left' : 'pl-0'}`}>
                      {!isLeft && (
                        <div className="inline-block">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-base sm:text-lg">{item.icon}</span>
                            <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                              {item.type === "study" ? item.degree : item.title}
                            </h3>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                            {item.type === "study" ? item.institution : item.description}
                          </p>
                          <p className="text-xs sm:text-sm font-medium text-[#2684FC] dark:text-[#4A90E2] mt-1">
                            {item.type === "study" ? item.year : item.date}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}