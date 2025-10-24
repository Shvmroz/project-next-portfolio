"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar, Users, Building, Moon, Sun, Menu, X } from "lucide-react";

export default function FloatingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-3 sm:top-6 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-300 backdrop-blur-xl ${
          isScrolled
            ? "bg-white/95 dark:bg-gray-700/70 border-gray-200/30 dark:border-gray-500/40"
            : "bg-white/90 dark:bg-gray-700/60 border-gray-200/20 dark:border-gray-500/30"
        } rounded-xl sm:rounded-2xl border shadow-2xl px-3 sm:px-6 py-2 sm:py-3 w-[95%] md:w-[70%]  ${
          isMobileMenuOpen ? "md:block hidden" : "block"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2"
            data-home-link="true"
          >
            <span className="font-bold text-lg sm:text-xl text-gray-800 dark:text-white">
              Shamroz Khan
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/#skills"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#2684FC] transition-colors px-3 py-2 rounded-lg hover:bg-white/10"
            >
              Skills
            </Link>
            <Link
              href="/#projects"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#2684FC] transition-colors px-3 py-2 rounded-lg hover:bg-white/10"
            >
              Projects
            </Link>
            <Link
              href="/#journey"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#2684FC] transition-colors px-3 py-2 rounded-lg hover:bg-white/10"
            >
              Journey
            </Link>
            <Link
              href="/#testimonials"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#2684FC] transition-colors px-3 py-2 rounded-lg hover:bg-white/10"
            >
              Testimonials
            </Link>
            <Link
              href="/#faq"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#2684FC] transition-colors px-3 py-2 rounded-lg hover:bg-white/10"
            >
              FAQ
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/#contact"
              className="text-gray-600 dark:text-gray-300 hover:text-[#2684FC] dark:hover:text-blue-400 transition-colors duration-300 cursor-pointer text-sm font-medium"
            >
              GET IN TOUCH
            </Link>
            <a
              href="https://www.linkedin.com/in/shvmroz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 lg:w-12 lg:h-12  flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <svg
                className="w-5 h-5 lg:w-6 lg:h-6 text-[#0077B5] group-hover:text-[#2684FC] transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href="https://www.linkedin.com/in/shvmroz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 lg:w-12 lg:h-12  flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <svg
                className="w-5 h-5 lg:w-6 lg:h-6 text-[#0077B5] group-hover:text-[#2684FC] transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-[#2684FC] p-2"
              data-menu-toggle="true"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden">
          <div
            className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-3 left-1/2 transform -translate-x-1/2 w-[95%] max-w-md bg-white/95 dark:bg-gray-700/80 backdrop-blur-xl rounded-xl border border-gray-200/40 dark:border-gray-500/50 shadow-2xl">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200/40 dark:border-gray-500/50">
              <Link
                href="/"
                className="flex items-center space-x-2"
                data-home-link="true"
              >
                <span className="font-bold text-lg text-gray-800 dark:text-white">
                  Shamroz Khan
                </span>
              </Link>
              <Button
                variant="ghost"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-600 hover:text-[#2684FC] hover:bg-gray-200/50 p-2"
                data-menu-toggle="true"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            {/* Mobile Menu Content */}
            <div className="px-4">
              <div className="space-y-2 ">
                <Link
                  href="/#skills"
                  className="block text-gray-700 dark:text-gray-200 hover:text-[#2684FC] dark:hover:text-[#4CA6EA] transition-colors py-3 px-2 rounded-lg hover:bg-gray-100/70 dark:hover:bg-gray-800/70"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Skills
                </Link>
                <Link
                  href="/#projects"
                  className="block text-gray-700 dark:text-gray-200 hover:text-[#2684FC] dark:hover:text-[#4CA6EA] transition-colors py-3 px-2 rounded-lg hover:bg-gray-100/70 dark:hover:bg-gray-800/70"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="/#journey"
                  className="block text-gray-700 dark:text-gray-200 hover:text-[#2684FC] dark:hover:text-[#4CA6EA] transition-colors py-3 px-2 rounded-lg hover:bg-gray-100/70 dark:hover:bg-gray-800/70"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Journey
                </Link>
                <Link
                  href="/#testimonials"
                  className="block text-gray-700 dark:text-gray-200 hover:text-[#2684FC] dark:hover:text-[#4CA6EA] transition-colors py-3 px-2 rounded-lg hover:bg-gray-100/70 dark:hover:bg-gray-800/70"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Testimonials
                </Link>
                <Link
                  href="/#faq"
                  className="block text-gray-700 dark:text-gray-200 hover:text-[#2684FC] dark:hover:text-[#4CA6EA] transition-colors py-3 px-2 rounded-lg hover:bg-gray-100/70 dark:hover:bg-gray-800/70"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
                <Link
                  href="/#contact"
                  className="block text-gray-700 dark:text-gray-200 hover:text-[#2684FC] dark:hover:text-[#4CA6EA] transition-colors py-3 px-2 rounded-lg hover:bg-gray-100/70 dark:hover:bg-gray-800/70"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Bottom Buttons */}
            <div className="p-4">
              <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full text-white rounded-lg py-2 text-sm hover:bg-gray-700 transition-colors duration-300">
                  Get in Touch
                </Button>
              </Link>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
