"use client";

import { QuoteIcon, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  profile: string;
  stars: number;
  description: string;
  attendedEvent: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alice Morgan",
    profile: "https://randomuser.me/api/portraits/women/68.jpg",
    stars: 5,
    description:
      "Delivered exactly what we envisioned! The frontend design and functionality were flawless.",
    attendedEvent: "E-Commerce Website Project",
  },
  {
    id: 2,
    name: "Brian Lee",
    profile: "https://randomuser.me/api/portraits/men/32.jpg",
    stars: 5,
    description:
      "Professional and timely. The React application exceeded our expectations.",
    attendedEvent: "Social Media Platform Development",
  },
  {
    id: 3,
    name: "Catherine Smith",
    profile: "https://randomuser.me/api/portraits/women/45.jpg",
    stars: 4,
    description:
      "Great communication throughout the project. The final portfolio website looks amazing.",
    attendedEvent: "Portfolio Website Creation",
  },
  {
    id: 4,
    name: "David Johnson",
    profile: "https://randomuser.me/api/portraits/men/41.jpg",
    stars: 5,
    description:
      "The booking system is seamless, intuitive, and bug-free. Excellent work!",
    attendedEvent: "Online Booking System",
  },
  {
    id: 5,
    name: "Emma Wilson",
    profile: "https://randomuser.me/api/portraits/women/50.jpg",
    stars: 5,
    description:
      "Delivered a dashboard app with all requested features and smooth UI interactions.",
    attendedEvent: "Dashboard App Development",
  },
  {
    id: 6,
    name: "Frank Martinez",
    profile: "https://randomuser.me/api/portraits/men/55.jpg",
    stars: 4,
    description:
      "The chat application works perfectly. Very satisfied with the implementation.",
    attendedEvent: "Real-Time Chat App",
  },
  {
    id: 7,
    name: "Grace Taylor",
    profile: "https://randomuser.me/api/portraits/women/33.jpg",
    stars: 5,
    description:
      "Analytics platform provides exactly the insights we needed. Great job!",
    attendedEvent: "Analytics Platform Project",
  },
  {
    id: 8,
    name: "Henry Brown",
    profile: "https://randomuser.me/api/portraits/men/60.jpg",
    stars: 5,
    description:
      "Our blog platform is fast, responsive, and easy to manage thanks to the developer's effort.",
    attendedEvent: "Blog Platform Development",
  },
  {
    id: 9,
    name: "Isabella Davis",
    profile: "https://randomuser.me/api/portraits/women/22.jpg",
    stars: 4,
    description:
      "Highly professional and delivered a project exactly on time. Very happy!",
    attendedEvent: "E-Commerce Website Project",
  },
  {
    id: 10,
    name: "Jack Wilson",
    profile: "https://randomuser.me/api/portraits/men/18.jpg",
    stars: 5,
    description:
      "Front-end is modern, responsive, and works flawlessly across devices.",
    attendedEvent: "Portfolio Website Creation",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div
      className="
        relative rounded-xl p-5 flex flex-col shadow-lg
        bg-gray-50 dark:bg-gray-800
        border border-gray-200 dark:border-gray-700
        backdrop-blur-md
      "
      style={{ width: "100%", height: "100%" }}
    >
      <div className="absolute top-1 right-1 text-gray-200 dark:text-gray-700">
        <QuoteIcon className="w-14 h-14" />
      </div>

      {/* Top: Profile & Stars */}
      <div className="flex items-center space-x-3 mb-4">
        {testimonial.profile ? (
          <img
            src={testimonial.profile}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gray-400 dark:bg-gray-700 flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
        )}
        <div className="flex flex-col">
          <h3 className="font-bold text-gray-900 dark:text-gray-50 text-md">
            {testimonial.name}
          </h3>
          <div className="flex text-yellow-400 text-xl">
            {Array.from({ length: testimonial.stars }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
        </div>
      </div>

      {/* Middle: Fixed height description */}
      <div
        className="text-sm text-gray-700 dark:text-gray-400"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {testimonial.description}
      </div>

      {/* Bottom: Always pinned */}
      {testimonial.attendedEvent && (
        <div className="flex items-center gap-1.5 text-gray-400 dark:text-gray-400 text-xs mt-auto pt-3 border-t border-gray-200 dark:border-gray-700">
          <span className="w-2 h-2 rounded-full bg-blue-400 dark:bg-blue-800 inline-block" />
          <span className="truncate">{testimonial.attendedEvent}</span>
        </div>
      )}
    </div>
  );
}

const rowSpeeds: number[] = [1.2, 1.4, 1.6, 1.8, 2.0, 2.2]; // Reduced speeds for smoother movement

export default function TestimonialScroller() {
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const requestRef = useRef<number>();
  const containerRef = useRef(null);
  const animationRef = useRef<{
    lastScrollY: number;
    translateX: number[];
    prevSmooth: number[];
  }>({
    lastScrollY: 0,
    translateX: [],
    prevSmooth: [], // 👈 added here
  });

  const [rows, setRows] = useState<Testimonial[][]>([]);
  const [itemDimensions, setItemDimensions] = useState({
    width: 320,
    height: 200,
  });

  const calculateItemsPerRow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1200) return 5;
    if (screenWidth >= 768) return 3;
    return 2;
  };

  useEffect(() => {
    const updateLayout = () => {
      const screenWidth = window.innerWidth;
      const rowCount = screenWidth < 768 ? 6 : 3;
      const newRows: Testimonial[][] = [];
      for (let i = 0; i < rowCount; i++) {
        const rowTestimonials: Testimonial[] = [];
        for (let j = i; j < testimonials.length; j += rowCount) {
          rowTestimonials.push(testimonials[j]);
        }
        const gap = 16;
        const cardWidth = itemDimensions.width || 300;
        const singleRowWidth = rowTestimonials.length * (cardWidth + gap);
        const repeatCount = Math.ceil((screenWidth * 2) / singleRowWidth) + 1;
        const duplicatedRow: Testimonial[] = [];
        for (let k = 0; k < repeatCount; k++) {
          duplicatedRow.push(...rowTestimonials);
        }
        newRows.push(duplicatedRow);
      }
      const initialTranslates: number[] = [];
      for (let i = 0; i < rowCount; i++) {
        const startOffset = i * 250;
        initialTranslates.push(startOffset);
      }
      animationRef.current.translateX = [...initialTranslates];
      animationRef.current.prevSmooth = new Array(rowCount).fill(0);
      setRows(newRows);
    };
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, [itemDimensions.width]);

  useEffect(() => {
    const updateDimensions = () => {
      const screenWidth = window.innerWidth;
      let width, height;
      if (screenWidth >= 1200) {
        width = 340;
        height = 220;
      } else if (screenWidth >= 768) {
        width = 300;
        height = 200;
      } else {
        width = 300;
        height = 200;
      }
      setItemDimensions({ width, height });
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    let isAnimating = true;
    let lastTime = 0;

    const updateContent = (currentTime: number) => {
      if (!isAnimating) return;

      // throttle to ~60fps
      if (currentTime - lastTime < 12) {
        // Reduced from 16ms to 12ms for smoother 60fps
        requestRef.current = requestAnimationFrame(updateContent);
        return;
      }
      lastTime = currentTime;

      const scrollY = window.scrollY;
      const rawDelta = scrollY - animationRef.current.lastScrollY;
      const baseDelta = rawDelta * 0.08; // Reduced from 0.15 to 0.08 for smoother movement
      animationRef.current.lastScrollY += baseDelta;

      // ensure arrays aligned
      if (animationRef.current.translateX.length !== rows.length) {
        animationRef.current.translateX = new Array(rows.length).fill(0);
      }
      if (
        !animationRef.current.prevSmooth ||
        animationRef.current.prevSmooth.length !== rows.length
      ) {
        animationRef.current.prevSmooth = new Array(rows.length).fill(0);
      }

      rowRefs.current.forEach((row, index) => {
        if (!row || index >= rows.length) return;

        const speed = rowSpeeds[index % rowSpeeds.length] || 1;
        let currentTranslate = animationRef.current.translateX[index] || 0;

        // target delta for this row
        const targetDelta = baseDelta * speed * 0.6; // Increased from 0.4 to 0.6 for better responsiveness

        // lerp smoothing
        const prev = animationRef.current.prevSmooth[index] || 0;
        const smoothed = prev + (targetDelta - prev) * 0.15; // Increased from 0.1 to 0.15 for smoother interpolation
        animationRef.current.prevSmooth[index] = smoothed;

        // apply translate
        currentTranslate += smoothed;

        const gap = 16;
        const itemsPerRow = calculateItemsPerRow();
        const oneSetWidth = (itemDimensions.width + gap) * itemsPerRow;

        if (currentTranslate <= -oneSetWidth) {
          currentTranslate += oneSetWidth;
        } else if (currentTranslate >= 0) {
          currentTranslate -= oneSetWidth;
        }

        animationRef.current.translateX[index] = currentTranslate;
        row.style.transform = `translateX(${currentTranslate}px)`;
      });

      if (isAnimating) {
        requestRef.current = requestAnimationFrame(updateContent);
      }
    };

    requestRef.current = requestAnimationFrame(updateContent);

    return () => {
      isAnimating = false;
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [itemDimensions, rows]);

  useEffect(() => {
    if (rows.length > 0) {
      rowRefs.current.forEach((row, index) => {
        if (row && animationRef.current.translateX[index] !== undefined) {
          row.style.transform = `translateX(${animationRef.current.translateX[index]}px)`;
        }
      });
    }
  }, [rows]);

  return (
    <div
      id="testimonials"
      className="scrolling-grid pt-[80px] pb-[60px] dark:bg-gray-950"
      ref={containerRef}
    >
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          What My
          <span className="block bg-gradient-to-r from-[#2684FC] to-[#4A90E2] bg-clip-text text-transparent">
            Clients Say
          </span>
        </h2>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Hear directly from my clients about the projects I’ve delivered — from
          websites and apps to dashboards and platforms. See how my work has
          helped them achieve their goals efficiently and creatively.
        </p>
      </div>

      {rows.map((rowTestimonials, rowIndex) => (
        <div
          key={rowIndex}
          style={{
            overflow: "hidden",
            height: `${itemDimensions.height + 20}px`,
            position: "relative",
            width: "100%",
          }}
        >
          <div
            ref={(el) => (rowRefs.current[rowIndex] = el)}
            style={{
              display: "flex",
              position: "absolute",
              willChange: "transform",
              gap: "1rem",
              minWidth: "100%",
              width: "max-content",
              left: "0",
              top: "0",
            }}
          >
            {rowTestimonials.map((testimonial, testimonialIndex) => (
              <div
                key={`${rowIndex}-${testimonialIndex}`}
                style={{
                  width: `${itemDimensions.width}px`,
                  height: `${itemDimensions.height}px`,
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="pt-8"></div>
    </div>
  );
}
