"use client";

import { Icon } from "@iconify/react";
import { QuoteIcon, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  profile: string;
  stars: number;
  description: string;
  attendedEvent: string;
  reviewFrom: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alice Morgan",
    profile: "https://randomuser.me/api/portraits/women/68.jpg",
    stars: 3,
    description:
      "Delivered exactly what we envisioned! The frontend design and functionality were flawless.",
    attendedEvent: "E-Commerce Website Project",
    reviewFrom: "fiverr",
  },
  {
    id: 2,
    name: "Brian Lee",
    profile: "https://randomuser.me/api/portraits/men/32.jpg",
    stars: 5,
    description:
      "Professional and timely. The React application exceeded our expectations.",
    attendedEvent: "Social Media Platform Development",
    reviewFrom: "upwork",
  },
  {
    id: 3,
    name: "Zohaib Ali",
    profile: "https://randomuser.me/api/portraits/men/45.jpg",
    stars: 5,
    description:
      "Great communication throughout the project. The final portfolio website looks amazing.",
    attendedEvent: "Portfolio Website Creation",
    reviewFrom: "linkedin",
  },
  {
    id: 4,
    name: "Hafsa Sheikh",
    profile: "https://randomuser.me/api/portraits/women/41.jpg",
    stars: 4,
    description:
      "The booking system is seamless, intuitive, and bug-free. Excellent work!",
    attendedEvent: "Online Booking System",
    reviewFrom: "freelancer",
  },
  {
    id: 5,
    name: "Ayesha Khan",
    profile: "https://randomuser.me/api/portraits/women/50.jpg",
    stars: 5,
    description:
      "Delivered a dashboard app with all requested features and smooth UI interactions.",
    attendedEvent: "Dashboard App Development",
    reviewFrom: "peopleperhour",
  },
  {
    id: 6,
    name: "Daniel Cooper",
    profile: "https://randomuser.me/api/portraits/men/35.jpg",
    stars: 4,
    description:
      "Clean code, excellent use of Next.js, and pixel-perfect frontend design. Highly recommended.",
    attendedEvent: "Corporate Website Revamp",
    reviewFrom: "fiverr",
  },
  {
    id: 7,
    name: "Zainab Tariq",
    profile: "https://randomuser.me/api/portraits/women/33.jpg",
    stars: 5,
    description:
      "Brilliant problem solver! The React dashboard was delivered with precision and modern UI.",
    attendedEvent: "Admin Dashboard Development",
    reviewFrom: "upwork",
  },
  {
    id: 8,
    name: "Michael Adams",
    profile: "https://randomuser.me/api/portraits/men/37.jpg",
    stars: 5,
    description:
      "The website’s performance and responsiveness are top-notch. Excellent attention to detail.",
    attendedEvent: "Business Landing Page",
    reviewFrom: "linkedin",
  },
  {
    id: 9,
    name: "Sara Javed",
    profile: "https://randomuser.me/api/portraits/women/52.jpg",
    stars: 4,
    description:
      "Loved the professionalism and clarity. The UI updates improved our site engagement drastically!",
    attendedEvent: "Website Redesign",
    reviewFrom: "freelancer",
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
      {/* Quote Icon */}
      <div className="absolute top-1 right-1 text-gray-200 dark:text-gray-700">
        <QuoteIcon className="w-14 h-14" />
      </div>

      {/* Top: Profile & Stars */}
      <div className="flex items-center space-x-3 mb-4">
        <div className="flex flex-col">
          <h3 className="font-bold text-gray-900 dark:text-gray-50 text-md">
            {testimonial.name}
          </h3>

          {/* Always show 5 stars */}
          <div className="flex text-xl">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={
                  i < testimonial.stars
                    ? "text-yellow-400" // filled
                    : "text-gray-400 dark:text-gray-600" // hollow
                }
              >
                {i < testimonial.stars ? "★" : "☆"}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Middle: Fixed height description */}
      <div
        className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed italic"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 4,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        “{testimonial.description}”
      </div>

      <div
        className={`absolute bottom-3 right-3 flex items-center gap-2 px-3 py-1.5 rounded-t-lg text-sm font-medium shadow-sm
  ${
    testimonial.reviewFrom.includes("fiverr")
      ? "bg-green-50 text-[#1dbf73]"
      : testimonial.reviewFrom.includes("upwork")
      ? "bg-emerald-50 text-[#14a800]"
      : testimonial.reviewFrom.includes("linkedin")
      ? "bg-blue-50 text-[#0077b5]"
      : testimonial.reviewFrom.includes("freelancer")
      ? "bg-sky-50 text-[#29b2fe]"
      : testimonial.reviewFrom.includes("peopleperhour")
      ? "bg-orange-50 text-[#f36a22]"
      : "bg-gray-100 text-gray-600"
  }`}
      >
        {testimonial.reviewFrom.includes("fiverr") && (
          <Icon icon="jam:fiverr" className="w-5 h-5" />
        )}
        {testimonial.reviewFrom.includes("upwork") && (
          <Icon icon="simple-icons:upwork" className="w-5 h-5" />
        )}
        {testimonial.reviewFrom.includes("linkedin") && (
          <Icon icon="mdi:linkedin" className="w-5 h-5" />
        )}
        {testimonial.reviewFrom.includes("freelancer") && (
          <Icon icon="simple-icons:freelancer" className="w-5 h-5" />
        )}
        {testimonial.reviewFrom.includes("peopleperhour") && (
          <Icon icon="ph:smiley-blank-bold" className="w-5 h-5" />
        )}
        <span className="capitalize">{testimonial.reviewFrom}</span>
      </div>
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
      // const rowCount = screenWidth < 768 ? 6 : 3;
      const rowCount = screenWidth >= 1024 ? 2 : 4;

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
      className="scrolling-grid pt-[80px] pb-[60px] bg-gradient-to-br from-gray-50 to-blue-100"
      ref={containerRef}
    >
      <div className="text-center mb-12 px-4">
        <h2 className="flex items-center justify-center gap-2 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Love from
          <span className="block bg-gradient-to-r from-[#2684FC] to-[#4A90E2] bg-clip-text text-transparent">
           Clients
          </span>
        </h2>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Here’s what my clients honestly think about working with me — their
          experiences, feedback, and a few kind words that keep me motivated to
          keep building better every day.
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
