/* eslint-disable react/prop-types */
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import React from "react";

type Props = {
  name?: string;
  bookingDate?: string;
  img?: string;
};

const CelebrityCardV3Mobile = (props: Props) => {
  return (
    <div className="flex flex-col justify-start items-center w-full h-screen max-w-[390px] max-h-[580px] px-8 rounded-xl overflow-hidden shadow-lg bg-[#0c0a15] rounded-b-full relative">
      <div className="flex flex-col justify-center items-center">
        <div className="max-w-[282.24px] max-h-[290.2px] w-full  overflow-hidden rounded-t-full rounded-br-full ">
          <Image
            width={1000}
            height={1000}
            src={props.img ? props.img : ""}
            className="w-full h-full p-2 rounded-t-full rounded-br-full"
            alt="Bharti Singh"
          />
        </div>
      {/* <div className="absolute bottom-0 opacity-5 -z-1 w-10 h-30  bg-gradient-to-r from-[rgba(191,242,233,0.84)] to-[rgba(0,0,0,0)] border-l-[140px] border-t-[200px] rounded-t-full border-t-gray-200 border-l-transparent border-r-[140px] border-r-transparent" ></div> */}
        <div className="pt-4 flex flex-col items-center">
          <div className="font-normal leading-[58.09px] text-[24px] mb-2 text-white">
            Did you Know?
          </div>
          <p className="text-center font-normal text-[16px] leading-tight text-white">
            Ali ASGAR was the most booked artist of this month with 8+ bookings
          </p>
        </div>
        <div className="pt-4 pb-2">
          <button
            className=" bg-transparent flex gap-4 items-center py-4 px-6 rounded-full "

          >
            <h1 className="text-[24px] font-bold bg-gradient-to-b from-[rgba(255,253,253,0.36)] via-[rgba(89,143,67,0.8)] to-[rgba(37,41,44,0.8)] inline-block text-transparent bg-clip-text">

              Checkout Profile 
            </h1>
            <FaArrowRightLong className=" text-[22px] " />
          </button>
        </div>
      </div>



    </div>
  );
};

export { CelebrityCardV3Mobile };