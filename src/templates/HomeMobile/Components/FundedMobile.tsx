import { Section3Heading } from "@/types/types";
import Image from "next/image";
import React from "react";
import { GoArrowRight } from "react-icons/go";

type IFundedProps = {
  sectionSevenHeadings: Section3Heading[] | null;
};
const FundedMobile = ({ sectionSevenHeadings }: IFundedProps) => {
  console.log(sectionSevenHeadings);

  const heading =
    sectionSevenHeadings && sectionSevenHeadings[0]?.value.split(" ");
  console.log(heading);
  return (
    <div className=" relative w-full  ">
      <div className="px-16 mt-4">
        <div className="relative">
          <Image width={400} height={400} src="/assets/fundcircle.png" alt="" />
          <p className="absolute top-24 mx-5  text-[32px] leading-[38px] text-center text-white">
            <span className="opacity-50">
              {heading?.[0]} {heading?.[1]}
            </span>{" "}
            {heading?.[2]} {heading?.[3]} {heading?.[4]} {heading?.[5]}{" "}
            <span className="opacity-50">
              {heading?.[6]} {heading?.[7]}
            </span>{" "}
            {heading?.[8]} {heading?.[9]}{" "}
          </p>
        </div>

        <div className="absolute top-64 left-32">
          <div className="max-w-[161px] max-h-[54px]  p-[0.7px]   rounded-full bg-gradient-to-r from-gray-500  via-black to-black">
            <div className="max-w-[160px] h-[53px]  rounded-full bg-black ">
              <div className="max-w-[160px] h-[53px] px-4  rounded-full bg-gradient-to-r flex items-center text-white from-white-0 via-white-10 text-[18px] to-white-0 gap-4 justify-center ">
                {sectionSevenHeadings && sectionSevenHeadings[1]?.value}{" "}
                <GoArrowRight />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-5 flex justify-center relative h-[427px]">
        <Image
          width={400}
          height={400}
          className="absolute flex justify-center top-0 "
          src="/assets/fund08.png"
          alt=""
        />
        <Image
          width={400}
          height={400}
          className="pt-24  "
          src="/assets/fundbg.png"
          alt=""
        />

        <div className="text-white bottom-10 px-10  absolute">
          <div className="flex text-wrap gap-3 mb-7">
            <Image
              width={400}
              height={400}
              className="max-w-5 mt-1 max-h-5"
              src="/assets/vector.png"
              alt=""
            />
            <p>Leveraging tech to give out the best price</p>
          </div>
          <div className="flex gap-3">
            <Image
              width={400}
              height={400}
              className="max-w-5 mt-1 max-h-5"
              src="/assets/vector.png"
              alt=""
            />
            <p>Reliable Booking and Hassle-free Refunds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundedMobile;
