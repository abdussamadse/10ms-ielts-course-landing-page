"use client";

import { useState } from "react";
import { APIData } from "@/app/types/ielts-course";

// Define the specific shape for an "about" item from the API
interface AboutValue {
  title: string;
  description: string;
}

// Define the type for the component's props
interface CourseDetailsProps {
  courseData: APIData;
}

const CourseDetails = ({ courseData }: CourseDetailsProps) => {
  // Track which accordion item is currently open; null means none
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Find the 'about' section from the API data
  const aboutSection = courseData.sections.find(
    (section) => section.type === "about"
  );

  // Transform the API data into the structure the component needs
  const sections =
    aboutSection?.values?.map((item) => {
      const typedItem = item as AboutValue;

      return {
        // Remove any HTML tags from the title to ensure clean button labels
        title: typedItem.title.replace(/<[^>]*>/g, ""),
        // Content is HTML — rendered using dangerouslySetInnerHTML
        content: (
          <div
            className="prose prose-ul:list-disc prose-ul:pl-4 prose-li:mb-2 max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: typedItem.description }}
          />
        ),
      };
    }) || []; // Fallback to empty array if no data found

  return (
    <div className="w-full">
      {/* Section title from the API, with fallback in Bengali */}
      <h2 className="text-lg md:text-xl font-bold md:mb-4">
        {aboutSection?.name || "কোর্স সম্পর্কে বিস্তারিত"}
      </h2>

      {/* Outer container with padding and borders on larger screens */}
      <div className="md:border md:border-gray-300 rounded-md p-4 md:p-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className="border-b border-dashed border-gray-300 last:border-none"
          >
            {/* Accordion toggle button */}
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center py-4 font-semibold text-left"
            >
              {section.title}

              {/* Arrow icon rotates when active */}
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
            </button>

            {/* Only show content if the current index is open */}
            {openIndex === index && (
              <div className="pb-4 text-sm">{section.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;
