"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";

interface Course {
  id: number;
  title: string;
  instructor: string;
  image: string;
  price: number;
  originalPrice?: number;
  link: string;
}

const recommendedCourses: Course[] = [
  {
    id: 1,
    title: "IELTS LIVE Batch",
    instructor:
      "Zawad Hasan Adib, Saraf Samantha Khan, Salsabil Haque, Uttam Deb, Sharlin Ulfatt Bhuiyan",
    image:
      "https://cdn.10minuteschool.com/images/thumbnails/batch-12-ielts-live-batch-thumbnails.jpg",
    price: 8500,
    originalPrice: 10000,
    link: "/product/ielts-live-batch/?ref=ielts-live-batch&type=recommendation",
  },
  {
    id: 2,
    title: "ঘরে বসে Spoken English",
    instructor: "Munzereen Shahid",
    image:
      "https://cdn.10minuteschool.com/images/thumbnails/skills/ghore-boshe-Spoken-English-course-thumbnail-by-Munzereen-Shahid-16x9.jpg",
    price: 1950,
    link: "/product/ghore-boshe-spoken-english/?ref=ghore-boshe-spoken-english&type=recommendation",
  },
  {
    id: 3,
    title: "Email Marketing করে Freelancing",
    instructor: "Tisat Fatema Tia",
    image:
      "https://cdn.10minuteschool.com/images/catalog/media/16x9_1732445853307.jpg",
    price: 1950,
    link: "/product/email-marketing-course/?ref=email-marketing-course&type=recommendation",
  },
  {
    id: 4,
    title: "Complete English Grammar Course",
    instructor: "Munzereen Shahid",
    image:
      "https://cdn.10minuteschool.com/images/thumbnails/complete-grammar-course-thumbnail.jpg",
    price: 1950,
    link: "/product/english-grammar-course/?ref=english-grammar-course&type=recommendation",
  },
  {
    id: 5,
    title: "YouTube Marketing করে Freelancing",
    instructor: "Md. Sabbir Hossain",
    image:
      "https://cdn.10minuteschool.com/images/thumbnails/skills/youtube-marketing-course-thumbnail.jpg",
    price: 2500,
    link: "/product/youtube-marketing-course/?ref=youtube-marketing-course&type=recommendation",
  },
];

const RecommendedCoursesSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Auto scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current && cardRef.current) {
        const cardWidth = cardRef.current.offsetWidth + 16;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

        const isEnd = scrollLeft + clientWidth >= scrollWidth - 10;
        scrollRef.current.scrollTo({
          left: isEnd ? 0 : scrollLeft + cardWidth,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Manual scroll
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current && cardRef.current) {
      const cardWidth = cardRef.current.offsetWidth + 16;
      const scrollLeft = scrollRef.current.scrollLeft;
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - cardWidth
            : scrollLeft + cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full">
      {/* Header + Arrows */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">আপনার জন্য আরও কিছু কোর্স</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full border border-gray-300 hover:border-green-500"
          >
            <MdArrowBackIosNew size={18} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full border border-gray-300 hover:border-green-500"
          >
            <MdArrowForwardIos size={18} />
          </button>
        </div>
      </div>

      {/* Scrollable Card Area */}
      <div
        ref={scrollRef}
        className="hideScrollbar flex flex-nowrap gap-4 overflow-x-scroll scroll-smooth snap-x snap-mandatory"
      >
        {recommendedCourses.map((course, index) => (
          <Link href={course.link} key={course.id}>
            <div
              ref={index === 0 ? cardRef : null}
              className="snap-start flex-shrink-0 w-[272px] h-[280px] bg-white border border-gray-300 rounded-lg hover:border-green transition-colors p-3 flex flex-col justify-between"
            >
              {/* Image */}
              <div className="w-full h-[150px] mb-3 overflow-hidden rounded-md relative">
                <Image
                  src={course.image}
                  alt={course.title}
                  layout="fill"
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-sm font-semibold line-clamp-2 md:text-base mb-1">
                    {course.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2">
                    {course.instructor}
                  </p>
                </div>

                {/* Price */}
                <div className="mt-3 flex items-center">
                  <p className="text-sm font-semibold text-green-600">
                    ৳ {course.price}
                  </p>
                  {course.originalPrice && (
                    <del className="ml-2 text-sm text-gray-400">
                      ৳{course.originalPrice}
                    </del>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecommendedCoursesSlider;
