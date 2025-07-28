import Image from "next/image";

const items = [
  {
    title: "৫০+ ভিডিও লেকচার",
    description:
      "IELTS Academic ও General Training এর Overview, Format ও প্রশ্নের ধরন নিয়ে in-depth আলোচনা",
    image:
      "https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604651_1684834874567.png",
  },
  {
    title: "৩৮টি লেকচার শিট",
    description:
      "Reading, Writing, Listening ও Speaking এর প্রতিটি প্রশ্নের উত্তর করার স্ট্র্যাটেজি এবং 600+ Vocabulary",
    image:
      "https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604649_1684919669537.png",
  },
  {
    title: "রিডিং এন্ড লিসিনিং মক টেস্ট",
    description:
      "10 Reading ও 10 Listening Mock Tests এর মাধ্যমে প্রস্তুতি যাচাই",
    image:
      "https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604652_1684919731714.png",
  },
  {
    title: "ডাউট সল্ভিং লাইভ ক্লাস",
    description:
      "সাপ্তাহিক জুম ক্লাসে এক্সপার্ট টিচারের কাছে প্রবলেম সলভিং এর সুযোগ",
    image:
      "https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604649_%281%29_1684919813933.png",
  },
];

const CourseStructure = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <h2 className="text-xl font-semibold leading-[30px] text-black">
        কোর্সটি যেভাবে সাজানো হয়েছে
      </h2>

      <div className="grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8">
        {items.map((item, index) => (
          <div key={index} className="flex flex-row items-start gap-3 m-1">
            <div className="mb-4 mx-auto">
              <Image
                src={item.image}
                alt={item.title}
                width={36}
                height={36}
                loading="lazy"
              />
            </div>
            <div className="flex flex-col flex-1 gap-2">
              <h2 className="text-[18px] font-medium leading-[26px] text-white">
                {item.title}
              </h2>
              <h2 className="text-[14px] font-normal leading-[22px] text-[#9CA3AF]">
                {item.description}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseStructure;
