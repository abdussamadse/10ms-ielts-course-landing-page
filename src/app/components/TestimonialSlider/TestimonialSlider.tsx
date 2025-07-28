"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa6";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";

interface Testimonial {
  id: number;
  videoThumbnail?: string;
  text?: string;
  userImage: string;
  userName: string;
  userScore: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    videoThumbnail:
      "https://cdn.10minuteschool.com/images/catalog/product/testimonial/AvB2ibYd1z4-HD_1727177955435.jpg",
    userImage:
      "https://cdn.10minuteschool.com/images/catalog/product/testimonial/Screenshot_39_1746355488882.png",
    userName: "Junaed Bin Samad",
    userScore: "IELTS Score: 8.5",
  },
  {
    id: 2,
    videoThumbnail:
      "https://cdn.10minuteschool.com/images/catalog/product/testimonial/KcwncFcSIOY-HD_1727178045711.jpg",
    userImage:
      "https://cdn.10minuteschool.com/images/catalog/product/testimonial/Screenshot_45_1746359412430.png",
    userName: "Shah Mohammad Rafi",
    userScore: "IELTS Score: 8",
  },
  {
    id: 3,
    text: "আমি অনেক রিসোর্স দেখেছিলাম, কিন্তু এই কোর্সটাই ছিল সবচেয়ে organized! 8.0 স্কোর করতে পেরেছি কারণ এখানে প্রতিটি টপিক ছিল logically arranged আর super easy to understand! Mock test আর support group দুটোই আমার preparation-এ game-changer ছিল। বিশ্বাস করতে পারিনি এতটা smooth-ভাবে প্রস্তুতি নিতে পারবো।",
    userImage:
      "https://cdn.10minuteschool.com/images/catalog/product/testimonial/Screenshot_15_1746957495847.png",
    userName: "Asim Nabil",
    userScore: "IELTS Score: 8",
  },
  {
    id: 4,
    text: "আমি পুরো IELTS প্রিপারেশনটা নিয়েছি এই কোর্স থেকে—আর ফলাফল 7.5 স্কোর! Live classes, mock tests, আর Easy to understand লেসন–সবকিছুই বুঝতে সহজ ছিল। সাপোর্ট গ্রুপ আর doubt solving সেশনগুলো আমাকে অনেক সাহস দিয়েছে। এই কোর্স ছাড়া এতটা organized way-তে প্রস্তুতি নেওয়া সম্ভব হতো না।",
    userImage:
      "https://cdn.10minuteschool.com/images/catalog/product/testimonial/Screenshot_44_1746359283855.png",
    userName: "Moinul Islam Mahin",
    userScore: "IELTS Score: 7.5",
  },
];

const TestimonialSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current && cardRef.current) {
      const cardWidth = cardRef.current.offsetWidth + 16;
      const { scrollLeft } = scrollRef.current;
      const newScrollPosition =
        direction === "left" ? scrollLeft - cardWidth : scrollLeft + cardWidth;

      scrollRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full">
      <h2 className="mb-4 text-xl font-semibold">শিক্ষার্থীরা যা বলছে</h2>
      <div className="relative">
        <div className="relative">
          {/* Right Arrow */}
          <div
            onClick={() => scroll("right")}
            className="cursor-pointer absolute right-0 top-1/2 z-[3] -translate-y-1/2 mx-lg:hidden xl:mr-[-40px] bg-[#a19b98] h-[38px] w-[38px] items-center justify-center flex rounded-full"
          >
            <MdArrowForwardIos className="text-white" />
          </div>

          {/* Left Arrow */}
          <div
            onClick={() => scroll("left")}
            className="cursor-pointer absolute left-0 top-1/2 z-[2] -translate-y-1/2 mx-lg:hidden xl:ml-[-40px] bg-[#a19b98] h-[38px] w-[38px] items-center justify-center flex rounded-full"
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
                ref={index === 0 ? cardRef : null} // Attach ref only to first card
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
