import Image from "next/image";
import { APIData } from "@/app/types/ielts-course";
import ThumbnailCarousel from "./ThumbnailGallery";

interface HeroProps {
  courseData: APIData;
}

// HTML tag remover function
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}

export default function Left({ courseData }: HeroProps) {
  return (
    <div className="flex flex-col h-auto justify-center flex-1 md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_452px)] px-3 pt-6 lg:pt-0 lg:px-0">
      {/* Mobile Video */}
      <div className="block mt-4 md:mt-0 md:hidden">
        <ThumbnailCarousel courseData={courseData} />
      </div>

      {/* Course Title, Rating and Description */}
      <h1 className="text-white mb-2 text-[21px] font-semibold md:text-4xl">
        {courseData.title}
      </h1>

      <div className="mb-2">
        <button className="flex flex-row flex-wrap gap-2 text-white">
          <span className="inline-block">
            <Image
              src="https://cdn.10minuteschool.com/images/Dev_Handoff_Q1_24_Frame_2_1725444418666.png"
              alt="Rating Banner"
              width={130}
              height={40}
              className="md:w-[130px] w-[100px]"
            />
          </span>
          <span className="inline-block text-sm md:text-base">
            (৮২.৬% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
          </span>
        </button>
      </div>

      <div className="text-gray-400 pb-6">
        {stripHtml(courseData.description)}
      </div>
    </div>
  );
}
