import React from "react";
import { motion } from "framer-motion";
import Amazon from "./amazon.png"
import Klarna from "./klarna.png"
import Spotify from "./spotify.png"
import Wise from "./wise.png"
import Image from "next/image";

type BuyersSliderProps = {
  marqueeVariants:  any
}

const BuyersSlider = ({marqueeVariants}: BuyersSliderProps) => {
  return (
    <div className="relative">
      <div className="relative w-full overflow-hidden z-10 pb-10">
        <motion.div
          className="flex gap-16"
          variants={marqueeVariants}
          animate="animate"

        >
          <div className="flex-shrink-0">
            <div className="flex flex-col items-center justify-center max-w-[12rem] max-h-[12rem]">
              <Image
                className="object-fit w-full h-full max-h-[10rem] max-w-[10rem]"
                width={150}
                height={150}
                src={Amazon}
                alt="amazon"
              />
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="flex flex-col items-center justify-center max-w-[12rem] max-h-[12rem]">
              <Image
                className="object-fit w-full h-full max-h-[10rem] max-w-[10rem]"
                width={150}
                height={150}
                src={Klarna}
                alt="klarna"
              />
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="flex flex-col items-center justify-center max-w-[12rem] max-h-[12rem]">
              <Image
                className="object-fit w-full h-full max-h-[10rem] max-w-[10rem]"
                width={150}
                height={150}
                src={Spotify}
                alt="spotify"
              />
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="flex flex-col items-center justify-center max-w-[12rem] max-h-[12rem]">
              <Image
                className="object-fit w-full h-full max-h-[10rem] max-w-[10rem]"
                width={150}
                height={150}
                src={Wise}
                alt="wise"
              />
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="flex flex-col items-center justify-center max-w-[12rem] max-h-[12rem]">
              <Image
                className="object-fit w-full h-full max-h-[10rem] max-w-[10rem]"
                width={150}
                height={150}
                src={Amazon}
                alt="amazon"
              />
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="flex flex-col items-center justify-center max-w-[12rem] max-h-[12rem]">
              <Image
                className="object-fit w-full h-full max-h-[10rem] max-w-[10rem]"
                width={150}
                height={150}
                src={Spotify}
                alt="spotify"
              />
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="flex flex-col items-center justify-center max-w-[12rem] max-h-[12rem]">
              <Image
                className="object-fit w-full h-full max-h-[10rem] max-w-[10rem]"
                width={150}
                height={150}
                src={Amazon}
                alt="amazon"
              />
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="flex flex-col items-center justify-center max-w-[12rem] max-h-[12rem]">
              <Image
                className="object-fit w-full h-full max-h-[10rem] max-w-[10rem]"
                width={150}
                height={150}
                src={Klarna}
                alt="klarna"
              />
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="flex flex-col items-center justify-center max-w-[12rem] max-h-[12rem]">
              <Image
                className="object-fit w-full h-full max-h-[10rem] max-w-[10rem]"
                width={150}
                height={150}
                src={Spotify}
                alt="spotify"
              />
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="flex flex-col items-center justify-center max-w-[12rem] max-h-[12rem]">
              <Image
                className="object-fit w-full h-full max-h-[10rem] max-w-[10rem]"
                width={150}
                height={150}
                src={Wise}
                alt="wise"
              />
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="flex flex-col items-center justify-center max-w-[12rem] max-h-[12rem]">
              <Image
                className="object-fit w-full h-full max-h-[10rem] max-w-[10rem]"
                width={150}
                height={150}
                src={Amazon}
                alt="amazon"
              />
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="flex flex-col items-center justify-center max-w-[12rem] max-h-[12rem]">
              <Image
                className="object-fit w-full h-full max-h-[10rem] max-w-[10rem]"
                width={150}
                height={150}
                src={Spotify}
                alt="spotify"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export { BuyersSlider };
