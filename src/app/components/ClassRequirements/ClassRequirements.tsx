import CheckIcon from "../Common/CheckIcon";

const ClassRequirements = () => {
  return (
    <div className="mb-0 w-full sm:w-[440px] lg:w-[740px] px-4 lg:px-0">
      <h2 className="mb-4 text-xl font-semibold md:text-2xl">
        ক্লাস করার জন্য প্রয়োজন হবে
      </h2>
      <div className="py-2 rounded-md md:border md:border-gray-300 md:p-6">
        <ul>
          {[
            "ইন্টারনেট সংযোগ (ওয়াইফাই বা মোবাইল ইন্টারনেট)",
            "স্মার্টফোন অথবা পিসি",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-2 mb-2">
              <CheckIcon />
              <h3>{item}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClassRequirements;
