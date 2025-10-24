"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What technologies will you use to build my project?",
    answer:
      "I typically use modern frontend technologies like React.js, Next.js, Tailwind CSS, and RESTful APIs to build scalable and performant web applications.",
  },
  {
    question: "How long will it take to complete the project?",
    answer:
      "The timeline depends on the project complexity. Small projects can take 1–3 weeks, while larger projects with multiple features may take 4–8 weeks or more. A detailed plan will be provided after discussing the requirements.",
  },
  {
    question: "Will my website be responsive and mobile-friendly?",
    answer:
      "Absolutely! I ensure that every project is fully responsive, works smoothly across devices, and provides a great user experience on mobile, tablet, and desktop.",
  },
  {
    question: "Can you integrate APIs or external services?",
    answer:
      "Yes, I can integrate RESTful APIs, third-party services, and even payment gateways if required to make your application fully functional.",
  },
  {
    question: "Will I be able to update the content myself?",
    answer:
      "Depending on the project, I can implement an easy-to-use admin panel or provide guidance on how to manage and update your website content efficiently.",
  },
  {
    question: "How do you ensure code quality and maintainability?",
    answer:
      "I follow best practices in code organization, modular components, and documentation. This ensures your project is easy to maintain and scalable in the future.",
  },
  {
    question: "Can you help with hosting and deployment?",
    answer:
      "Yes, I can deploy your project to platforms like Vercel, Netlify, or any server of your choice, and ensure that it runs smoothly online.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Absolutely! I offer support after launch for bug fixes, minor updates, or enhancements as per your requirements.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Frequently Asked
            <span className="bg-gradient-to-r from-[#2684FC] to-[#4A90E2] bg-clip-text text-transparent ml-3">
              Questions
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Get answers to common questions clients ask when hiring a frontend
            developer, including timelines, technologies, and post-launch
            support.{" "}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 lg:mb-6 bg-white dark:bg-gray-800 rounded-xl lg:rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 lg:px-8 py-4 lg:py-6 text-left flex items-center justify-between transition-colors duration-200"
              >
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#2684FC] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-[#2684FC] flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-4 sm:px-6 lg:px-8 pb-4 lg:pb-6">
                  <p className="text-xs sm:text-sm lg:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
