import Image from "next/image";
import Link from "next/link";
import { APIData } from "@/app/types/ielts-course"; // Adjust path if needed

// Define the expected shape of data for the "group_join_engagement" section
interface EngagementValue {
  background: {
    image: string;
  };
  cta: {
    clicked_url: string;
    text: string;
  };
  description: string;
  thumbnail: string;
  title: string;
  top_left_icon_img: string;
}

// Props expected by the FreePdf component
interface FreePdfProps {
  courseData: APIData;
}

const FreePdf = ({ courseData }: FreePdfProps) => {
  // Find the specific section related to engagement (e.g., PDF CTA)
  const engagementSection = courseData.sections.find(
    (section) => section.type === "group_join_engagement"
  );

  // Safely extract the first engagement value
  const pdfData = engagementSection?.values?.[0] as EngagementValue | undefined;

  // If no data available, render nothing
  if (!pdfData) {
    return null;
  }

  return (
    <div
      className="flex gap-4 p-4 overflow-hidden rounded-xl md:p-8"
      style={{
        backgroundImage: `url(${pdfData.background.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Side: Text and CTA */}
      <div className="w-full md:w-1/2">
        {/* Optional top-left icon (e.g., pointer or badge) */}
        <div className="mb-4">
          <Image
            src={pdfData.top_left_icon_img}
            alt="Pointer icon"
            width={160}
            height={40}
            className="h-10 w-auto"
          />
        </div>

        {/* Title and description */}
        <h2 className="text-xl font-semibold text-white">{pdfData.title}</h2>
        <p className="mt-2 text-base text-[#ededed]">{pdfData.description}</p>

        {/* Call-to-action button to download the PDF */}
        <Link
          href={pdfData.cta.clicked_url}
          className="mt-6 inline-block px-4 py-2 text-white bg-green-600 hover:bg-green-700 rounded-md transition"
          aria-label="Download free IELTS PDF"
          download
        >
          {pdfData.cta.text}
        </Link>
      </div>

      {/* Right Side: Thumbnail image (only shown on medium and larger screens) */}
      <div className="items-center justify-end hidden w-1/2 md:flex">
        <Image
          src={pdfData.thumbnail}
          alt="IELTS Course Thumbnail"
          width={300}
          height={200}
          className="object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default FreePdf;
