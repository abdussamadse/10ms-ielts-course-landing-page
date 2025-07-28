"use client";

import Image from "next/image";
import React from "react";
import CheckIcon from "../Common/CheckIcon";
import { APIData } from "@/app/types/ielts-course";

// Define the specific shape for a "feature_explanations" item
interface FeatureExplanationValue {
  title: string;
  file_url: string;
  checklist: string[];
}

// Define the expected props shape
interface ExclusiveFeatureProps {
  courseData: APIData;
}

const ExclusiveFeature = ({ courseData }: ExclusiveFeatureProps) => {
  // Extract the specific section by type
  const featureExplanationsSection = courseData.sections.find(
    (section) => section.type === "feature_explanations"
  );

  // If section or values are missing, render nothing
  if (!featureExplanationsSection?.values) {
    return null;
  }

  // Transform raw values into a structured array for rendering
  const sections = (
    featureExplanationsSection.values as FeatureExplanationValue[]
  ).map((item) => ({
    title: item.title,
    imageSrc: item.file_url,
    features: item.checklist,
  }));

  return (
    <div className="w-full">
      {/* Render section name or fallback title */}
      <h2 className="text-lg md:text-xl font-bold md:mb-4">
        {featureExplanationsSection.name || "কোর্স এক্সক্লুসিভ ফিচার"}
      </h2>

      {/* Container for feature sections */}
      <div className="grid grid-cols-1 px-5 border border-gray-300 divide-y divide-gray-300 rounded-md">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className="flex flex-col items-start justify-between gap-3 py-5 md:flex-row"
          >
            {/* Left column: title and feature checklist */}
            <div className="flex flex-col gap-2">
              <h2 className="text-[14px] font-semibold leading-[30px] text-[#111827] md:text-[16px]">
                {section.title}
              </h2>

              {/* Feature checklist */}
              {section.features.map((text, i) => (
                <div key={i} className="flex flex-row items-center gap-5">
                  <CheckIcon />
                  <p className="text-[14px] font-normal leading-[24px] text-[#4B5563] md:text-[16px]">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            {/* Right column: image */}
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
