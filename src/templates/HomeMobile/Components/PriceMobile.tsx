import { Section3Heading, Section3Image } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type IPriceProps = {
  sectionThreeHeadings: Section3Heading[] | null;
  sectionThreeImages: Section3Image[] | null;
};
const PriceMobile = ({ sectionThreeHeadings, sectionThreeImages }: IPriceProps) => {
  console.log("sectionThreeHeadings",sectionThreeHeadings)


  
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
    <div className='h-[610px]  relative  overflow-hidden px-4'>
      <div className='grid grid-cols-2 gap-2 '>
      {sectionThreeImages?.map(
            (list: { name: string; value: string }, index: number) => (
              <div
                key={index}
                className="max-h-[300px] bg-gradient-to-t from-[#080810] to-transparent justify-center items-center flex"
              >
                <Image
                  className={`${borderStyling[`${index}`]} h-[100%] object-cover`}
                  src={list.value}
                  alt={list.name}
                  width={300}
                  height={300}
                />
              </div>
            )
          )}

      </div>
      <div className='absolute bottom-0 w-full py-24  bg-gradient-to-t  from-[#080810] via-[#080810]   to-transparent'></div>
      <div className='absolute bottom-0 w-full'>
        <p className='text-[64px] px-12 leading-[77px] text-white'>{sectionThreeHeadings && sectionThreeHeadings[0]?.value} </p>
        <p className='text-[18px] px-12 leading-[21.7px] text-white'>{sectionThreeHeadings && "Celebrities"} <span className='opacity-50'> to choose from </span> </p>
        <div className='px-12 -ml-3'>
            <Link
              href="/celebrities"
              className={`${sectionThreeHeadings && sectionThreeHeadings[2]?.name} flex  gap-2  text-[18px] text-white justify-center items-center bg-gradient-to-br from-[#F16633] to-[#FD2D7D] rounded-full px-6 py-2 border-[1px] border-gray-700`}
            >
              <p className="">
                <span className="">{sectionThreeHeadings && sectionThreeHeadings[2]?.value}</span>
              </p>
              <div className='w-10'><img src="assets/rightarrow.png" alt="" /></div>
            </Link>
          </div>
      </div>

    </div>
  )
}

export default PriceMobile