import Hero from "@/app/components/Hero/Hero";
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

      {/* Instructor Section */}
      <div className="flex w-full max-w-[1200px] mx-auto">
        <Instructor />
      </div>

      {/* Course Structure Section */}
      <div className="flex w-full max-w-[1200px] mx-auto mt-8">
        <CourseStructure />
      </div>

      {/* Free PDF Section */}
      <div className="flex w-full max-w-[1200px] mx-auto">
        <FreePdf />
      </div>

      {/* What You Will Learn Section */}
      <div className="flex w-full max-w-[1200px] mx-auto">
        <WhatYouWillLearn />
      </div>

      {/* Course Accordion Section */}
      <div className="flex w-full max-w-[1200px] mx-auto mt-8">
        <CourseAccordion />
      </div>

      {/* Course details section */}
      <div className="flex w-full max-w-[1200px] mx-auto mt-8">
        <CourseDetails />
      </div>

      {/* Exclusive Feature section */}
      <div className="flex w-full max-w-[1200px] mx-auto mt-8">
        <ExclusiveFeature />
      </div>

      {/* Free With Course */}
      <div className="flex w-full max-w-[1200px] mx-auto mt-8">
        <FreeWithCourse />
      </div>

      {/* Free With Course */}
      <div className="flex w-full max-w-[1200px] mx-auto mt-8">
        <TestimonialSlider />
      </div>

      {/* Class Requirements */}
      <div className="flex w-full max-w-[1200px] mx-auto mt-8">
        <ClassRequirements />
      </div>

      {/* Payment Instructions */}
      <div className="flex w-full max-w-[1200px] mx-auto mt-8">
        <PaymentInstructions />
      </div>

      {/* FAQ Section */}
      <div className="flex w-full max-w-[1200px] mx-auto mt-8">
        <FAQSection />
      </div>

      {/* Contact Help */}
      <div className="flex w-full max-w-[1200px] mx-auto mt-8">
        <ContactHelp />
      </div>

      {/* Contact Help */}
      <div className="flex w-full max-w-[1200px] mx-auto mt-8">
        <RecommendedCourses />
      </div>
    </>
  );
}
