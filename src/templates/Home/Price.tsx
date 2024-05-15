import Image from "next/image";
import { Section } from "@/layout/Section";
import RightArrow from "@/icons/RightArrow";
import React from "react";
import Link from "next/link";
import { Section3Heading, Section3Image } from "@/types/types";

type IPriceProps = {
  sectionThreeHeadings: Section3Heading[] | null;
  sectionThreeImages: Section3Image[] | null;
};

const Price = ({ sectionThreeHeadings, sectionThreeImages }: IPriceProps) => {

  const borderStyling: string[] = [
    "rounded-bl-full rounded-t-full",
    "rounded-xl",
    "rounded-bl-full rounded-t-full",
    "rounded-xl",
    "rounded-xl",
    "rounded-tr-[45%]",
    "rounded-xl",
    "rounded-tr-[45%]",
    "rounded-tl-[45%]",
    "rounded-t-full",
    "rounded-tl-[45%]",
    "rounded-t-full",
    "rounded-tl-full rounded-t-full",
    "rounded-bl-full rounded-t-full",
    "rounded-bl-full rounded-t-full",
    "rounded-bl-full rounded-t-full",
    "rounded-bl-full rounded-t-full",
    "rounded-bl-full rounded-t-full"
  ];

  return (
    <Section yPadding="pt-12 px-[10rem]">
      <div className="relative h-fit">
        <div className="grid grid-cols-4 gap-4 ">
          {sectionThreeImages?.map(
            (list: { name: string; value: string }, index: number) => (
              <div
                key={index}
                className="max-h-[340px] justify-center items-center flex"
              >
                <Image
                  className={`${borderStyling[`${index}`]} h-[100%] object-cover`}
                  src={list.value}
                  alt={list.name}
                  width={320}
                  height={320}
                />
              </div>
            )
          )}
        </div>
        <div className="absolute bottom-0 -left-1 flex flex-row justify-between items-center bg-gradient-to-b from-transparent to-black h-82 max-w-66 w-full z-10 px-10 backdrop-blur-[2px]">
          <div className="flex flex-row px-14 py-10">
            <div className="flex flex-col text-white">
              <h1 className={`${sectionThreeHeadings && sectionThreeHeadings[0]?.name} text-[160px]`}>{sectionThreeHeadings && sectionThreeHeadings[0]?.value}</h1>
              <p className={`${sectionThreeHeadings && sectionThreeHeadings[1]?.name} text-[24px]`}>{sectionThreeHeadings && sectionThreeHeadings[1]?.value}</p>
            </div>
          </div>
          <div>
            <Link
              href="/celebrities"
              className={`${sectionThreeHeadings && sectionThreeHeadings[2]?.name} flex flex-row gap-10 text-[24px] text-white justify-center items-center bg-gradient-to-br from-[#F1663363] via-[#FD2D7D63] to-[#15121263] rounded-full px-14 py-4 border-[1px] border-gray-700`}
            >
              <p className="flex flex-col text-start">
                <span className="max-w-40">{sectionThreeHeadings && sectionThreeHeadings[2]?.value}</span>
              </p>
              <RightArrow />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export { Price };
