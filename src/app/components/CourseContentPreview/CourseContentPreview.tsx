"use client";

import { useState } from "react";

const CourseContentPreview = () => {
  // State to track which section is expanded
  const [openIndex, setOpenIndex] = useState(0);

  // Hardcoded course content sections and items
  const courseSections = [
    {
      title: "Introduction",
      items: [
        { title: "Video: IELTS: Introduction", isFree: true },
        { title: "Video: IELTS: Overview", isFree: true },
        { title: "Video: How to Prepare for IELTS?", isFree: true },
        { title: "Video: Making a Daily Routine", isFree: true },
        {
          title: "Video: Different Sentence Structures to Improve Writing",
          isFree: false,
        },
        { title: "IELTS General Facts", isFree: false },
        { title: "IELTS Vocabulary", isFree: false },
      ],
    },
    {
      title: "IELTS Course by Munzereen Shahid | Exclusive Support Group",
      items: [
        {
          title: "Video: Different Sentence Structures to Improve Writing",
          isFree: false,
        },
        { title: "IELTS General Facts", isFree: false },
        { title: "IELTS Vocabulary", isFree: false },
      ],
    },
    {
      title: "Academic Reading",
      items: [
        {
          title: "Video: Different Sentence Structures to Improve Writing",
          isFree: false,
        },
        { title: "IELTS General Facts", isFree: false },
        { title: "IELTS Vocabulary", isFree: false },
      ],
    },
    {
      title: "Academic Reading Mock Test",
      items: [
        {
          title: "Video: Different Sentence Structures to Improve Writing",
          isFree: false,
        },
        { title: "IELTS General Facts", isFree: false },
        { title: "IELTS Vocabulary", isFree: false },
      ],
    },
    {
      title: "Listening",
      items: [
        {
          title: "Video: Different Sentence Structures to Improve Writing",
          isFree: false,
        },
        { title: "IELTS General Facts", isFree: false },
        { title: "IELTS Vocabulary", isFree: false },
      ],
    },
  ];

  // Function to return the appropriate icon based on isFree status
  const getIcon = (isFree: boolean | null = null) => {
    if (isFree === true) {
      // Play icon for free content
      return (
        <svg
          className="text-green-500 mt-1"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <circle cx="10" cy="10" r="10" />
          <polygon fill="white" points="8,6 14,10 8,14" />
        </svg>
      );
    } else if (isFree === false) {
      // Lock icon for paid content
      return (
        <svg
          className="text-gray-400 mt-1"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <circle cx="10" cy="10" r="10" />
          <rect x="7" y="9" width="6" height="2" fill="white" />
        </svg>
      );
    } else {
      // Neutral icon (fallback)
      return (
        <svg
          className="text-gray-400 mt-1"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <circle cx="10" cy="10" r="10" />
        </svg>
      );
    }
  };

  return (
    <div className="w-full">
      {/* Section heading */}
      <h2 className="text-lg md:text-xl font-bold md:mb-4">কন্টেন্ট প্রিভিউ</h2>

      {/* Outer box with padding and optional border on larger screens */}
      <div className="md:border md:border-gray-300 rounded-md p-4 md:p-6">
        {courseSections.map((section, index) => (
          <div
            key={index}
            className="border-b border-dashed border-gray-300 last:border-none"
          >
            {/* Section toggle button */}
            <button
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              className="w-full flex justify-between items-center py-4 font-semibold text-left"
            >
              {section.title}
              {/* Dropdown arrow, rotates when section is open */}
              {section.items.length > 0 && (
                <svg
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </button>

            {/* If this section is open, render its items */}
            {openIndex === index && section.items.length > 0 && (
              <ul className="mb-4 space-y-3">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex items-start justify-between">
                    {/* Icon + title */}
                    <div className="flex gap-2 items-start">
                      {getIcon(item.isFree)}
                      <p className="text-sm text-gray-700">{item.title}</p>
                    </div>

                    {/* Free label if applicable */}
                    {item.isFree && (
                      <span className="text-green-600 text-sm">ফ্রি দেখুন</span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseContentPreview;
