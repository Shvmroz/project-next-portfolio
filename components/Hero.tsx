"use client";

import {
  Calendar,
  Users,
  TrendingUp,
  Award,
  Building,
  Zap,
} from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

// Unified data for projects + skills
const portfolioHistory = [
  // Projects
  {
    title: "Portfolio Website",
    attendees: "Next.js, React, Tailwind",
    date: "2025",
    type: "Project",
    success: "Live",
    icon: Zap,
  },
  {
    title: "Event Management No-Code AI",
    attendees: "No-Code AI, Airtable",
    date: "2024",
    type: "Project",
    success: "Completed",
    icon: Calendar,
  },
  {
    title: "CRM System for Farmers",
    attendees: "React, Node.js, REST API",
    date: "2024",
    type: "Project",
    success: "Ongoing",
    icon: Users,
  },

  // Skills
  {
    title: "React.js",
    attendees: "Frontend Library",
    date: "Expert",
    type: "Skill",
    success: "Used in 5+ projects",
    icon: Zap,
  },
  {
    title: "Next.js",
    attendees: "React Framework",
    date: "Advanced",
    type: "Skill",
    success: "Portfolio & Web Apps",
    icon: Calendar,
  },
  {
    title: "GitHub",
    attendees: "Version Control",
    date: "Advanced",
    type: "Skill",
    success: "Daily Use",
    icon: TrendingUp,
  },
  {
    title: "No-Code AI",
    attendees: "AI Tools",
    date: "Intermediate",
    type: "Skill",
    success: "Automation Projects",
    icon: Award,
  },
  {
    title: "Self-Learning",
    attendees: "Continuous Growth",
    date: "Ongoing",
    type: "Skill",
    success: "Personal Projects",
    icon: Users,
  },
  {
    title: "Material UI",
    attendees: "UI Component Library",
    date: "Advanced",
    type: "Skill",
    success: "Multiple Projects",
    icon: Building,
  },
  {
    title: "Tailwind CSS",
    attendees: "Utility-First CSS",
    date: "Advanced",
    type: "Skill",
    success: "Modern Styling",
    icon: Zap,
  },
  {
    title: "Bootstrap",
    attendees: "CSS Framework",
    date: "Intermediate",
    type: "Skill",
    success: "Responsive Layouts",
    icon: Calendar,
  },
];

function EventCard({ event, index }: { event: (typeof portfolioHistory)[0]; index: number; }) {
  const IconComponent = event.icon;

  const iconColors = [
    "text-slate-500",
    "text-sky-500",
    "text-teal-500",
    "text-indigo-600",
    "text-blue-500",
    "text-sky-800",
  ];
  const iconColor = iconColors[index % iconColors.length] + " dark:text-gray-400";

  return (
    <div  className="relative rounded-xl border border-gray-200 dark:border-blue-950 shadow-md overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-25 to-sky-100 dark:from-gray-700/20 dark:to-gray-600/20 opacity-80" />

      <div className="relative flex items-start gap-4 p-4">
        <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white/80 dark:bg-blue-900/50 flex items-center justify-center shadow-md">
          <IconComponent className={`w-8 h-8 md:w-10 md:h-10 ${iconColor}`} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white leading-tight truncate">
              {event.title}
            </h3>
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-white/70 dark:bg-gray-800/50 text-gray-700 dark:text-gray-200 shadow-sm">
              {event.type}
            </span>
          </div>

          <div className="gap-x-4 gap-y-1 text-xs sm:text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500 dark:text-gray-300 text-xs sm:text-sm">
                {event.type === "Project" ? "Tech Stack" : "Description"} : {event.attendees}
              </span>
              <span className="font-medium text-gray-800 dark:text-gray-100 text-xs sm:text-sm">
                {event.date}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500 dark:text-gray-300 text-xs sm:text-sm">
                {event.type === "Project" ? "Status" : "Level / Usage"}
              </span>
              <span className="font-medium text-green-600 dark:text-green-400 text-xs sm:text-sm">
                {event.success}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-100 overflow-hidden pt-24 sm:pt-32 pb-16 md:pb-0">
      <div className="w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-full">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left space-y-4 lg:space-y-8 px-6 lg:px-12  sm:pt-6 md:pt-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Crafting Seamless
              <span className="block bg-gradient-to-r from-[#2684FC] to-[#4A90E2] bg-clip-text text-transparent">
                Web Experiences
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Turning ideas into beautiful, responsive, and high-performance web
              applications using modern frontend technologies.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
              <div className="relative group text-center lg:text-left p-2 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl lg:rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute -top-2 -right-2 lg:-top-3 lg:-right-3 w-4 h-4 lg:w-6 lg:h-6 bg-gradient-to-r from-[#2684FC]/20 to-[#4A90E2]/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-1 -left-1 lg:-bottom-2 lg:-left-2 w-3 h-3 lg:w-4 lg:h-4 bg-gradient-to-r from-[#2684FC]/30 to-[#4A90E2]/30 rounded-full animate-bounce delay-300"></div>

                <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-[#2684FC] mb-1 lg:mb-2">
                  <AnimatedCounter end={20} suffix="+" duration={3000} />
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-700 dark:text-gray-300 font-medium">
                  Projects Completed
                </div>
              </div>
              <div className="relative group text-center lg:text-left p-2 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl lg:rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute -bottom-1 -right-1 lg:-bottom-2 lg:-right-2 w-3 h-3 lg:w-4 lg:h-4 bg-gradient-to-r from-[#2684FC]/30 to-[#4A90E2]/30 rounded-full animate-bounce delay-300"></div>

                <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-[#2684FC] mb-1 lg:mb-2">
                  <AnimatedCounter end={50} suffix="+" duration={3000} />
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-700 dark:text-gray-300 font-medium">
                  Happy Clients
                </div>
              </div>
              <div className="relative group text-center lg:text-left p-2 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl lg:rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-[#2684FC] mb-1 lg:mb-2">
                  <AnimatedCounter end={2} suffix="+" duration={1000} />
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-700 dark:text-gray-300 font-medium">
                  Years of Experience
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Portfolio Scroll */}
          <div className="relative mt-8 lg:mt-0 lg:h-screen lg:w-full lg:rounded-l-3xl">
            <div
              className="relative h-[350px] sm:h-[450px] lg:h-[calc(100vh-120px)]"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "100% 100%",
                maskImage:
                  "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
                maskRepeat: "no-repeat",
                maskSize: "100% 100%",
              }}
            >
              <div className="overflow-hidden h-full px-4 lg:px-6">
                <div className="animate-scroll-vertical space-y-4 px-2 sm:px-4">
                  {/* Repeat portfolioHistory for continuous scroll */}
                  {portfolioHistory.map((item, index) => (
                    <EventCard key={index} event={item} index={index} />
                  ))}
                  {portfolioHistory.map((item, index) => (
                    <EventCard key={`second-${index}`} event={item} index={index} />
                  ))}
                  {portfolioHistory.map((item, index) => (
                    <EventCard key={`third-${index}`} event={item} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-vertical {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-33.33%);
          }
        }
        .animate-scroll-vertical {
          animation: scroll-vertical 45s linear infinite;
        }
      `}</style>
    </section>
  );
}
