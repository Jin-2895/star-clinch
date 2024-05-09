import { Section } from "@/layout/Section";
import React from "react";
import { ArtistList, VariousArtist } from "@/types/types";
import { FilterButton } from "./Components/FilterButton";
import { CelebrityCardMobile } from "./Components/CelebrityCardMobile";
import { GoSearch } from "react-icons/go";

type ISingleArtistBaseMobileProps = {
  mobileData?: VariousArtist | null | undefined;
};

const SingleArtistBaseMobile = ({
  mobileData,
}: ISingleArtistBaseMobileProps) => {
  console.log("mobileData", mobileData);
  return (
    <Section>
      <div className="flex flex-col  w-full mx-auto  justify-center">
        <h1 className="text-[30px] leading-[40.45px] mt-5 font-normal text-white text-center">
          {mobileData?.h1_heading}
        </h1>

        <p className="text-[10px] font-normal leading-[20.05px] mx-auto text-white transition-all duration-400">
          Choose from the vast and versatile sea of{" "}
          {mobileData?.artist_list?.length
            ? mobileData?.artist_list?.length - 1
            : ""}
          + {mobileData?.category?.name}
        </p>

        <div className="flex  flex-col items-center justify-center mx-auto w-full  gap-10">
          <div className="grid grid-cols-2  gap-2   ">
            <FilterButton num={1} />
            <FilterButton num={2} />
            <FilterButton num={3} />
            <FilterButton num={4} />
            <FilterButton num={5} />
          </div>
          <div className="max-w-full">
            <form className="w-full mx-auto">
              <div className=" w-full relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                  <GoSearch className="text-[26px] text-white" />
                </div>
                <input
                  type="search"
                  id="default-search"
                  className=" block ps-14 rounded-full bg-transparent w-full py-4  text-white placeholder-white focus:outline-none"
                  style={{
                    background:
                      "linear-gradient(to right, rgb(255 255 255 / 5%) 0%, rgba(255, 255, 255, 0.24) 44%, rgb(255 255 255 / 0%) 100%), linear-gradient(to right, rgb(0 0 0 / 0%), rgb(0, 0, 0) 44%, rgb(0 0 0 / 0%)",
                  }}
                  placeholder="Search for comedians like zakir khan etc etc"
                  required
                />
              </div>
            </form>
          </div>
        </div>
        <div className="w-full h-full  sm:mx-auto grid lg:grid-cols-3 sm:grid-cols-2 gap-4 justify-items-center my-20">
          {mobileData?.artist_list.map((list: ArtistList) => (
            <CelebrityCardMobile key={list?.id} list={list} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export { SingleArtistBaseMobile };
