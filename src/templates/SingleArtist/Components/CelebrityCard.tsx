import { ArtistList } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

type CelebrityCardProps = {
  list: ArtistList;
};

const CelebrityCard = ({list}: CelebrityCardProps) => {
  return (
    <div className="flex flex-col gap-4 justify-start max-w-[469px] p-8 rounded-xl overflow-hidden shadow-lg bg-gradient-to-b from-[rgba(12,10,21,1)] via-[rgba(12,10,21,0.6)] to-[rgba(12,10,21,0)]">
      <div className="h-fit overflow-hidden min-w-[22rem] min-h-[22rem] max-w-[22rem] max-h-[22rem]  rounded-t-full rounded-br-full bg-gradient-to-b from-[#222249] via-[#040424] to-[#000003] backdrop-blur-xl opacity-80 hover:opacity-100 transition-all duration-300">
        <Image
          width={1000}
          height={1000}
          src={list?.profile_pic ? list?.profile_pic : ""}
          className="w-full h-full object-cover flex justify-center text-center items-center  transition-all duration-300 cursor-pointer scale-100 hover:scale-110"
          alt={list?.professional_name ? list?.professional_name : ""}
        />
      </div>
      <div className="h-fit flex flex-col gap-2">
        <div className="font-normal leading-[38.73px] text-[32px] mb-2 text-white">
          {list?.professional_name ? list?.professional_name : ""}
        </div>
        <p
          className=" font-normal text-lg"
          style={{
            background: "linear-gradient(90deg, #F16633 80%, #FD2D7D 80%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Recently booked <span className="font-bold">12 March</span>
        </p>
        {list?.usp ? (
          <p className="text-lg font-normal text-white truncate w-[22rem]">
            {list?.usp}
          </p>
        ) : (
          <p className="text-lg font-normal text-transparent truncate w-[22rem]">
            Not Available
          </p>
        )}
        <div className="flex flex-col gap-4 py-4">
          <div className="flex items-center">
            <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input
                aria-labelledby="label1"
                checked
                type="radio"
                name="radio"
                className="checkbox appearance-none focus:opacity-100  focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none border rounded-full absolute cursor-pointer w-full h-full checked:border-none"
              />
              <div className="check-icon hidden bg-indigo-700 rounded-full w-full h-full "></div>
            </div>
            <label
              id="label1"
              className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
            >
              {list?.performance_duration ? list?.performance_duration : ""}
            </label>
          </div>
          <div className="flex items-center">
            <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input
                aria-labelledby="label1"
                checked
                type="radio"
                name="radio"
                className="checkbox appearance-none focus:opacity-100  focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none border rounded-full absolute cursor-pointer w-full h-full checked:border-none"
              />
              <div className="check-icon hidden bg-indigo-700 rounded-full w-full h-full z-1"></div>
            </div>
            <label
              id="label1"
              className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
            >
              {list?.languages ? list?.languages : ""}
            </label>
          </div>
        </div>
      </div>
      <div className="h-fit">
        <Link
          href={{ pathname: `/artist-profile/${list.slug}`, query: { profile: JSON.stringify(list) }}}
          className="flex gap-4 items-center  justify-center bg-gradient-to-r from-[#F16633CC] to-[#FD2D7DCC] hover:bg-gradient-to-b transition-all duration-400  py-4 px-6 rounded-full text-[24px] font-normal text-white"
        >
          Price and Book
          <FaArrowRightLong className="text-[22px]" />
        </Link>
      </div>
    </div>
  );
};

export { CelebrityCard };
