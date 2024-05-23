import React, { useState } from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BannerSlider from "./BannerSlider";
import { Section2Video } from "@/types/types";

type IBannerProps = {
  sectionTwoVideos: Section2Video[] | null;
};

const BannerMobile =({  sectionTwoVideos }: IBannerProps)  => {
console.log(sectionTwoVideos)

const [sideText, setSideText] = useState<string[] | undefined>(
  sectionTwoVideos ? sectionTwoVideos[0]?.name.split("  ") : undefined
);
console.log(sideText)

  return (
    <div className='flex flex-col gap-4 my-6 '>
      <div className='mx-8 mb-6 flex flex-col gap-4'>
    <p className='font-normal text-[32px] leading-[38.73px] text-white'>Look What Stars have to say</p>
    <p className='font-normal text-[16px] leading-[19.3px] opacity-50 text-white'>Top celebrities share their thoughts on working with StarClinch.</p>
      </div>
      <div className="relative">
<BannerSlider    sectionTwoVideos={sectionTwoVideos}
                  setSideText={setSideText}/>
      </div>
      <div className="h-[294px] w-full relative">
        <img src="assets/mobilecircle2.png" alt="mobilecircle2.png" className="absolute left-0 bottom-0" />
     
        <img src="assets/mobilerightcircle.png" alt="mobilecircle3.png" className="absolute right-0 z-10 bottom-0" />
        <p className="text-white z-20 absolute bottom-16 text-[18px] leading-[29px] px-24">
  Perfectly organized event
  <span className="opacity-50"> at Pune and a huge </span> 
  shout out to StarClinch 
  <span className="opacity-50"> for this wonderful opportunity</span>
</p>
   
       </div>

    </div>
  )
}

export default BannerMobile