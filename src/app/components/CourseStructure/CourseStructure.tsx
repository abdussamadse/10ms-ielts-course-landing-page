import Image from "next/image";
import { APIData } from "@/app/types/ielts-course";

// Define the expected shape of each feature item
interface FeatureValue {
  title: string;
  subtitle: string;
  icon: string;
}

// Props expected by this component
interface CourseStructureProps {
  courseData: APIData;
}

const CourseStructure = ({ courseData }: CourseStructureProps) => {
  // Find the "features" section from the course data
  const featuresSection = courseData.sections.find(
    (section) => section.type === "features"
  );

  // If no features section or its values are missing, render nothing
  if (!featuresSection?.values) {
    return null;
  }

  // Transform raw values into a consistent format for display
  const items = (featuresSection.values as FeatureValue[]).map((item) => ({
    title: item.title,
    description: item.subtitle,
    image: item.icon,
  }));

  return (
    <div className="w-full flex flex-col gap-3">
      {/* Section title */}
      <h2 className="text-xl font-semibold leading-[30px] text-black">
        {featuresSection.name}
      </h2>

      {/* Features list in a responsive grid */}
      <div className="grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8">
        {items.map((item, index) => (
          <div key={index} className="flex flex-row items-start gap-3 m-1">
            {/* Feature icon */}
            <div className="mb-4 mx-auto">
              <Image
                src={item.image}
                alt={item.title}
                width={36}
                height={36}
                loading="lazy"
              />
            </div>

            {/* Title and description */}
            <div className="flex flex-col flex-1 gap-2">
              <h2 className="text-[18px] font-medium leading-[26px] text-white">
                {item.title}
              </h2>
              <h2 className="text-[14px] font-normal leading-[22px] text-[#9CA3AF]">
                {item.description}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseStructure;
