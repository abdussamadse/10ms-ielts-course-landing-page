import CheckIcon from "../Common/CheckIcon";
import { APIData } from "@/app/types/ielts-course";

// Define the shape of each requirement item in the API
interface RequirementValue {
  text: string;
}

// Define the expected props type for this component
interface ClassRequirementsProps {
  courseData: APIData;
}

// Hardcoded fallback items to use when API data is missing or empty
const fallbackItems: string[] = [
  "ইন্টারনেট সংযোগ (ওয়াইফাই বা মোবাইল ইন্টারনেট)",
  "স্মার্টফোন অথবা পিসি",
];

const ClassRequirements = ({ courseData }: ClassRequirementsProps) => {
  // Look for the section with type 'requirements' in the API
  const requirementsSection = courseData.sections.find(
    (section) => section.type === "requirements"
  );

  // Type assertion to help TypeScript understand the structure
  const apiValues = requirementsSection?.values as
    | RequirementValue[]
    | undefined;

  // Choose between API data (if present) or fallback items
  const items =
    apiValues && apiValues.length > 0
      ? apiValues.map((item) => item.text)
      : fallbackItems;

  return (
    <div className="w-full">
      {/* Show the section name or fallback title */}
      <h2 className="mb-4 text-xl font-semibold md:text-2xl">
        {requirementsSection?.name || "ক্লাস করার জন্য প্রয়োজন হবে"}
      </h2>

      {/* Render the list of requirements */}
      <div className="py-2 rounded-md md:border md:border-gray-300 md:p-6">
        <ul>
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2 mb-2">
              <CheckIcon />
              <h3>{item}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClassRequirements;
