"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Media } from "@/app/types/ielts-course";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroProps {
  courseData: {
    media: Media[];
  };
}

type MediaItem = {
  src: string;
  isVideo: boolean;
};

const ThumbnailCarousel = ({ courseData }: HeroProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const mediaItems: MediaItem[] = useMemo(() => {
    return courseData.media
      .filter((item) => item.name === "preview_gallery")
      .map((item) => ({
        src:
          item.resource_type === "video"
            ? item.thumbnail_url
            : item.resource_value,
        isVideo: item.resource_type === "video",
      }))
      .filter((item) => !!item.src); // remove items without valid src
  }, [courseData.media]);

  const goToPrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + mediaItems.length) % mediaItems.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
  };

  if (mediaItems.length === 0) return null;

  return (
    <div className="w-full max-w-lg mx-auto mb-8">
      {/* Main preview */}
      <div className="relative w-full aspect-video rounded overflow-hidden shadow-lg border border-gray-200">
        <Image
          src={mediaItems[currentIndex].src}
          alt="Main preview"
          width={800}
          height={450}
          className="w-full h-full object-cover"
        />
        {mediaItems[currentIndex].isVideo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/icons/play.svg"
              alt="Play Icon"
              width={50}
              height={50}
            />
          </div>
        )}

        {/* Navigation arrows */}
        <button
          onClick={goToPrev}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-white rounded-full p-1 shadow hover:bg-gray-100"
        >
          <ChevronLeft size={24} className="text-gray-500 cursor-pointer" />
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-white rounded-full p-1 shadow hover:bg-gray-100"
        >
          <ChevronRight size={24} className="text-gray-500 cursor-pointer" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="mt-4 flex gap-3 overflow-x-auto hideScrollbar px-2">
        {mediaItems.map((item, idx) => (
          <div
            key={idx}
            className={`relative w-[55px] flex-shrink-0 rounded cursor-pointer border-2 ${
              idx === currentIndex ? "border-[#1CAB55]" : "border-transparent"
            }`}
            onClick={() => setCurrentIndex(idx)}
          >
            <Image
              src={item.src}
              alt={`Thumbnail ${idx}`}
              width={86}
              height={50}
              className="w-full h-auto object-cover rounded"
            />
            {item.isVideo && (
              <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                <Image
                  src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
                  alt="Play icon"
                  width={16}
                  height={16}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThumbnailCarousel;
