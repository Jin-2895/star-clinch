import { Section } from "@/layout/Section";
import React from "react";
import { CelebrityCardMobile } from "./Components/CelebrityCardMobile";
import { CelebrityCardV3Mobile } from "./Components/CelebrityCardV3Mobile";
import { VariousArtist } from "@/types/types";

type ISingleArtistMobileProps = {
  data?: VariousArtist | null | undefined;
}

const SingleArtistBaseMobile = ({data}: ISingleArtistMobileProps) => {
  console.log(data)
  return (
    <Section>
      <div className="flex flex-col  w-full">
        <div className="w-full h-full mx-auto grid lg:grid-cols-3 sm:grid-cols-2 gap-4 justify-items-center my-20">
          <CelebrityCardMobile img={"/celebrities/zakirkhan1.png"} />
          <CelebrityCardV3Mobile
            img={"/celebrities/aliAsghar.png"}
            name={" Sumona Chakravarti"}
            bookingDate={"2 October"}
          />
          <CelebrityCardMobile img={"/celebrities/zakirkhan1.png"} />

        </div>
       
      </div>
    </Section>
  );
};

export { SingleArtistBaseMobile };