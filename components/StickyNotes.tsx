import React from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  color: string;
  rotate: string;
  hoverRotate: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Personal portfolio built with React, Tailwind, and Next.js",
    color: "bg-orange-200",
    rotate: "-rotate-3",
    hoverRotate: "hover:rotate-0",
    link: "https://www.linkedin.com/in/shvmroz",
  },
  {
    id: 2,
    title: "E-commerce Store",
    description: "React + Redux store with Stripe payment integration",
    color: "bg-green-200",
    rotate: "rotate-6",
    hoverRotate: "hover:rotate-0",
    link: "https://www.linkedin.com/in/shvmroz",
  },
  {
    id: 3,
    title: "Task Manager App",
    description: "Full-stack MERN task manager with JWT authentication",
    color: "bg-rose-200",
    rotate: "-rotate-3",
    hoverRotate: "hover:rotate-0",
    link: "https://www.linkedin.com/in/shvmroz",
  },
  {
    id: 4,
    title: "Blog Platform",
    description: "Next.js blog with Markdown support and CMS integration",
    color: "bg-teal-200",
    rotate: "rotate-6",
    hoverRotate: "hover:rotate-0",
    link: "https://www.linkedin.com/in/shvmroz",
  },
  {
    id: 5,
    title: "Chat App",
    description: "Real-time chat app with Socket.io and React",
    color: "bg-indigo-200",
    rotate: "-rotate-6",
    hoverRotate: "hover:rotate-0",
    link: "https://www.linkedin.com/in/shvmroz",
  },
  {
    id: 6,
    title: "Weather Dashboard",
    description: "Weather forecast app using React and OpenWeather API",
    color: "bg-violet-200",
    rotate: "rotate-3",
    hoverRotate: "hover:rotate-0",
    link: "https://www.linkedin.com/in/shvmroz",
  },
  {
    id: 7,
    title: "Movie App",
    description: "Movie search and rating app using TMDB API",
    color: "bg-amber-200",
    rotate: "-rotate-6",
    hoverRotate: "hover:rotate-0",
    link: "https://www.linkedin.com/in/shvmroz",
  },
  {
    id: 8,
    title: "Fitness Tracker",
    description: "Track workouts, calories, and goals with React & Node.js",
    color: "bg-blue-200",
    rotate: "rotate-6",
    hoverRotate: "hover:rotate-0",
    link: "https://www.linkedin.com/in/shvmroz",
  },
  {
    id: 9,
    title: "Recipe Finder",
    description: "Search and save recipes using a public recipe API",
    color: "bg-lime-200",
    rotate: "-rotate-3",
    hoverRotate: "hover:rotate-0",
    link: "https://www.linkedin.com/in/shvmroz",
  },
  {
    id: 10,
    title: "Expense Tracker",
    description: "Track your expenses and budget with React & localStorage",
    color: "bg-orange-200",
    rotate: "rotate-6",
    hoverRotate: "hover:rotate-0",
    link: "https://www.linkedin.com/in/shvmroz",
  },
];

const FeatureNotes: React.FC = () => {
  const isGithub = (link: string) => link.includes("github.com");

  return (
    <div
      id="projects"
      className="min-h-screen bg-gray-100 flex flex-col items-center justify-center pb-24 transition-colors duration-300"
    >
      {/* Section heading */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          My
          <span className="bg-gradient-to-r from-[#2684FC] to-[#4A90E2] bg-clip-text text-transparent ms-2">
            Projects
          </span>
        </h2>
        <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Explore some of my recent frontend and full-stack projects. Click on a
          card to view the live project or GitHub repository.
        </p>
      </div>

      {/* Projects grid */}
      <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-6 sm:gap-y-8 md:gap-y-10 max-w-7xl px-4 sm:px-6">
        {projects.map((project, index) => {
          const isLastRow = index >= 6;

          // 🎲 Randomized layout only for small screens
          const randomSize =
            index % 5 === 0
              ? "w-24 h-24"
              : index % 5 === 1
              ? "w-28 h-28"
              : index % 5 === 2
              ? "w-32 h-32"
              : index % 5 === 3
              ? "w-26 h-26"
              : "w-30 h-30";

          // 📱 Apply random size only for small screens, normal for md+
          const responsiveSize = `
          ${randomSize} 
          sm:w-36 sm:h-36 
          md:w-44 md:h-44
        `;

          return (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`
              relative ${responsiveSize} 
              p-2 sm:p-3 md:p-4 rounded-md
              shadow-[0_4px_8px_rgba(0,0,0,0.15),0_8px_16px_rgba(0,0,0,0.1)]
              text-gray-800 font-medium
              transition-all duration-300 ease-out transform
              ${project.color} ${project.rotate} ${
                project.hoverRotate
              }
              hover:-translate-y-2 hover:scale-105 hover:z-10
              hover:brightness-110
              cursor-pointer
              ${isLastRow ? "sm:max-w-xs" : ""}
            `}
              style={{ transformOrigin: "center" }}
            >
              {/* Pin */}
              <div className="absolute top-1 sm:top-2 left-1/2 -translate-x-1/2 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-b from-red-400 to-red-700 border border-red-800 shadow-[0_2px_4px_rgba(0,0,0,0.4),inset_0_-1px_2px_rgba(255,255,255,0.3)]"></div>

              {/* Top-left row: Project number + badge */}
              <div
                className={`absolute top-4 sm:top-6 left-3 sm:left-4 flex items-center gap-2
                text-[10px] sm:text-sm md:text-base font-bold select-none
                ${
                  project.color.includes("orange")
                    ? "text-orange-950"
                    : project.color.includes("green")
                    ? "text-green-950"
                    : project.color.includes("rose")
                    ? "text-rose-950"
                    : project.color.includes("teal")
                    ? "text-teal-950"
                    : project.color.includes("indigo")
                    ? "text-indigo-950"
                    : project.color.includes("violet")
                    ? "text-violet-950"
                    : project.color.includes("amber")
                    ? "text-amber-950"
                    : project.color.includes("blue")
                    ? "text-blue-950"
                    : project.color.includes("lime")
                    ? "text-lime-950"
                    : "text-gray-950"
                }`}
              >
                <span>#{project.id}</span>

          
              </div>

              {/* Paper shadow */}
              <div className="absolute bottom-0 right-0 w-full h-full rounded-md shadow-[8px_8px_18px_rgba(0,0,0,0.12)] opacity-60 pointer-events-none"></div>

              {/* Content */}
              <div className="mt-6 sm:mt-8 md:mt-10 text-center relative z-10 px-0.5 sm:px-1">
                <h3 className="text-[9px] sm:text-xs md:text-sm font-semibold text-gray-800 mb-0.5 sm:mb-1">
                  {project.title}
                </h3>
                <p className="text-[7px] sm:text-[10px] md:text-xs leading-tight sm:leading-snug text-gray-700">
                  {project.description}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureNotes;
