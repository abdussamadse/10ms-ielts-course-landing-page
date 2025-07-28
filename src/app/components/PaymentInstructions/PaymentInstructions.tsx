import { APIData } from "@/app/types/ielts-course"; // Adjust path if needed

// Define the shape an API object *should* have for this section
interface HowToPayValue {
  // We'll assume the API would provide the content as a single HTML string
  content: string;
}

// Define the type for the component's props
interface PaymentInstructionsProps {
  courseData: APIData;
}

// Define the fallback content as an HTML string
const fallbackContent = `<p>কীভাবে পেমেন্ট করবেন তা বিস্তারিত জানতে <a href="#" target="_blank" rel="noopener noreferrer" class="underline cursor-pointer text-green-600">এই ভিডিওটি দেখুন</a></p>`;

const PaymentInstructions = ({ courseData }: PaymentInstructionsProps) => {
  // Find the 'how_to_pay' section from the API data
  const paymentSection = courseData.sections.find(
    (section) => section.type === "how_to_pay"
  );

  const apiValues = paymentSection?.values as HowToPayValue[] | undefined;

  // If the API provides content, use it. Otherwise, use the fallback.\
  const contentHtml =
    apiValues && apiValues.length > 0 && apiValues[0].content
      ? apiValues[0].content
      : fallbackContent;

  return (
    <div className="w-full">
      <h2 className="mb-4 text-xl font-semibold md:text-2xl">
        {/* Use the title from the API data, with a fallback */}
        {paymentSection?.name || "যেভাবে পেমেন্ট করবেন"}
      </h2>
      <div className="rounded-md md:border md:border-gray-300 md:p-4 xs:py-2">
        {/* 3. Render the content using dangerouslySetInnerHTML */}
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </div>
  );
};

export default PaymentInstructions;
