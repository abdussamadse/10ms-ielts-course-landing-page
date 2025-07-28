"use client";

import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "কোর্সটি কিনে কিভাবে শুরু করবো?",
      answer: (
        <div className="prose prose-p:leading-relaxed text-sm">
          <p>১) 'কোর্সটি কিনুন' বাটনে ক্লিক করুন</p>
          <p>২) 'শুরু করুন' বাটনে ক্লিক করুন</p>
          <p>৩) আপনার ফোন নম্বর বা ইমেইল দিয়ে লগ-ইন করুন</p>
          <p>৪) লগ-ইন হলে 'এগিয়ে যান' বাটনে ক্লিক করুন</p>
          <p>৫) পেমেন্ট মাধ্যম বেছে নিয়ে 'পেমেন্ট করুন' বাটনে ক্লিক করুন</p>
          <p className="mt-2">বিকাশে পেমেন্ট-এর ক্ষেত্রে:</p>
          <ul className="list-disc ml-5">
            <li>'বিকাশ' সিলেক্ট করুন ও চাইলে নম্বর সেইভ করুন</li>
            <li>'পেমেন্ট করুন' বাটনে ক্লিক করে গেটওয়েতে যান</li>
            <li>বিকাশ নম্বর ও পিন দিয়ে পেমেন্ট নিশ্চিত করুন</li>
            <li>
              ভিডিও:{" "}
              <a
                className="text-blue-600 underline"
                target="_blank"
                href="https://youtu.be/5wfn60rmWX4"
              >
                https://youtu.be/5wfn60rmWX4
              </a>
            </li>
          </ul>
          <p className="mt-2">
            ৬) পেমেন্ট শেষে 'কোর্স শুরু করুন' বাটনে ক্লিক করুন
          </p>
          <p>৭) 'আমার কোর্সসমূহ' সেকশনে কোর্সটি দেখতে পাবেন</p>
          <p>
            ৮) বিস্তারিত জানতে ভিডিও:{" "}
            <a
              className="text-blue-600 underline"
              target="_blank"
              href="https://youtu.be/eDrXWrl-SOU"
            >
              https://youtu.be/eDrXWrl-SOU
            </a>
          </p>
        </div>
      ),
    },
    {
      question:
        "যেকোনো টেকনিকাল সমস্যায় (পাসওয়ার্ড ভুলে যাওয়া, পাসওয়ার্ড পরিবর্তন, কোর্স রিফান্ড ইত্যাদি) কোথায় যোগাযোগ করবো?",
      answer: (
        <div className="prose text-sm">
          <p>১) পাসওয়ার্ড ভুলে গেলে:</p>
          <ul className="list-disc ml-5">
            <li>"Forget Password?" এ ক্লিক করুন</li>
            <li>OTP দিয়ে সাবমিট করুন</li>
            <li>নতুন পাসওয়ার্ড সেট করুন</li>
          </ul>
          <p>২) রিফান্ড চাইলে:</p>
          <ul className="list-disc ml-5">
            <li>৪৮ ঘণ্টার মধ্যে 16910 নম্বরে কল করুন</li>
            <li>৭–১৪ দিনের মধ্যে রিফান্ড হবে (কারণভিত্তিক)</li>
          </ul>
          <p className="italic text-xs">
            * কোর্স ভালো না লাগার কারণে রিফান্ড হয় না
          </p>
          <p className="mt-2">যোগাযোগ:</p>
          <ul className="list-disc ml-5">
            <li>কল: 16910</li>
            <li>ইমেইল: support@10minuteschool.com</li>
            <li>
              ফর্ম:{" "}
              <a
                href="https://forms.gle/buwAfFXP8V6c7gbY7"
                target="_blank"
                className="text-blue-600 underline"
              >
                https://forms.gle/buwAfFXP8V6c7gbY7
              </a>
            </li>
          </ul>
        </div>
      ),
    },
    {
      question:
        "আপনাদের এই  কোর্স কি একাডেমিক নাকি জেনারেল IELTS করার জন্য তৈরি করা?",
      answer: (
        <p className="text-sm text-gray-700 leading-relaxed">
          Academic কিংবা General—উভয় মডিউলের জন্যই এই কোর্সে উপযুক্ত গাইডলাইন
          রয়েছে।
        </p>
      ),
    },
    {
      question:
        "বাইরে অফলাইনে কোথাও ভর্তি না হয়ে আপনাদের এখানে অনলাইনে পড়লে কি সুবিধা পাবো?",
      answer: (
        <ul className="text-sm list-disc space-y-1">
          <p>এই কোর্সে ভর্তি হলে আপনি যে সুবিধাগুলো পাচ্ছেন</p>
          <p>
            ১) আপনার সুবিধামত সময়ে কোর্স ভিডিওগুলো দেখে বার বার প্রাক্টিস করতে
            পারবেন।
          </p>
          <p>
            ২) ১০টি Reading এবং Listening মক টেস্ট দিয়ে নিজেকে যাচাই করার সুযোগ
            রয়েছে।{" "}
          </p>
          <p>
            ৩) “ঘরে বসে IELTS প্রস্তুতি” বইটি পাচ্ছেন, যার মাধ্যমে আপনার
            Preparation হবে আরও বেশি মজবুত।
          </p>
          <p>
            ৪) আপনাদের জন্য থাকবে একটি "ফেসবুক সাপোর্ট গ্রুপ" যেখানে প্রতি
            সপ্তাহে Zoom ক্লাসে এক্সপার্ট টিচারের সাথে প্রবলেম সলভিং-এর সুযোগ
            থাকবে।
          </p>
        </ul>
      ),
    },
    {
      question: "লাইভ ক্লাসের সুযোগ আছে?",
      answer: (
        <p className="text-sm text-gray-700 leading-relaxed">
          আপনাদের জন্য থাকবে একটি "ফেসবুক সাপোর্ট গ্রুপ" যেখানে প্রতি সপ্তাহে
          Zoom ক্লাসে এক্সপার্ট টিচারের সাথে প্রবলেম সলভিং-এর সুযোগ রয়েছে।
        </p>
      ),
    },
  ];

  return (
    <div className="bg-white w-full sm:w-[440px] lg:w-[740px] px-4 lg:px-0">
      <h2 className="text-base md:text-xl font-bold mb-4" id="faq">
        সচরাচর জিজ্ঞাসা
      </h2>
      <div className="md:border md:border-gray-300 rounded-md p-4 md:p-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-dashed border-gray-300 last:border-none"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center py-4 font-semibold text-left gap-y-3"
            >
              {faq.question}
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
            {openIndex === index && <div className="pb-4 flex">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
