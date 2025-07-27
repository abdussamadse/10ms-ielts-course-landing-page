"use client";

import { useState } from "react";

const CourseDetails = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const sections = [
    {
      title: "IELTS Course-টি যাদের জন্য",
      content: (
        <ul className="prose prose-ul:pl-4 list-disc ml-4 flex flex-col gap-y-4">
          <li>যারা উচ্চশিক্ষা, মাইগ্রেশন বা চাকরির জন্য বিদেশে যেতে চান।</li>
          <li>
            যারা উচ্চশিক্ষা শেষে বা দেশে বসবাসরত অবস্থায় বিদেশে স্থায়ীভাবে
            বসবাসের জন্য আবেদন করতে চান।
          </li>
          <li>
            IELTS পরীক্ষা যাদের জন্য ভীতিকর, কিংবা যারা IELTS প্রস্তুতি কোথা
            থেকে শুরু করবেন তা জানেন না।
          </li>
          <li>
            যারা আগে পরীক্ষা দিয়েছেন কিন্তু নিজের IELTS Band Score বাড়াতে চান।
          </li>
          <li>
            যারা চাকরি বা ব্যবসার কাজে কিংবা ব্যক্তিগত আগ্রহে নিজেদের reading,
            writing, listening এবং speaking দক্ষতা বাড়াতে চান।
          </li>
          <li>
            স্টুডেন্ট কিংবা চাকরিজীবীদের মধ্যে যারা ব্যস্ততার কারনে ঘরে বসেই
            IELTS এর জন্য সেরা প্রস্তুতি নিতে চান।
          </li>
        </ul>
      ),
    },
    {
      title: "IELTS Course-টি কোর্স সম্পর্কে",
      content: (
        <div className="prose prose-ul:pl-4 space-y-5">
          <p>
            যুক্তরাষ্ট্রের ৩,৪০০ প্রতিষ্ঠানসহ পৃথিবীর ১১ হাজারেরও বেশি
            প্রতিষ্ঠানে IELTS exam score এর গ্রহণযোগ্যতা রয়েছে। এই পরীক্ষায়
            অত্যন্ত সুনিপুণভাবে পরীক্ষার্থীর ইংরেজি বলা, পড়া, শোনা ও লেখার
            ক্ষমতাকে যাচাই করা হয়।
          </p>
          <p>
            বিদেশি ভাষা হওয়ায় অনেকেই ইংরেজি গ্রামার নিয়ে ভয়ে থাকেন। তবে আনন্দের
            কথা হলো, IELTS পরীক্ষাটি ব্যাকরণভিত্তিক নয়। এটি মূলত একটি
            ভাষাভিত্তিক নিরীক্ষা পদ্ধতি। কাঙ্ক্ষিত স্কোর অর্জনের জন্য ইংরেজি
            ভাষার চারটি দক্ষতা আপনার প্রয়োজন: পড়তে পারা, লিখতে পারা, শুনে বুঝতে
            পারা, ও বলতে পারা। এই চারটি ক্ষেত্রে যিনি যত দক্ষ হবেন, IELTS
            পরীক্ষায় তিনি তত ভালো স্কোর পাবেন।
          </p>
          <p>
            ইংরেজি ভাষার এই চারটি অত্যাবশ্যক দক্ষতা বাড়াতে টেন মিনিট স্কুল নিয়ে
            এসেছে{" "}
            <a
              href="https://10minuteschool.com/ielts"
              target="_blank"
              className="text-blue-600 underline"
            >
              IELTS
            </a>{" "}
            পরীক্ষার্থীদের জন্য বিশেষভাবে সাজানো এই IELTS Course-টি। কোর্সটির
            শিক্ষক মুনজেরিন শহীদ (IELTS ব্যান্ড স্কোর 8.5/9) ইংল্যান্ডের
            বিশ্বখ্যাত অক্সফোর্ড বিশ্ববিদ্যালয়ের Department of Education হতে
            Applied Linguistics and Second Language Acquisition বিষয়ে
            স্নাতকোত্তর ডিগ্রী গ্রহণ করেছেন।
          </p>
          <p>
            আমাদের এই কোর্সটিতে এনরোল করলেই পাবেন মুনজেরিন শহীদের “ঘরে বসে IELTS
            প্রস্তুতি” বইটি সম্পূর্ণ ফ্রিতে! কোর্সের ভিডিও লেকচারের পাশাপাশি বই
            থেকে স্ট্র্যাটেজি শিখে ও প্র্যাকটিস করে সম্পূর্ণ প্রস্তুতি নিতে
            পারবেন। এই কোর্সটিতে আরও থাকছে IELTS Reading ও Listening Mock Test,
            যা আপনাকে দিবে IELTS পরীক্ষার রিয়েল এক্সপেরিয়েন্স এবং ব্যান্ড স্কোর
            সম্বন্ধে ধারণা। এছাড়াও প্র্যাক্টিসের সময় যেকোনো প্রবলেমের সমাধানের
            জন্য রয়েছে Expert Instructor-দের Problem Solving Live class। সুতরাং
            এবার এক IELTS Course-এ থাকছে Complete IELTS Preparation!
          </p>
          <p>
            আপনার IELTS পরীক্ষাকে আরো সহজ, উপভোগ্য ও ফলপ্রসূ করতে এবং কাঙ্ক্ষিত
            ব্যান্ড স্কোরটি পেতে আজই এনরোল করুন “IELTS Course by Munzereen
            Shahid”-এ, আর নিজেকে এগিয়ে নিয়ে যান আপনার স্বপ্নপূরণের
            দ্বারপ্রান্তে।
          </p>
        </div>
      ),
    },
    {
      title: "এই IELTS Course-টি আপনাকে যেভাবে সাহায্য করবে",
      content: (
        <ul className="prose prose-ul:pl-4 list-disc ml-4 flex flex-col gap-y-4">
          <li>
            “Academic IELTS” ও “General Training IELTS” - উভয় মডিউলের জন্যই
            কার্যকরভাবে ঘরে বসে প্রস্তুতি নিতে পারবেন।
          </li>
          <li>
            IELTS speaking, reading, listening ও writing test-এর প্রশ্নের ধরন
            অনুযায়ী টিপস, হ্যাকস ও টেকনিক শিখতে পারবেন।
          </li>
          <li>
            IELTS এর সব ধরনের প্রশ্ন সঠিকভাবে সমাধান করে হাতে কলমে প্রস্তুতি
            নিতে পারবেন।
          </li>
          <li>
            ভিডিও দেখার পাশাপাশি IELTS Course-এ থাকা লেকচার শিট, “ঘরে বসে IELTS
            প্রস্তুতি” বই এবং Doubt Solving Live Class-এর মাধ্যমে নিতে পারবেন
            কমপ্লিট প্রিপারাশন।
          </li>
          <li>
            কোর্স শেষ করার পর IELTS Reading and Listening mock test প্রশ্ন সল্‌ভ
            করার মাধ্যমে নিজের IELTS প্রস্তুতি ঝালিয়ে নিতে পারবেন।
          </li>
        </ul>
      ),
    },
  ];

  return (
    <div className="bg-white w-full sm:w-[440px] lg:w-[740px] px-4 lg:px-0 mt-4">
      <h2 className="text-lg md:text-xl font-bold md:mb-4">
        কোর্স সম্পর্কে বিস্তারিত
      </h2>
      <div className="md:border md:border-gray-300 rounded-md p-4 md:p-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className="border-b border-dashed border-gray-300 last:border-none"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center py-4 font-semibold text-left"
            >
              {section.title}
              <svg
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div className="pb-4 text-gray-700 text-sm">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;
