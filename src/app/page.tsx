import { ApiResponse, APIData } from "@/app/types/ielts-course";
import Instructor from "./components/Instructor/Instructor";
import CourseStructure from "./components/CourseStructure/CourseStructure";
import FreePdf from "./components/FreePdf/FreePdf";
import WhatYouWillLearn from "./components/WhatYouWillLearn/WhatYouWillLearn";
import CourseAccordion from "./components/CourseContentPreview/CourseContentPreview";
import CourseDetails from "./components/CourseDetails/CourseDetails";
import ExclusiveFeature from "./components/ExclusiveFeature/ExclusiveFeature";
import FreeWithCourse from "./components/FreeWithCourse/FreeWithCourse";
import TestimonialSlider from "./components/TestimonialSlider/TestimonialSlider";
import ClassRequirements from "./components/ClassRequirements/ClassRequirements";
import PaymentInstructions from "./components/PaymentInstructions/PaymentInstructions";
import FAQSection from "./components/FAQSection/FAQSection";
import ContactHelp from "./components/ContactHelp/ContactHelp";
import RecommendedCourses from "./components/RecommendedCourses/RecommendedCourses";
import BuyCourseWrapper from "./components/BuyCourse/BuyCourseWrapper";
import Hero from "./components/Hero/Hero";

// Fetches the course data from the API
async function getCourseData(): Promise<APIData> {
  const res = await fetch(
    "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course",
    {
      next: { revalidate: 300 }, // Revalidates data every 300 seconds
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const json: ApiResponse = await res.json();
  return json.data;
}

export default async function Home() {
  const courseData = await getCourseData();

  return (
    <>
      {/* Hero Section */}
      <Hero courseData={courseData} />

      <div className="flex w-full max-w-[1200px] mx-auto mt-8 sm:gap-5 md:gap-10 lg:gap-16">
        <div className="flex flex-col w-full sm:w-[440px] lg:w-[740px] gap-14 px-3 lg:px-0">
          {/* Instructor Section */}
          <Instructor courseData={courseData} />

          {/* Course Structure Section */}
          <CourseStructure courseData={courseData} />

          {/* Free PDF Section */}
          <FreePdf courseData={courseData} />

          {/* What You Will Learn Section */}
          <WhatYouWillLearn courseData={courseData} />

          {/* Course Accordion Section */}
          <CourseAccordion />

          {/* Course Details Section */}
          <CourseDetails courseData={courseData} />

          {/* Exclusive Feature Section */}
          <ExclusiveFeature courseData={courseData} />

          {/* Free With Course Section*/}
          <FreeWithCourse courseData={courseData} />

          {/* Testimonial Section */}
          <TestimonialSlider courseData={courseData} />

          {/* Class Requirements Section*/}
          <ClassRequirements courseData={courseData} />

          {/* Payment Instructions Section*/}
          <PaymentInstructions courseData={courseData} />

          {/* FAQ Section Section*/}
          <FAQSection courseData={courseData} />

          {/* Contact Help Section*/}
          <ContactHelp />
        </div>

        {/* Sticky Price Section  */}
        <div className="hidden md:block w-[330px] lg:w-[400px]">
          <div className="sticky top-8">
            <BuyCourseWrapper courseData={courseData} />
          </div>
        </div>
      </div>

      {/* Contact Help Section*/}
      <div className="flex w-full max-w-[1200px] mx-auto my-14 px-3 lg:px-0">
        <RecommendedCourses />
      </div>
    </>
  );
}
