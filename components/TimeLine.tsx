"use client";

import React from "react";

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
    <section id="journey" className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
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

        {/* Vertical Alternating Timeline */}
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
                    {/* Left Side Content */}
                    <div
                      className={`w-1/2 ${isLeft ? "pr-8 text-right" : "pr-0"}`}
                    >
                      {isLeft && (
                        <div className="inline-block border rounded-xl p-2 px-4 shadow-md text-start  bg-gradient-to-l from-gray-50 to-yellow-50/50">
                          <h3 className="text-sm sm:text-base font-bold text-gray-900">
                            {item.type === "study" ? item.degree : item.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-600">
                            {item.type === "study"
                              ? item.institution
                              : item.description}
                          </p>
                          <p className="text-xs font-medium text-gray-400 mt-1">
                            {item.type === "study" ? item.year : item.date}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Center Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                    {/* Right Side Content */}
                    <div
                      className={`w-1/2 ${!isLeft ? "pl-8 text-left" : "pl-0"}`}
                    >
                      {!isLeft && (
                        <div className="inline-block rounded-xl p-2 px-4 shadow-md bg-gradient-to-r from-gray-50 to-blue-50/50">
                          <h3 className="text-sm sm:text-base font-bold text-gray-900">
                            {item.type === "study" ? item.degree : item.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-600">
                            {item.type === "study"
                              ? item.institution
                              : item.description}
                          </p>
                          <p className="text-xs font-medium text-gray-400 mt-1">
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
