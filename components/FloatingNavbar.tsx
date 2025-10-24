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
              Welcome
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/#projects"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#2684FC] transition-colors px-3 py-2 rounded-lg hover:bg-white/10"
            >
              Projects
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-gray-600 dark:text-gray-300 hover:text-[#2684FC] hover:bg-white/10"
              data-theme-toggle="true"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>
            <Link
              href="/#contact"
              className="text-gray-600 dark:text-gray-300 hover:text-[#2684FC] dark:hover:text-blue-400 transition-colors duration-300 cursor-pointer text-sm font-medium"
            >
              GET IN TOUCH
            </Link>

            <Link href="/resume">
              <Button className="bg-gradient-to-r from-[#2684FC] to-[#4A90E2] text-white hover:from-[#1E6DE8] hover:to-[#3B82E6] transition-all duration-300 rounded-xl shadow-lg text-sm px-4 py-2">
                Resume
              </Button>
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-gray-600 dark:text-gray-300 hover:text-[#2684FC] hover:bg-white/10 p-2"
              data-theme-toggle="true"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-[#2684FC] hover:bg-white/10 p-2"
              data-menu-toggle="true"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
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
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#2684FC] to-[#4A90E2] flex items-center justify-center">
                  <Calendar className="w-3 h-3 text-white" />
                </div>
                <span className="font-bold text-lg text-gray-800 dark:text-white">
                  EXIBY
                </span>
              </Link>
              <Button
                variant="ghost"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-600 dark:text-gray-300 hover:text-[#2684FC] hover:bg-gray-100/50 dark:hover:bg-gray-800/50 p-2"
                data-menu-toggle="true"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Mobile Menu Content */}
            <div className="p-4">
              <div className="space-y-3 mb-6">
                <Link
                  href="/#features"
                  className="block text-gray-700 dark:text-gray-200 hover:text-[#2684FC] dark:hover:text-[#4CA6EA] transition-colors py-3 px-2 rounded-lg hover:bg-gray-100/70 dark:hover:bg-gray-800/70"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="/#companies"
                  className="block text-gray-700 dark:text-gray-200 hover:text-[#2684FC] dark:hover:text-[#4CA6EA] transition-colors py-3 px-2 rounded-lg hover:bg-gray-100/70 dark:hover:bg-gray-800/70"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Companies
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

              {/* Mobile Menu Buttons - In One Row */}
              <div className="flex space-x-3">
                <Link
                  href="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex-1"
                >
                  <Button
                    variant="ghost"
                    className="w-full text-[#2684FC] hover:text-[#1E6DE8] dark:hover:text-[#4CA6EA] hover:bg-gray-100/70 dark:hover:bg-gray-800/70 transition-colors"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex-1"
                >
                  <Button
                    variant="ghost"
                    className="w-full text-[#2684FC] hover:text-[#1E6DE8] dark:hover:text-[#4CA6EA] hover:bg-gray-100/70 dark:hover:bg-gray-800/70 transition-colors"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
