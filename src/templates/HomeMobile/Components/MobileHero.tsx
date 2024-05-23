import { Section1Item } from '@/types/types';
import React from 'react'
import SearchMobile from './SreachMobile';
import Celebrity from '@/public/celebrities/CelebOne';




type IHeroProps = {
  sectionOne: Section1Item[] | null;
};

const MobileHero = ({ sectionOne }: IHeroProps) => {
  console.log("sectionOne",sectionOne)
  return (
    <div className='h-[880px]  w-full'>
      <div  className='bg-[#212132] h-full mx-3 mt-5 rounded-t-full'>

      <div className="flex  flex-col items-center overflow-hidden  ">
      <div className="text-center pt-16">
              <SearchMobile />
            </div>
            <div className=" my-8">
              <h1 className="text-center mx-4 text-[48px] font-normal leading-[59px] text-white">
                Book a 
              </h1>
            <div className='flex justify-center '>
            <h1 className="text-center   text-[48px] font-normal leading-[59px] text-white">
                 Celebrity
              </h1>
              <img className='absolute ml-20' src="assets/Rectangle 5409.png" alt="" />
            </div>
              <p className="text-center text-[48px] font-normal leading-[59px] text-white opacity-50">
                for your 
              </p>
              <p className="text-center text-[48px] font-normal leading-[59px] text-white">
                 Iconic Event
              </p>
            </div>
            <div className="mx-auto">
              <div className="flex flex-row gap-1 w-fit">
                <div className="relative max-w-[13rem] min-w-[13rem] min-h-[25rem] overflow-hidden rounded-t-full">
                  <Celebrity
                    celebProps={sectionOne}
                    style="celebrity-one object-cover"
                  />
                  <img className='absolute z-50 bottom-0' src="assets/mobilecircle.png" alt="" />
                </div>
                <div className="flex flex-row items-end justify-between  ">
                  <div className="flex relative flex-col gap-2">
             

                    <img className='absolute z-40 top-[142px] right-[63%]' src="assets/Star 5.png" alt="" />
                    <img className='absolute z-40 top-[152px] right-[69%]' src="assets/Group.png" alt="" />
                    <img className='absolute z-50 top-[197px] right-[77%] ' src="assets/STARCLINCH.png" alt="" />
                    <img className='absolute z-40 top-[220px] right-[69%]' src="assets/Group (1).png" alt="" />

                 
                   
                    <div className="relative max-w-[13rem] min-w-[13rem] min-h-[13rem] overflow-hidden rounded-t-full rounded-bl-full">
                      <Celebrity
                        celebProps={sectionOne}
                        style="celebrity-two object-cover"
                      />
                  <img className='absolute z-50 right-2 top-20 ' src="assets/anchormobile.png" alt="" />
                    
                    </div>
                    <div className="relative max-w-[13rem] min-w-[13rem] min-h-[13rem] overflow-hidden">
                      <Celebrity
                        celebProps={sectionOne}
                        style="celebrity-three object-cover"
                      />
                    </div>
                  </div>
              
                </div>
               
              </div>
            </div>

        </div>


      </div>


    </div>
  )
}

export default MobileHero