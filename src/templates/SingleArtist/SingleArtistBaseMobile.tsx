import { Section } from "@/layout/Section";
import React from "react";
import { CelebrityCardMobile } from "./Components/CelebrityCardMobile";
import { CelebrityCardV3Mobile } from "./Components/CelebrityCardV3Mobile";

const SingleArtistBaseMobile = () => {
  return (
    <Section>
      <div className="flex flex-col  w-full">
        {/* <div className="flex flex-col items-center justify-center mx-auto w-full mt-[120px] gap-10"> */}
        {/* <div className="flex flex-col gap-4 items-center justify-center">
          <h1 className="text-[64px] leading-[77.45px] font-normal">
            Comedians
          </h1>
          <p className="text-[24px] font-normal leading-[29.05px]">
            Choose from the vast and versatile sea of 130+ Comedians
          </p>
        </div> */}
        {/* <div className="flex  gap-8 mt-[120px]  flex-wrap">
            <FilterButton num={1} />
            <FilterButton num={2} />
            <FilterButton num={3} />
            <FilterButton num={4} />
            <FilterButton num={5} />
         
        </div> */}
        {/* </div> */}
        <div className="w-full h-full mx-auto grid lg:grid-cols-3 sm:grid-cols-2 gap-4 justify-items-center my-20">
          <CelebrityCardMobile img={"/celebrities/zakirkhan1.png"} />
          <CelebrityCardV3Mobile
            img={"/celebrities/aliAsghar.png"}
            name={" Sumona Chakravarti"}
            bookingDate={"2 October"}
          />
          <CelebrityCardMobile img={"/celebrities/zakirkhan1.png"} />

        </div>
        <div className="w-full h-full mx-auto grid lg:grid-cols-3 sm:grid-cols-2 gap-4 justify-items-center my-20">
          <CelebrityCardMobile img={"/celebrities/zakirkhan1.png"} />
          <CelebrityCardMobile img={"/celebrities/zakirkhan1.png"} />

          <CelebrityCardMobile img={"/celebrities/zakirkhan1.png"} />

        </div>
        {/* <div className="w-full max-w-[1660px] mx-auto grid lg:grid-cols-3 justify-between justify-items-center gap-4 my-20">
        <CelebrityCardV2
          name={' Sumona Chakravarti'}
          bookingDate={'2 October'}
          img='/celebrities/sumona.png'
        />
        <CelebrityCardV3
          name={' Sumona Chakravarti'}
          bookingDate={'2 October'}
          img='/celebrities/aliAsghar.png'
        />
        <CelebrityCardV2
          name={' Kapil Sharma'}
          bookingDate={'12 January'}
          img='/celebrities/kapil.png'
        />
      </div>
      <div className="w-full max-w-[1660px] mx-auto grid lg:grid-cols-3 justify-between justify-items-center gap-10 my-20">
        <CelebrityCardV4
          name={' Zakir Khan'}
          bookingDate={'12 March'}
          img='/celebrities/Zakir.png'
        />
        <CelebrityCardV4
          name={' Zakir Khan'}
          bookingDate={'12 March'}
          img='/celebrities/zakir.png'
        />
        <CelebrityCardV4
          name={' Zakir Khan'}
          bookingDate={'12 March'}
          img='/celebrities/zakir.png'
        />
      </div> */}
      </div>
    </Section>
  );
};

export { SingleArtistBaseMobile };