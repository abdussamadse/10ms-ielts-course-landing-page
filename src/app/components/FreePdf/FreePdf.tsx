import Image from "next/image";

const FreePdf = () => {
  return (
    <div
      className="flex gap-4 p-4 mb-8 overflow-hidden rounded-xl md:p-8 md:mb-12 w-full sm:w-[410px] lg:w-[740px] mx-4 lg:mx-0"
      style={{
        backgroundImage:
          "url(https://cdn.10minuteschool.com/images/Free_class_card_BG_1722414654287.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Content */}
      <div className="w-full md:w-1/2">
        <div className="mb-4">
          <Image
            src="https://cdn.10minuteschool.com/images/catalog/product/pointer/467478234_1276985680016189_8175110495169425888_n_1732621150265.png"
            alt="Pointer icon"
            width={160}
            height={40}
            className="h-10 w-auto"
          />
        </div>
        <h2 className="text-xl font-semibold text-white">
          IELTS Confirm 7+ Score (Guideline)
        </h2>
        <p className="mt-2 text-base text-[#ededed]">
          IELTS ভালো score করার সেরা Strategies জানুন সেরাদের গাইডলাইনে ।
        </p>
        <button
          className="mt-6 px-4 py-2 text-white bg-green-600 hover:bg-green-700 rounded-md transition"
          aria-label="Download free IELTS PDF"
        >
          ফ্রি PDF Download করুন
        </button>
      </div>

      {/* Right Image (Only visible on md+) */}
      <div className="items-center justify-end hidden w-1/2 md:flex">
        <Image
          src="https://cdn.10minuteschool.com/images/catalog/product/pointer/Thumbnail_for_IELTS_Course_by_MS_1732621023962.jpg"
          alt="IELTS Course Thumbnail"
          width={300}
          height={200}
          className="object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default FreePdf;
