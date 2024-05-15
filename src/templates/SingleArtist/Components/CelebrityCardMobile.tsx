import { ArtistList } from "@/types/types";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

type Props = {
  list: ArtistList;
};

const CelebrityCardMobile = ({ list }: Props) => {
  return (
    <div className="relative flex flex-col my-8 justify-start max-h-[530px] h-screen w-full  rounded-xl overflow-hidden shadow-lg">
      <div
        className="w-full rounded-t-full  absolute z-10"
        style={{
          backgroundImage: `url(${list?.profile_pic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100%",
          boxShadow: "0px -200px 100px black inset",
        }}
      >
        <div className="absolute bottom-20 px-4 flex flex-col  w-full">
          <div className="font-normal leading-[20.73px] text-[25px] text-white">
            {list?.professional_name}
          </div>
          <p
            className="font-normal text-md"
            style={{
              background: "linear-gradient(90deg, #F16633 80%, #FD2D7D 80%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Recently booked <span className="font-bold">12 March</span>
          </p>
          {list?.usp ? (
            <p className="text-xs font-normal text-white truncate w-[19rem]">
              {list?.usp}
            </p>
          ) : (
            <p className="text-sm font-normal text-white truncate w-[22rem]">
              Not Available
            </p>
          )}
          <div className="flex flex-col gap-4 py-2">
            <div className="flex items-center">
              <div className="bg-white dark:bg-gray-100 rounded-full w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
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
          </div>
          <div className="flex items-center">
            <div className="bg-white dark:bg-gray-100 rounded-full w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
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

      <div className="h-fit absolute z-50 bottom-0 left-12">
        <Link
          href={{
            pathname: `/artist-profile/${list?.slug}`,
            query: { profile: JSON.stringify(list) },
          }}
          className="flex gap-4 items-center justify-center bg-gradient-to-r from-[#F16633CC] to-[#FD2D7DCC] hover:bg-gradient-to-b transition-all duration-400 py-4 px-6 rounded-full text-[24px] font-normal text-white"
        >
          Price and Book
          <FaArrowRightLong className="text-[22px]" />
        </Link>
      </div>
    </div>
  );
};

export { CelebrityCardMobile };