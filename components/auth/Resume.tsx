"use client";
import { User } from "lucide-react";

export default function PDFResume() {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "Exiby Tech",
      duration: "2022 - Present",
      description: "Building interactive web apps using React & Next.js",
    },
    {
      role: "UI/UX Designer",
      company: "Creative Labs",
      duration: "2020 - 2022",
      description: "Designed user-friendly interfaces for web and mobile apps",
    },
  ];

  const education = [
    {
      degree: "BSc Computer Science",
      institution: "ABC University",
      duration: "2016 - 2020",
    },
  ];

  const skills = ["React", "Next.js", "Tailwind CSS", "TypeScript", "Figma"];

  return (
    <div className="mt-28 mb-20 min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center p-6 overflow-hidden">
      <div className="flex flex-row w-full max-w-[1200px] h-[650px] relative shadow-md border border-gray-300 dark:border-gray-700 rounded-lg">
        {/* Left Sidebar */}
        <div className="w-[25%] bg-blue-50 dark:bg-gray-800 p-6 flex flex-col items-center rounded-lg">
          <User className="w-16 h-16 text-blue-600 dark:text-blue-400 mb-4" />
          <h1 className="text-xl font-bold text-gray-800 dark:text-white mb-1">Shamroz Khan</h1>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 text-center">Frontend Developer</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            Passionate about building responsive & beautiful web applications.
          </p>

          <div className="mt-6 w-full">
            <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Skills</h2>
            <div className="flex flex-wrap gap-1">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Main Section */}
        <div className="w-[75%] p-6 flex flex-col justify-start space-y-6 overflow-hidden">
          {/* Experience */}
          <div>
            <h2 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">Experience</h2>
            <div className="space-y-2 text-xs">
              {experiences.map((exp, i) => (
                <div key={i}>
                  <p className="font-semibold text-gray-700 dark:text-gray-200">{exp.role}</p>
                  <p className="text-gray-500 dark:text-gray-400">{exp.company} • {exp.duration}</p>
                  <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">Education</h2>
            <div className="space-y-2 text-xs">
              {education.map((edu, i) => (
                <div key={i}>
                  <p className="font-semibold text-gray-700 dark:text-gray-200">{edu.degree}</p>
                  <p className="text-gray-500 dark:text-gray-400">{edu.institution} • {edu.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
