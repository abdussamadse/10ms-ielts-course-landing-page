"use client";

import Image from "next/image";

const FreeWithCourse = () => {
  return (
    <div className="w-full">
      <h2 className="my-4 text-xl font-semibold leading-[30px] text-black">
        এই কোর্সের সাথে ফ্রি পাচ্ছেন–
      </h2>

      <div
        className="relative w-full overflow-hidden bg-no-repeat bg-cover rounded-lg bg-[url('https://cdn.10minuteschool.com/images/banner_background_1731401239364.png')]"
        style={{ borderRadius: "20px" }}
      >
        {/* Background Effects */}
        <div
          className="p-4 absolute w-full h-full filter [&>*]:row-[1] [&>*]:col-[1]"
          style={{ display: "grid", gridTemplateColumns: "1fr" }}
        >
          <div className="relative w-full h-full opacity-30 rounded-xl" />
          <div className="rounded-2xl blur-sm mix-blend-hard-light overflow-hidden relative w-full h-full z-[1] before:content-[''] before:border-[6px] before:border-t-0 before:border-b-0 before:blur-[8px] before:absolute before:w-full before:h-full before:rounded-xl before:[border-image:conic-gradient(from_180deg_at_50%_50%,#FFE2BE_0deg,#FFA42D_36.0000005364418deg,#EDAE64_50.40000021457672deg,#8E9AFC_90.12555956840515deg,#67D1FF_102.59999871253967deg,#FFF_126.76394462585449deg,#FCD6F7_144.0000021457672deg,#F3CFFF_156.10909223556519deg,#CCA5F3_180deg,#E0CDF9_227.39765882492065deg,#472FFF_240.4190754890442deg,#479BFF_270deg,#B6E0FF_296.89493894577026deg,#FF8E75_323.99999141693115deg)_1]" />
          <div className="relative rounded-xl overflow-hidden w-full h-full z-[1] before:blur-[1.5px] before:absolute before:border before:w-full before:h-full before:content-[''] before:mix-blend-hard-light before:[border-image:conic-gradient(from_180deg_at_50%_50%,#FFE2BE_0deg,#FFA42D_36.0000005364418deg,#EDAE64_50.40000021457672deg,#8E9AFC_90.12555956840515deg,#67D1FF_102.59999871253967deg,#FFF_126.76394462585449deg,#FCD6F7_144.0000021457672deg,#F3CFFF_156.10909223556519deg,#CCA5F3_180deg,#E0CDF9_227.39765882492065deg,#472FFF_240.4190754890442deg,#479BFF_270deg,#B6E0FF_296.89493894577026deg,#FF8E75_323.99999141693115deg)_1]" />
          <div className="rounded-xl w-full h-full z-[1] border-2 border-white blur-[1px] mix-blend-soft-light" />
        </div>

        {/* Main Content */}
        <div className="text-white divide-y rounded-lg divide-dashed divide-slate-600 p-4 px-10 relative z-[1]">
          <div className="relative flex flex-col items-start justify-between gap-1 px-5 py-5 overflow-hidden md:flex-row">
            {/* Text Content */}
            <div className="flex flex-col items-start gap-1">
              <h3 className="mb-2 text-base md:text-xl font-semibold leading-[26px] text-white">
                ঘরে বসে IELTS প্রস্তুতি (Hardcopy Book)
              </h3>
              <div className="flex flex-col gap-2">
                <ul className="list-disc list-inside">
                  {[
                    "360 পৃষ্ঠা",
                    "প্রিমিয়াম হার্ডকপি",
                    "ফ্রি ডেলিভারি",
                    "৪ কর্মদিবসের মধ্যে সারাদেশে ডেলিভারি",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex flex-row items-center gap-3 text-sm font-normal leading-[24px] mb-1"
                    >
                      <span className="opacity-60">•</span>
                      <p className="text-[#fff] md:text-[16px]">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Book Image */}
            <div className="z-[1] flex w-full sm:items-center md:mr-5 md:w-fit md:items-end">
              <div
                className="mx-auto opacity-0 transition-opacity duration-300 ease-in-out"
                style={{ fontSize: "0px", opacity: 1 }}
              >
                <Image
                  src="https://cdn.10minuteschool.com/images/catalog/media/Book_Image_1731924602665.png"
                  alt="call us"
                  width={120}
                  height={150}
                  loading="lazy"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeWithCourse;
