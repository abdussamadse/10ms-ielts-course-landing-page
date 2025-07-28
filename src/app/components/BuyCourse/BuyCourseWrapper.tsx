"use client";

import { useEffect, useState } from "react";
import BuyCourse from "./BuyCourse";
import { APIData } from "@/app/types/ielts-course";

interface Props {
  courseData: APIData;
}

export default function BuyCourseWrapper({ courseData }: Props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 800);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`transition-opacity duration-300 ease-in-out ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <BuyCourse courseData={courseData} />
    </div>
  );
}
