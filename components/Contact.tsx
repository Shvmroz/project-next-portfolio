"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Icon } from "@iconify/react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Handle form submission
  };

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section
      id="contact"
      className="relative py-16 lg:py-24 bg-gradient-to-b from-blue-50 to-blue-100 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Get in{" "}
            <span className="bg-gradient-to-r from-[#2684FC] to-[#4A90E2] bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Ready to elevate your digital presence? Let's connect and build
            something remarkable together — clean, fast, and user-focused.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Left Side: Info */}
          <div className="hidden md:block space-y-8 ">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-700 leading-relaxed max-w-lg">
                Whether you need a modern portfolio, a responsive business site,
                or a custom React/Next.js project — I'd love to help bring your
                ideas to life with a clean, efficient, and visually appealing
                design.
              </p>
            </div>

            <div className="space-y-6">
                {/* WhatsApp */}
                <a
                href="https://wa.me/923066520002"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 group"
              >
                <div className="group-hover:scale-110 transition-transform">
                  <Icon
                    icon="ic:baseline-whatsapp"
                    className="w-12 h-12 text-[#25D366]"
                  />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900">
                    WhatsApp
                  </h4>
                  <p className="text-gray-600">
                    +92 306 6520002
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/shvmroz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 group"
              >
                <div className="group-hover:scale-110 transition-transform">
                  <Icon
                    icon="mdi:linkedin"
                    className="w-12 h-12 text-[#0077B5]"
                  />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900">
                    LinkedIn
                  </h4>
                  <p className="text-gray-600">
                    Shamroz Khan
                  </p>
                </div>
              </a>
              {/* Email */}
              <a
                href="mailto:shvmroz@gmail.com"
                className="flex items-center space-x-4 group"
              >
                <div className=" group-hover:scale-110 transition-transform">
                  <Icon
                    icon="mdi:email-outline"
                    className="w-12 h-12 text-[#2684FC]"
                  />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900">
                    Email
                  </h4>
                  <p className="text-gray-600">
                    shvmroz@gmail.com
                  </p>
                </div>
              </a>

            
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-6 sm:p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label
                  htmlFor="name"
                  className="text-gray-800 font-medium"
                >
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateFormData("name", e.target.value)}
                  required
                  placeholder="Enter your full name"
                  className="mt-2 rounded-xl border-2 focus:border-[#2684FC] transition-colors"
                />
              </div>

              <div>
                <Label
                  htmlFor="email"
                  className="text-gray-800 font-medium"
                >
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  required
                  placeholder="Enter your email"
                  className="mt-2 rounded-xl border-2 focus:border-[#2684FC] transition-colors"
                />
              </div>

              <div>
                <Label
                  htmlFor="subject"
                  className="text-gray-800 font-medium"
                >
                  Subject
                </Label>
                <Input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => updateFormData("subject", e.target.value)}
                  required
                  placeholder="What's this about?"
                  className="mt-2 rounded-xl border-2 focus:border-[#2684FC] transition-colors"
                />
              </div>

              <div>
                <Label
                  htmlFor="message"
                  className="text-gray-800 font-medium"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => updateFormData("message", e.target.value)}
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="mt-2 rounded-xl border-2 focus:border-[#2684FC] transition-colors"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#2684FC] to-[#4A90E2] text-white py-3 rounded-xl hover:from-[#1E6DE8] hover:to-[#3B82E6] transition-transform hover:scale-[1.02] shadow-lg font-medium"
              >
                Send Message
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}