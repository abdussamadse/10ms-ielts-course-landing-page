import Image from "next/image";
import Link from "next/link";

const Instructor = () => {
  return (
    <div className="w-full pt-4 mt-[480px] md:mt-0">
      <h2 className="mb-4 text-xl font-semibold md:text-2xl">
        কোর্স ইন্সট্রাক্টর
      </h2>
      <div className="flex items-center md:rounded-md md:border md:border-gray-300 md:px-5 md:pt-5 md:pb-8">
        <div>
          <div
            className="rounded-[50%] overflow-hidden transition-opacity duration-300 ease-in-out"
            style={{ fontSize: 0 }}
          >
            <Image
              src="https://cdn.10minuteschool.com/images/skills/lp/ms_onset.jpg"
              alt="Instructor Munzereen Shahid"
              width={73}
              height={73}
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex-1 ml-4">
          <h3 className="text-lg">
            <Link
              href="/skills/instructors/munzereen-shahid/"
              className="flex items-center "
            >
              <p className="hover:text-green-600">Munzereen Shahid</p>
              <span className="ml-2 pb-[2px]">
                <Image
                  src="/icons/right-arrow.svg"
                  alt="Right Arrow"
                  width={7}
                  height={11}
                />
              </span>
            </Link>
          </h3>
          <div className="text-sm">
            <p>
              MSc (English), University of Oxford (UK);
              <br />
              BA, MA (English), University of Dhaka;
              <br />
              IELTS: 8.5
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
