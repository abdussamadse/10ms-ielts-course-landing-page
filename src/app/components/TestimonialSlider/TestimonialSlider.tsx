"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa6";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { APIData } from "@/app/types/ielts-course";

// Interface for the component's internal use.
interface Testimonial {
  id: string;
  videoThumbnail?: string;
  text?: string;
  userImage: string;
  userName: string;
  userScore: string;
}

// Define the shape of a testimonial object from the API
interface APITestimonialValue {
  id: string;
  thumb?: string;
  testimonial: string;
  profile_image: string;
  name: string;
  description: string;
  video_url?: string;
}

// Define the type for the component's props
interface TestimonialSliderProps {
  courseData: APIData;
}

const TestimonialSlider = ({ courseData }: TestimonialSliderProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current && cardRef.current) {
      const cardWidth = cardRef.current.offsetWidth + 16; // 16px for gap
      const { scrollLeft } = scrollRef.current;
      const newScrollPosition =
        direction === "left" ? scrollLeft - cardWidth : scrollLeft + cardWidth;

      scrollRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  // Find the 'testimonials' section from the API data
  const testimonialsSection = courseData.sections.find(
    (section) => section.type === "testimonials"
  );

  // Transform the API data into the structure the component needs
  const testimonials: Testimonial[] =
    testimonialsSection?.values?.map((item) => {
      const apiItem = item as APITestimonialValue;
      return {
        id: apiItem.id,
        // If video_url exists, it's a video testimonial. Use the thumbnail.
        videoThumbnail: apiItem.video_url ? apiItem.thumb : undefined,
        // If there's NO video_url, it's a text testimonial. Use the testimonial text.
        text: !apiItem.video_url ? apiItem.testimonial : undefined,
        userImage: apiItem.profile_image,
        userName: apiItem.name,
        userScore: apiItem.description, // 'description' from API holds the score
      };
    }) || []; // Fallback to an empty array

  return (
    <div className="w-full">
      <h2 className="mb-4 text-xl font-semibold">
        {testimonialsSection?.name || "শিক্ষার্থীরা যা বলছে"}
      </h2>
      <div className="relative">
        <div className="relative">
          {/* Right Arrow */}
          <div
            onClick={() => scroll("right")}
            className="cursor-pointer absolute right-0 top-1/2 z-[3] -translate-y-1/2 hidden md:flex bg-[#a19b98] h-[38px] w-[38px] items-center justify-center rounded-full xl:mr-[-40px]"
          >
            <MdArrowForwardIos className="text-white" />
          </div>

          {/* Left Arrow */}
          <div
            onClick={() => scroll("left")}
            className="cursor-pointer absolute left-0 top-1/2 z-[2] -translate-y-1/2 hidden md:flex bg-[#a19b98] h-[38px] w-[38px] items-center justify-center rounded-full xl:ml-[-40px]"
          >
            <MdArrowBackIosNew className="text-white" />
          </div>

          {/* Scrollable Area */}
          <div
            ref={scrollRef}
            className="hideScrollbar relative flex flex-nowrap gap-4 overflow-x-scroll scroll-smooth snap-x snap-mandatory"
          >
            {testimonials.map((card: Testimonial, index: number) => (
              <div
                key={card.id}
                ref={index === 0 ? cardRef : null} // Attach ref to first card to measure width
                className="snap-start flex-shrink-0 relative mt-5 w-[260px] md:w-[372px] rounded-lg border border-gray-300 p-6 flex min-h-[250px] flex-col justify-between bg-white md:min-h-[297px]"
              >
                {/* Card Content */}
                <div>
                  <div className="absolute -top-4 left-5 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#FCE0D6] p-2">
                    <FaQuoteLeft />
                  </div>

                  {/* Conditional Content */}
                  {card.videoThumbnail ? (
                    <div className="w-full mb-4 overflow-hidden rounded-md aspect-video">
                      <div className="relative">
                        <span className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                          <Image
                            src="/icons/play.svg"
                            alt="Play"
                            height={48}
                            width={48}
                          />
                        </span>
                        <Image
                          src={card.videoThumbnail}
                          alt={card.userName}
                          width={372}
                          height={209}
                          className="w-full object-cover"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="my-4">
                      <p className="text-[16px] font-medium leading-[26px] line-clamp-5">
                        {card.text}
                      </p>
                      <button className="flex items-center text-sm font-normal text-[#1CAB55] my-2">
                        আরও দেখুন
                        <span className="ml-2">
                          <Image
                            src="/icons/see-more.svg"
                            alt="See more"
                            height={16}
                            width={16}
                          />
                        </span>
                      </button>
                    </div>
                  )}
                </div>

                {/* User Info */}
                <div className="flex items-center gap-4">
                  <div className="rounded-full overflow-hidden">
                    <Image
                      src={card.userImage}
                      alt={card.userName}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{card.userName}</h3>
                    <p className="text-sm text-gray-400">{card.userScore}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
