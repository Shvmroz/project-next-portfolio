"use client";

import Link from "next/link";
import {
  Calendar,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Facebook,
  Instagram,
  Linkedin as LinkedIn,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:pt-16 lg:pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4 lg:mb-6 justify-center sm:justify-start">
              <span className="font-bold text-xl lg:text-2xl">
                Shamroz Khan
              </span>
            </div>
            <p className="text-sm lg:text-base text-gray-300 dark:text-gray-400 mb-4 lg:mb-6 max-w-md leading-relaxed text-center sm:text-left">
              Passionate web developer with expertise in building responsive,
              user-friendly web applications. Skilled in modern frontend
              technologies like React, Next.js, and Tailwind CSS.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base lg:text-lg mb-4 lg:mb-6 text-center sm:text-left">
              Quick Links
            </h3>
            <ul className="space-y-2 lg:space-y-3 text-center sm:text-left">
              <li>
                <Link
                  href="/#skills"
                  className="text-sm lg:text-base text-gray-300 dark:text-gray-400 hover:text-[#2684FC] transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="text-sm lg:text-base text-gray-300 dark:text-gray-400 hover:text-[#2684FC] transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/#journey"
                  className="text-sm lg:text-base text-gray-300 dark:text-gray-400 hover:text-[#2684FC] transition-colors"
                >
                  Journey
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-sm lg:text-base text-gray-300 dark:text-gray-400 hover:text-[#2684FC] transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/#testimonials"
                  className="text-sm lg:text-base text-gray-300 dark:text-gray-400 hover:text-[#2684FC] transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/#contact"
                  className="text-sm lg:text-base text-gray-300 dark:text-gray-400 hover:text-[#2684FC] transition-colors"
                >
                  Contact
                </Link>
              </li> */}
             
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-base lg:text-lg mb-4 lg:mb-6 text-center sm:text-left">
              Get-in Touch
            </h3>
            <ul className="space-y-2 lg:space-y-3">
              <li className="flex items-center text-gray-300 dark:text-gray-400 justify-center sm:justify-start">
                <Mail className="w-3 h-3 lg:w-4 lg:h-4 mr-2 lg:mr-3 text-[#2684FC] flex-shrink-0" />
                <span className="text-sm lg:text-base">shvmroz@gmail.com</span>
              </li>
              <li className="flex items-center text-gray-300 dark:text-gray-400 justify-center sm:justify-start">
                <Phone className="w-3 h-3 lg:w-4 lg:h-4 mr-2 lg:mr-3 text-[#2684FC] flex-shrink-0" />
                <span className="text-sm lg:text-base">+92 306 6520002</span>
              </li>
              <li className="flex items-start text-gray-300 dark:text-gray-400 justify-center sm:justify-start">
                <MapPin className="w-3 h-3 lg:w-4 lg:h-4 mr-2 lg:mr-3 mt-1 text-[#2684FC] flex-shrink-0" />
                <span className="text-sm lg:text-base text-center sm:text-left">
                  Lahore, Punjab, Pakistan
                </span>
              </li>
              <li>
                <div className="flex space-x-3 lg:space-x-4 justify-center sm:justify-start mt-5">
                  {/* Facebook */}
                  <a
                    href="https://facebook.com/shvmroz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gray-700 flex items-center justify-center transition-colors duration-300 hover:bg-blue-600"
                  >
                    <Facebook className="w-3 h-3 lg:w-4 lg:h-4 text-white hover:text-white" />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com/shvmroz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gray-700 flex items-center justify-center transition-colors duration-300 hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600"
                  >
                    <Instagram className="w-3 h-3 lg:w-4 lg:h-4 text-white hover:text-white" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/shvmroz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gray-700 flex items-center justify-center transition-colors duration-300 hover:bg-[#0077B5]"
                  >
                    <LinkedIn className="w-3 h-3 lg:w-4 lg:h-4 text-white hover:text-white" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 dark:border-gray-800 mt-8 lg:mt-12 pt-6 lg:pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-400 dark:text-gray-500 text-xs lg:text-sm text-center md:text-left">
              ❤️ Where Design Meets Code - Shamroz
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
