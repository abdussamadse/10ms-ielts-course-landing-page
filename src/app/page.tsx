import Hero from "@/app/components/hero/Hero";
import { ApiResponse, APIData } from "@/app/types/ielts-course";

// Fetches the course data from the API
async function getCourseData(): Promise<APIData> {
  const res = await fetch(
    "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course",
    {
      next: { revalidate: 180 }, // Revalidates data every 180 seconds
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
    </>
  );
}
