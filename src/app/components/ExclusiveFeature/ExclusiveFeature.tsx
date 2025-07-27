"use client";

import Image from "next/image";
import React from "react";

const ExclusiveFeature = () => {
  const sections = [
    {
      title: "ভিডিও লেকচার",
      imageSrc:
        "https://cdn.10minuteschool.com/images/k-12-courses/ielts_mock_sqr.png",
      features: [
        "IELTS Academic ও General Training নিয়ে আলোচনা",
        "Reading, Writing, Listening ও Speaking এর Overview & Format",
        "প্রতিটি প্রশ্নের ধরন-ভিত্তিক উত্তর করার স্ট্র্যাটেজি",
        "ভিডিওর সাথে প্র্যাকটিসের সুযোগ",
      ],
    },
    {
      title: "Reading ও Listening Mock Tests",
      imageSrc:
        "https://cdn.10minuteschool.com/images/k-12-courses/ielts_mock_book_sqr.png",
      features: [
        "10 Reading & 10 Listening Mock Tests",
        "Computer-delivered IELTS পরীক্ষার এক্সপেরিয়েন্স",
        "উত্তর সাবমিট করার সাথে সাথেই রেজাল্ট",
        "যেকোনো সময়, যেকোনো জায়গা থেকে মক টেস্ট",
      ],
    },
  ];

  const CheckIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="15"
      fill="none"
      viewBox="0 0 19 15"
    >
      <path
        fill="#6294F8"
        stroke="#6294F8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.893"
        d="M18.168 1.508a.792.792 0 01-.006 1.111L6.645 14.143a.77.77 0 01-1.087.005L.77 9.433a.792.792 0 01-.015-1.11.77.77 0 011.098-.016l4.242 4.177L17.07 1.502a.77.77 0 011.098.006z"
      />
    </svg>
  );

  return (
    <div className="bg-white w-full sm:w-[440px] lg:w-[740px] px-4 lg:px-0 mt-4">
      <h2 className="text-lg md:text-xl font-bold md:mb-4">
        কোর্স এক্সক্লুসিভ ফিচার
      </h2>
      <div className="grid grid-cols-1 px-5 border border-gray-300 divide-y divide-gray-300 rounded-md">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className="flex flex-col items-start justify-between gap-3 py-5 md:flex-row"
          >
            {/* Left content */}
            <div className="flex flex-col gap-2">
              <h2 className="text-[14px] font-semibold leading-[30px] text-[#111827] md:text-[16px]">
                {section.title}
              </h2>
              {section.features.map((text, i) => (
                <div key={i} className="flex flex-row items-center gap-5">
                  <CheckIcon />
                  <p className="text-[14px] font-normal leading-[24px] text-[#4B5563] md:text-[16px]">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            {/* Right image */}
            <div className="mb-4 mx-auto max-w-[350px] opacity-100 transition-opacity duration-300 ease-in-out">
              <Image
                src={section.imageSrc}
                alt={section.title}
                width={250}
                height={200}
                style={{ color: "transparent" }}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveFeature;
