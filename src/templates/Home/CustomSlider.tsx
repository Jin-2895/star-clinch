"use client";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { VideoSource } from "./VideoSource";

const customData = [
  {
    sources:
      "https://customer-f33zs165nr7gyfy4.cloudflarestream.com/6b9e68b07dfee8cc2d116e4c51d6a957/manifest/video.m3u8",
    title: "Big Buck Bunny",
  },
  {
    sources:
      "https://customer-f33zs165nr7gyfy4.cloudflarestream.com/6b9e68b07dfee8cc2d116e4c51d6a957/manifest/video.m3u8",
    title: "Elephant Dream",
  },
];

const CustomSlider = () => {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 235;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 235;
  };

  return (
    <div className="relative max-w-[500px] min-w-[550px] h-full">
      <div id="slider" className="bg-orange-400 rounded-tr-[225px] rounded-bl-[225px] h-full mx-auto flex flex-row gap-10 justify-start overflow-x-hidden overflow-y-hidden p-2">
            {customData.map(
              (item: { sources: string; title: string }) => (
                <div key={item.sources} className="w-full h-full">
                  <VideoSource src={item.sources} />
                </div>
              )
            )}
      </div>
      <button className="text-white text-2xl bg-[#373737] hover:bg-black h-[4rem] w-[4rem] cursor-pointer transition-all p-4 absolute left-0"
          title="scroll left"
          onClick={slideLeft}
        >
          <AiOutlineArrowLeft />
        </button>
        <button className="text-white text-2xl bg-[#373737] hover:bg-black h-[4rem] w-[4rem] cursor-pointer transition-all p-4 absolute right-0 my-auto"
          title="scroll right"
          onClick={slideRight}
        >
          <AiOutlineArrowRight />
        </button>
    </div>
  );
};

export { CustomSlider };
