import CheckIcon from "../Common/CheckIcon";
import { APIData } from "@/app/types/ielts-course";

// Define the shape of each item in the "pointers" section
interface PointerValue {
  text: string;
}

// Props expected by the WhatYouWillLearn component
interface WhatYouWillLearnProps {
  courseData: APIData;
}

const WhatYouWillLearn = ({ courseData }: WhatYouWillLearnProps) => {
  // Find the "pointers" section in the course data
  const pointersSection = courseData.sections.find(
    (section) => section.type === "pointers"
  );

  // If no values found in the section, don't render anything
  if (!pointersSection?.values) {
    return null;
  }

  // Extract only the text values for display in the list
  const items = (pointersSection.values as PointerValue[]).map(
    (pointer) => pointer.text
  );

  return (
    <div className="w-full">
      {/* Heading from API or fallback could be added here */}
      <h2 className="mb-4 text-xl font-semibold md:text-2xl">
        {pointersSection.name}
      </h2>

      {/* Bordered container for better visual grouping */}
      <div className="rounded-md md:border md:border-gray-300">
        <div className="pt-2 md:p-6">
          {/* Responsive two-column grid for bullet points */}
          <ul className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_1fr] md:gap-4">
            {items.map((text, index) => (
              <li key={index} className="flex items-start gap-2 mb-2">
                {/* Custom checkmark icon component */}
                <CheckIcon />
                {/* Item text */}
                <div className="flex-1">{text}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhatYouWillLearn;
