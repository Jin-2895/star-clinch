import Image from "next/image";
import { Section } from "@/layout/Section";
import RightArrow from "@/icons/RightArrow";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Section3Heading, Section3Image } from "@/types/types";
import { motion } from "framer-motion";

type IPriceProps = {
  sectionThreeHeadings: Section3Heading[] | null;
  sectionThreeImages: Section3Image[] | null;
};

const Price = ({ sectionThreeHeadings, sectionThreeImages }: IPriceProps) => {

  const [sideText, setSideText] = useState<string[] | undefined | null>(null);

  useEffect(()=>{
    if(sectionThreeHeadings){
      const textSplit = sectionThreeHeadings[1]?.value.split(" ")
      setSideText(textSplit)
    }
  },[sectionThreeHeadings])

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
    "rounded-bl-full rounded-t-full",
  ];

  const animationStyle: number[] = [
    1,4,1,4,1,4,2,1,2,1,4,2,4,2,1,3,1,3
  ]

  return (
    <Section yPadding="px-[10rem] pt-[9rem]">
      <div className="relative h-fit">
        <div className="grid grid-cols-4 gap-4 ">
          {sectionThreeImages?.map(
            (list: { name: string; value: string }, index: number) => (
              <motion.div
                whileInView="visible"
                viewport={{ once: false }}
                initial={{ opacity: 0.01 }}
                animate={{ opacity: 1 }}
                transition={{ duration: animationStyle[index], ease: "easeIn" }}
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
              </motion.div>
            )
          )}
        </div>
        <div className="absolute bottom-0 left-0 flex flex-row justify-between items-center bg-gradient-to-b from-[#080810d0]  via-[#080810c5]  to-[#030305] to-65% h-82 py-20 max-w-66 w-full z-10 px-8">
          <div className="flex flex-row">
            <div className="flex flex-col text-white">
              <h1
                className={`${sectionThreeHeadings && sectionThreeHeadings[0]?.name} text-[160px] leading-[1]`}
              >
                
                {sectionThreeHeadings && sectionThreeHeadings[0]?.value}
                
              </h1>
              <p
                className={`${sectionThreeHeadings && sectionThreeHeadings[1]?.name} text-[24px] leading-[1]`}
              >
                {sideText &&
                      sideText?.map((el: string, i: number) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            duration: 4,
                            delay: i / 8,
                          }}
                          className={`${i >=1 && "text-gray-600" }`}
                        >
                          {el}{" "}
                        </motion.span>
                      ))}
              </p>
              
            </div>
          </div>
          <div className=" mt-10">
            <Link
              href="/celebrities"
              className={`${sectionThreeHeadings && sectionThreeHeadings[2]?.name} flex flex-row gap-10 text-[24px] text-white justify-center items-center bg-gradient-to-br from-[#F1663363] via-[#FD2D7D63] to-[#15121263] rounded-full px-14 py-4 border-[1px] border-gray-700`}
            >
              <p className="flex flex-col text-start">
                <span className="max-w-40">
                  {sectionThreeHeadings && sectionThreeHeadings[2]?.value}
                </span>
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
