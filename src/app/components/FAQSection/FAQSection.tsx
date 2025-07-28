"use client";

import { useState } from "react";
import { APIData } from "@/app/types/ielts-course";

// Interface to define the shape of each FAQ item from the API
interface FaqValue {
  question: string;
  answer: string;
}

// Define types for the component's props
interface FAQSectionProps {
  courseData: APIData;
}

const FAQSection = ({ courseData }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Find the 'faq' section from the API data
  const faqSection = courseData.sections.find(
    (section) => section.type === "faq"
  );

  // Transform the API data into the structure the component needs
  const faqs =
    faqSection?.values?.map((item) => {
      // Assert the type for type safety
      const typedItem = item as FaqValue;
      return {
        question: typedItem.question,
        // The answer is an HTML string, so render it using dangerouslySetInnerHTML
        answer: (
          <div
            className="prose prose-p:leading-relaxed prose-a:text-blue-600 prose-a:underline max-w-none text-sm text-gray-700"
            dangerouslySetInnerHTML={{ __html: typedItem.answer }}
          />
        ),
      };
    }) || []; // Use a fallback empty array if data doesn't exist

  return (
    <div className="w-full">
      <h2 className="text-base md:text-xl font-bold mb-4" id="faq">
        {/* Use the dynamic title from the API */}
        {faqSection?.name || "Frequently Asked Questions"}
      </h2>
      <div className="md:border md:border-gray-300 rounded-md p-4 md:p-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-dashed border-gray-300 last:border-none"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center py-4 font-semibold text-left gap-y-3"
            >
              {faq.question}
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
            {openIndex === index && (
              <div className="pb-4 flex">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
