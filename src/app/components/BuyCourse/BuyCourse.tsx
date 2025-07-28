import Image from "next/image";

import { APIData } from "@/app/types/ielts-course";

interface HeroProps {
  courseData: APIData;
}

export default function BuyCourse({ courseData }: HeroProps) {
  const checklist = Array.isArray(courseData?.checklist)
    ? courseData.checklist
    : [];

  return (
    <div className="w-full md:max-w-[330px] lg:min-w-[400px] bg-white mt-[600px]">
      <div className="md:sticky md:top-[112px] ">
        <div className="md:border-gray-300 md:border md:rounded md:shadow-sm p-4">
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

          <button className=" bg-green-600 text-white text-center whitespace-nowrap mt-2 md:mt-0 w-full md:w-full py-2 px-4 rounded text-lg font-medium hover:bg-green-700 transition">
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
        <p className="justify-between hidden mt-4 text-sm text-center text-gray-400 md:flex md:flex-col lg:flex lg:flex-row">
          <span>কোর্সটি সম্পর্কে বিস্তারিত জানতে</span>
          <span className="flex items-center justify-center ml-2 underline cursor-pointer text-green-600">
            <Image
              src="/icons/call.svg"
              alt="Phone Icon"
              width={16}
              height={16}
            />
            <span className="ml-1">ফোন করুন (16910)</span>
          </span>
        </p>
      </div>
    </div>
  );
}
