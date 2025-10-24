"use client";

const timeline = [
  { type: "study", degree: "Bachelor of Computer Science", institution: "BZU Multan", year: "2019 - 2021" },
  { type: "study", degree: "Master of Computer Science", institution: "Govt College University Faisalabad", year: "2021 - 2023" },
  { type: "study", degree: "Frontend Development & Self Learning", institution: "Learning Academy + Personal Projects", year: "8 months" },
  { type: "study", degree: "Internship", institution: "Metalogix Sahiwal", year: "3 months" },
  { type: "study", degree: "Full-time Job", institution: "Metalogix Sahiwal", year: "Present" },
  { type: "achievement", title: "Developed Portfolio Website", description: "Created a modern portfolio website using React, Next.js, and TailwindCSS.", date: "Jan 2024" },
  { type: "achievement", title: "E-commerce Platform", description: "Built a fully responsive e-commerce platform with payment integration.", date: "Apr 2024" },
  { type: "achievement", title: "Dashboard App", description: "Delivered an admin dashboard app with charts, analytics, and smooth UI interactions.", date: "Jul 2024" },
  { type: "achievement", title: "Real-Time Chat App", description: "Implemented a real-time chat application with WebSocket support.", date: "Sep 2024" },
];

const cardColors = [
  "bg-white/80 dark:bg-gray-800/80",
  "bg-blue-50/80 dark:bg-blue-900/80",
  "bg-green-50/80 dark:bg-green-900/80",
  "bg-yellow-50/80 dark:bg-yellow-900/80",
  "bg-purple-50/80 dark:bg-purple-900/80",
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
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 bg-gray-300 dark:bg-gray-600 h-full"></div>

          {/* Timeline Items */}
          <div className="relative">
            {timeline.slice().reverse().map((item, index) => {
              const isLeft = index % 2 === 0;
              const colorClass = cardColors[index % cardColors.length];

              return (
                <div key={index} className="relative w-full flex justify-center my-10">
                  {/* Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full border-2 border-white dark:border-gray-900 shadow-md z-10"></div>

                  {/* Card */}
                  <div
                    className={`absolute top-0 w-full sm:w-[300px] max-w-xs p-5 ${colorClass} backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105`}
                    style={{ left: isLeft ? "calc(50% - 340px)" : "50%" }}
                  >
                    {item.type === "study" ? (
                      <>
                        <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                          {item.degree}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mt-0.5">
                          {item.institution}
                        </p>
                        <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-1 block">
                          {item.year}
                        </span>
                      </>
                    ) : (
                      <>
                        <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mt-0.5">
                          {item.description}
                        </p>
                        <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-1 block">
                          {item.date}
                        </span>
                      </>
                    )}

                    {/* Connector Line */}
                    <div
                      className="absolute top-2.5 h-[2px] bg-gray-300 dark:bg-gray-600"
                      style={{
                        width: "20px",
                        left: isLeft ? "100%" : "-20px",
                      }}
                    />
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
