'use client';

export default function SimpleLoading() {
  const letters = ["E", "X", "I", "B", "Y"];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="flex space-x-2">
        {letters.map((letter, i) => (
          <span
            key={i}
            className="text-1xl font-bold text-gray-500 dark:text-gray-400 animate-fade"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            {letter}
          </span>
        ))}
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes fade {
          0%, 60%, 100% {
            opacity: 0.3;
          }
          30% {
            opacity: 1;
          }
        }
        .animate-fade {
          animation: fade 1.5s infinite;
        }
      `}</style>
    </div>
  );
}
