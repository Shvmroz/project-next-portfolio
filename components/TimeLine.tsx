"use client";

import React from "react";
import { Icon } from "@iconify/react";

type TimelineItem = {
  type: "study" | "work" | string;
  degree?: string;
  institution?: string;
  year?: string;
  title?: string;
  description?: string;
  date?: string;
};

const timeline: TimelineItem[] = [
  {
    type: "study",
    degree: "Full-time Job",
    institution: "Metalogix Software House",
    year: "24-2025",
  },
  {
    type: "study",
    degree: "Internship",
    institution: "Metalogix Software House",
    year: "3 months",
  },
  {
    type: "study",
    degree: "Frontend Development",
    institution: "Self Learning || Dynamic Logix",
    year: "8 months",
  },
  {
    type: "study",
    degree: "MSc Computer Science",
    institution: "GCU Faisalabad",
    year: "2021-23",
  },
  {
    type: "study",
    degree: "BSc Computer Science",
    institution: "BZU Multan",
    year: "2019-21",
  },
];

export default function TimeLine() {
  return (
    <section
      id="journey"
      className="relative py-12 sm:py-16 bg-blue-50 overflow-hidden"
    >
      {/* Floating Background Icons (only on sides) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left side icons */}
        <Icon
          icon="logos:react"
          className="absolute text-sky-400/10 text-[40px] top-2 left-[5%]
        md:text-[50px] md:left-10"
        />
        <Icon
          icon="vscode-icons:file-type-js-official"
          className="absolute text-yellow-400/10 text-[30px] top-[40%] left-[18%] animate-float
        md:text-[50px] md:left-[12%]"
        />
        <Icon
          icon="devicon:materialui"
          className="absolute text-blue-400/10 text-[40px] bottom-[20%] left-[14%] animate-float-reverse
        md:text-[100px] md:left-10"
        />

        {/* Right side icons */}
        <Icon
          icon="devicon:vscode"
          className="absolute text-indigo-400/10 text-[30px] top-10 right-[2%] animate-float-slow
        md:text-[100px] md:right-10"
        />
        <Icon
          icon="logos:nextjs-icon"
          className="absolute text-gray-400/10 text-[35px] top-1/2 right-[16%] animate-float
        md:text-[60px] md:right-[12%]"
        />
        <Icon
          icon="logos:tailwindcss-icon"
          className="absolute text-sky-300/10 text-[45px] bottom-12 right-[14%] animate-float-reverse
        md:text-[100px] md:right-10"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Growth &
            <span className="bg-gradient-to-r from-[#2684FC] to-[#4A90E2] bg-clip-text text-transparent ml-3">
              Learning Journey
            </span>
          </h2>
          <p className="text-sm text-gray-700 max-w-2xl mx-auto">
            A journey of learning, projects, and milestones in my development
            career.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Center Line */}
            <div className="absolute rounded-xl left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gray-200 to-blue-200"></div>

            {/* Timeline Items */}
            <div className="space-y-6 sm:space-y-8">
              {timeline.map((item, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <div key={index} className="relative flex items-center">
                    {/* Left Side */}
                    <div
                      className={`w-1/2 ${isLeft ? "pr-8 text-right" : "pr-0"}`}
                    >
                      {isLeft && (
                        <div className="inline-block border rounded-xl p-2 px-4 shadow-md text-start bg-gradient-to-l from-gray-50/60 to-yellow-50/30 backdrop-blur-sm">
                          <h3 className="text-sm sm:text-base font-bold text-gray-900">
                            {item.degree}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-600">
                            {item.institution}
                          </p>
                          <p className="text-xs font-medium text-gray-400 mt-1">
                            {item.year}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                    {/* Right Side */}
                    <div
                      className={`w-1/2 ${!isLeft ? "pl-8 text-left" : "pl-0"}`}
                    >
                      {!isLeft && (
                        <div className="inline-block rounded-xl p-2 px-4 shadow-md bg-gradient-to-r from-gray-50/60 to-blue-50/30 backdrop-blur-sm">
                          <h3 className="text-sm sm:text-base font-bold text-gray-900">
                            {item.degree}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-600">
                            {item.institution}
                          </p>
                          <p className="text-xs font-medium text-gray-400 mt-1">
                            {item.year}
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

      {/* bounce Animations */}
      <style jsx global>{`
        @keyframes float-bounce {
          0% {
            transform: translateY(0) scale(1) rotate(0deg);
          }
          25% {
            transform: translateY(-12px) scale(1.03) rotate(2deg);
          }
          50% {
            transform: translateY(-20px) scale(0.98) rotate(-2deg);
          }
          75% {
            transform: translateY(-8px) scale(1.02) rotate(1deg);
          }
          100% {
            transform: translateY(0) scale(1) rotate(0deg);
          }
        }

        @keyframes float-slow-bounce {
          0% {
            transform: translateY(0) scale(1) rotate(0deg);
          }
          50% {
            transform: translateY(-18px) scale(1.05) rotate(-3deg);
          }
          100% {
            transform: translateY(0) scale(1) rotate(0deg);
          }
        }

        @keyframes float-reverse-bounce {
          0% {
            transform: translateY(0) scale(1) rotate(0deg);
          }
          50% {
            transform: translateY(15px) scale(1.04) rotate(3deg);
          }
          100% {
            transform: translateY(0) scale(1) rotate(0deg);
          }
        }

        .animate-float {
          animation: float-bounce 6s cubic-bezier(0.68, -0.55, 0.27, 1.55)
            infinite;
        }

        .animate-float-slow {
          animation: float-slow-bounce 8s cubic-bezier(0.68, -0.55, 0.27, 1.55)
            infinite;
        }

        .animate-float-reverse {
          animation: float-reverse-bounce 7s
            cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
        }
      `}</style>
    </section>
  );
}
