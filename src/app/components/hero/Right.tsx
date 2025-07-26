import Image from "next/image";
import { APIData } from "@/app/types/ielts-course";

interface HeroProps {
  courseData: APIData;
}

export default function Right({ courseData }: HeroProps) {
  const checklist = Array.isArray(courseData?.checklist)
    ? courseData.checklist
    : [];

  return (
    <div className="w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-white absolute right-0 md:top-[50px]">
      <div className="md:sticky md:top-[112px] p-4 md:border-gray-800 md:rounded md:shadow-sm">
        {/* Video Thumbnail */}
        <div className="hidden md:block relative overflow-hidden bg-black aspect-video rounded">
          <Image
            src="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
            alt="IELTS Video Preview"
            width={867}
            height={480}
            className="w-full object-cover"
          />
          <span className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer">
            <Image
              src="/icons/play.svg"
              alt="Play Icon"
              width={56}
              height={56}
            />
          </span>
        </div>

        {/* Pricing Info */}
        <div className="flex items-center justify-between md:flex-col md:items-start">
          <div className="md:mb-3">
            <div className="inline-block text-2xl font-semibold text-black">
              ৳3850
            </div>
            <span className="inline-flex items-center ml-2">
              <del className="text-base font-normal text-gray-500 md:text-xl">
                ৳5000
              </del>
              <div className="inline-block ml-2">
                <p className="text-green-600 font-semibold text-sm md:text-base">
                  1150 ৳ ছাড়
                </p>
              </div>
            </span>
          </div>
        </div>

        <button className=" bg-green-600 text-white text-center whitespace-nowrap w-full md:w-full py-2 px-4 rounded text-lg font-medium hover:bg-green-700 transition">
          কোর্সটি কিনুন
        </button>

        {/* Checklist */}
        {checklist.length > 0 ? (
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">এই কোর্সে যা থাকছে</h3>
            <ul className="space-y-3 text-[#111827]">
              {checklist.map(
                (item) =>
                  item?.icon &&
                  item?.text && (
                    <li key={item.id} className="flex items-center gap-3">
                      <Image
                        src={item.icon}
                        alt={item.text}
                        width={24}
                        height={24}
                      />
                      <span>{item.text}</span>
                    </li>
                  )
              )}
            </ul>
          </div>
        ) : (
          <p className="text-sm text-gray-500 mt-6">কোনো তথ্য পাওয়া যায়নি।</p>
        )}
      </div>
    </div>
  );
}
