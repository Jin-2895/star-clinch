import { ArtistList } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

type CelebrityCardProps = {
  list: ArtistList;
};

const CelebrityCard = ({ list }: CelebrityCardProps) => {
  const { slug } = useParams();

  return (
    <div className="py-4 px-4 flex flex-col gap-4 justify-start rounded-[2.5rem] bg-[#06060C] bg-gradient-t-b from-white to-black backdrop-blur-xl">
      <div className="h-fit overflow-hidden min-w-[22rem] min-h-[22rem] max-w-[22rem] max-h-[22rem]  rounded-t-full rounded-br-full mx-auto">
        <Link href={`${slug}/${list.slug}`}>
          <Image
            width={1000}
            height={1000}
            src={list?.profile_pic ? list?.profile_pic : ""}
            className="w-full h-full object-cover flex justify-center text-center items-center  transition-all duration-300 cursor-pointer scale-100 hover:scale-110"
            alt={list?.professional_name ? list?.professional_name : ""}
          />
        </Link>
      </div>
      <div className="h-fit flex flex-col gap-2">
        <div className="font-normal leading-[38.73px] text-[32px] mb-2 min-h-[78px] text-white">
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
          <p className="text-lg font-normal text-white line-clamp-2">
            {list?.usp}
          </p>
        ) : (
          <p className="text-lg font-normal text-transparent line-clamp-2">
            Not Available
          </p>
        )}
        <div className="flex flex-col gap-4 py-4">
          <div className="flex items-center">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                opacity="0.15"
                cx="12"
                cy="12.3848"
                r="12"
                fill="#D9D9D9"
              />
            </svg>

            <label
              id="label1"
              className="ml-2 text-sm leading-4 font-normal text-gray-200 dark:text-gray-100"
            >
              {list?.performance_duration ? list?.performance_duration : ""}
            </label>
          </div>
          <div className="flex items-center">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                opacity="0.15"
                cx="12"
                cy="12.3848"
                r="12"
                fill="#D9D9D9"
              />
            </svg>

            <label
              id="label1"
              className="ml-2 text-sm leading-4 font-normal text-gray-200 dark:text-gray-100 line-clamp-2"
            >
              {list?.languages ? list?.languages : ""}
            </label>
          </div>
        </div>
      </div>
      <div className="h-fit">
        <Link
          href={`${slug}/${list.slug}`}
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
