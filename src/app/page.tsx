import Hero from "@/app/components/hero/Hero";
import { ApiResponse, APIData } from "@/app/types/ielts-course";
import Instructor from "./components/Instructor/Instructor";
import CourseStructure from "./components/CourseStructure/CourseStructure";

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
    </>
  );
}
