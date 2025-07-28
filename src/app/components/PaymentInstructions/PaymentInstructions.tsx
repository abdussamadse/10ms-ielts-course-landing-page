const PaymentInstructions = () => {
  return (
    <div className="w-full">
      <h2 className="mb-4 text-xl font-semibold md:text-2xl">
        যেভাবে পেমেন্ট করবেন
      </h2>
      <div className="rounded-md md:border md:border-gray-300 md:p-4 xs:py-2">
        <p>
          কীভাবে পেমেন্ট করবেন তা বিস্তারিত জানতে{" "}
          <span
            role="button"
            className="underline cursor-pointer text-green-600"
          >
            এই ভিডিওটি দেখুন
          </span>
        </p>
      </div>
    </div>
  );
};

export default PaymentInstructions;
