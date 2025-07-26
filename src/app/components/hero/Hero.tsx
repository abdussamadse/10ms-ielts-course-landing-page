import Left from "./Left";
import Right from "./Right";

import { APIData } from "@/app/types/ielts-course";

interface HeroProps {
  courseData: APIData;
}

export default function Hero({ courseData }: HeroProps) {
  return (
    <div
      className="min-h-[300px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg')",
      }}
    >
      <div className="w-full max-w-[1200px] mx-auto relative">
        <div className="w-full flex min-h-[300px] px-3">
          {/* Header left */}
          <Left courseData={courseData} />
        </div>
        {/* Header right */}
        <Right courseData={courseData} />
      </div>
    </div>
  );
}
