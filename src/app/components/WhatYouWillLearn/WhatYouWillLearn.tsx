const items = [
  "IELTS পরীক্ষার প্রত্যেক সেকশনের প্রশ্ন ও উত্তরের ধরন, টাইম ম্যানেজমেন্ট সম্পর্কিত গুরুত্বপূর্ণ টিপস, ট্রিকস ও স্ট্র্যাটেজি",
  "IELTS Writing Task 1 ও IELTS Writing Task 2 এর ক্ষেত্রে ভালো স্কোর পেতে সহায়ক Structure ও Essay type",
  "IELTS Speaking test-এ Advanced/ Power Words ব্যবহার করে যেকোনো টপিকে নির্ভুলভাবে কথা বলার পদ্ধতি",
  "সেরা IELTS প্রস্তুতি নিতে প্রতিটি মডিউলের নিয়ম-কানুনসহ খুঁটিনাটি বিষয়াদি নিয়ে বিস্তারিত ধারণা",
  "IELTS পরীক্ষা চলাকালে নির্ধারিত সময়ের সঠিক ব্যবহারের মাধ্যমে ভালো স্কোর অর্জনের কৌশল",
  "IELTS Reading এবং IELTS Listening Mock Test এর মাধ্যমে IELTS পরীক্ষার রিয়েল এক্সপেরিয়েন্স ও Band Score সম্বন্ধে পরিপূর্ণ ধারণা",
];

const WhatYouWillLearn = () => {
  const CheckIcon = () => (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className="mr-1 mt-[2px]"
      width={20}
      height={20}
      style={{ color: "#6294F8" }}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 
        12.586l7.293-7.293a1 1 0 011.414 0z"
      />
    </svg>
  );

  return (
    <div className="w-full sm:w-[440px] lg:w-[740px] px-4 lg:px-0">
      <h2 className="mb-4 text-xl font-semibold md:text-2xl">
        কোর্সটি করে যা শিখবেন
      </h2>
      <div className="rounded-md md:border md:border-gray-300">
        <div className="pt-2 md:p-6">
          <ul className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_1fr] md:gap-4">
            {items.map((text, index) => (
              <li key={index} className="flex items-start gap-2 mb-2">
                <CheckIcon />
                <div className="flex-1">{text}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhatYouWillLearn;
