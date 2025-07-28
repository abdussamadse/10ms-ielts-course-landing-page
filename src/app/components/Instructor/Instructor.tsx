import Image from "next/image";
import Link from "next/link";
import { APIData } from "@/app/types/ielts-course";

// Define the expected shape of each instructor object
interface InstructorValue {
  name: string;
  image: string;
  slug: string;
  description: string;
}

// Define the props shape expected by this component
interface InstructorProps {
  courseData: APIData;
}

const Instructor = ({ courseData }: InstructorProps) => {
  // Try to find the "instructors" section in the course data
  const instructorSection = courseData.sections.find(
    (section) => section.type === "instructors"
  );

  // If no instructor section or no instructor data is found, don't render anything
  if (!instructorSection?.values?.[0]) {
    return null;
  }

  // Extract the first instructor from the section
  const instructor = instructorSection.values[0] as InstructorValue;

  return (
    <div className="w-full pt-4 mt-[480px] md:mt-0">
      {/* Render the instructor section title; fallback to default Bengali title */}
      <h2 className="mb-4 text-xl font-semibold md:text-2xl">
        {instructorSection.name || "কোর্স ইন্সট্রাক্টর"}
      </h2>

      {/* Instructor card with image and details */}
      <div className="flex items-center md:rounded-md md:border md:border-gray-300 md:px-5 md:pt-5 md:pb-6">
        <div>
          {/* Circular cropped instructor image */}
          <div
            className="rounded-[50%] overflow-hidden"
            style={{ fontSize: 0 }}
          >
            <Image
              src={instructor.image}
              alt={`Instructor ${instructor.name}`}
              width={73}
              height={73}
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex-1 ml-4">
          {/* Instructor name linking to their detail page */}
          <h3 className="text-lg">
            <Link
              href={`/skills/instructors/${instructor.slug}/`}
              className="flex items-center"
            >
              <p className="hover:text-green-600">{instructor.name}</p>
              <span className="ml-2 pb-[2px]">
                <Image
                  src="/icons/right-arrow.svg"
                  alt="Right Arrow"
                  width={7}
                  height={11}
                />
              </span>
            </Link>
          </h3>

          {/* Instructor description - supports rich text via HTML injection */}
          <div
            className="text-sm"
            dangerouslySetInnerHTML={{ __html: instructor.description }}
          />
        </div>
      </div>
    </div>
  );
};

export default Instructor;
