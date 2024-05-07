import { Section } from "@/layout/Section";
import React from "react";
import { GoSearch } from "react-icons/go";
import { FilterButton } from "./Components/FilterButton";
import { CelebrityCard } from "./Components/CelebrityCard";
import { CelebrityCardV2 } from "./Components/CelebrityCardV2";
import { CelebrityCardV3 } from "./Components/CelebrityCardV3";
import { CelebrityCardV4 } from "./Components/CelebrityCardV4";
import { CelebrityCardMobile } from "./Components/CelebrityCardMobile";
import { CelebrityCardV3Mobile } from "./Components/CelebrityCardV3Mobile";
import { FilterButtonMobile } from "./Components/FiterButtonMobile";

const SingleArtistMobile = () => {
  return (
    <Section>
      <div className="flex flex-col items-center justify-center w-full gap-2  ">
<div className="flex gap-2 py-8 flex-wrap px-1">
  <FilterButtonMobile name={'All'} />
  <FilterButtonMobile name={'Filters'} />
  <FilterButtonMobile name={'Sort'} />
  <FilterButtonMobile name={'Most Popular'} />
 
</div>
        <div className="w-full h-full mx-auto grid lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-2 justify-items-center ">
          <CelebrityCardMobile img={"/celebrities/zakirkhan1.png"} />
          <CelebrityCardV3Mobile
            img={"/celebrities/aliAsghar.png"}
            name={" Sumona Chakravarti"}
            bookingDate={"2 October"}
          />
          <CelebrityCardMobile img={"/celebrities/zakirkhan1.png"} />
         
        </div>
        <div className="w-full h-full mx-auto grid lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-2 justify-items-center ">
          <CelebrityCardMobile img={"/celebrities/zakirkhan1.png"} />
          <CelebrityCardMobile img={"/celebrities/zakirkhan1.png"} />

          <CelebrityCardMobile img={"/celebrities/zakirkhan1.png"} />
         
        </div>
         </div>
        
     
    </Section>
  );
};

export { SingleArtistMobile };
