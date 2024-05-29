import { Section3Heading, Section6Data } from '@/types/types';
import React from 'react'




type ICommitmentProps = {
  sectionSixHeadings: Section3Heading[] | null;
  sectionSixData: Section6Data[] | null;
};
const CommitmentMobile = ({
  sectionSixHeadings,
  sectionSixData,
}: ICommitmentProps) => {

  console.log("sectionSixHeadings",sectionSixHeadings)
  console.log("sectionSixData",sectionSixData)
  const heading =sectionSixHeadings&&sectionSixHeadings[0]?.value
  const split = heading?.split(" ")
  console.log(split&&split[1])

  return (
    <div className='flex flex-col mt-6 h-[818px] w-full'>
      <div className="text-white text-[32px] leading-[38.7px] text-center mx-10">
      <p>{split&&split[0]} <span className="opacity-50"> {split&&split[1]}</span> <span className='opacity-50'>excellence </span> <span>Since 2015</span> </p>
      </div>
      <div className='relative  h-[273px] w-full'>
        <img  className='absolute left-0 bottom-0' src="assets/commitcircle1.png" alt="" />
        <img  className='absolute right-5 bottom-0' src="assets/commitcircle2.png" alt="" />
        <p className='absolute right-36 bottom-[80px] text-[40px] z-20 text-white' >{sectionSixData&&sectionSixData[4]?.value}</p>
      </div>

      <div className='flex flex-col  gap-3 mt-8 mx-4'>
        <div className='h-[99px] border-t-1 border-b-1 border-white-10  w-full'> 
        <div className='flex px-8 items-center gap-3 text-orange-800 h-full'>
        <p className='text-[48px]'>{sectionSixData&&sectionSixData[3]?.value}</p> 
        <p className='text-[18px] leading-[21px] mt-5'>{sectionSixData&&sectionSixData[3]?.name}</p> 
        </div>
        </div>
        
        <div className='h-[99px] bg-gradient-to-r from-white-0 via-white-10 to-white-0  w-full'> 
        <div className='flex px-8 items-center gap-3 text-[#eb8c9d] h-full'>
        <p className='text-[48px]'>{sectionSixData&&sectionSixData[5]?.value}</p> 
        <p className='text-[18px] leading-[21px] mt-5'>{sectionSixData&&sectionSixData[5]?.name}</p> 
        </div>
        </div>

        <div className='h-[99px] border-t-1 border-b-1 border-white-10  w-full'> 
        <div className='flex px-8 items-center gap-3 text-orange-800 h-full'>
        <p className='text-[48px]'>{sectionSixData&&sectionSixData[2]?.value}</p> 
        <p className='text-[18px] leading-[21px] mt-5'>{sectionSixData&&sectionSixData[2]?.name}</p> 
        </div>
        </div>

           
        <div className='h-[99px] bg-gradient-to-r from-white-0 via-white-10 to-white-0  w-full'> 
        <div className='flex px-8 items-center gap-3 text-[#eb8c9d] h-full'>
        <p className='text-[48px]'>{sectionSixData&&sectionSixData[6]?.value}</p> 
        <p className='text-[18px] leading-[21px] mt-5'>{sectionSixData&&sectionSixData[6]?.name}</p> 
        </div>
        </div>

      </div>


    </div>
  )
}

export default CommitmentMobile