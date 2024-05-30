'use client'
import { ArtistList } from "@/types/types";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

type CustomPerformerSliderProps = {
  images: ArtistList[] | null;
};

const CustomPerformerSlider = ({ images }: CustomPerformerSliderProps) => {
  console.log(images)
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <div className="relative w-full mx-auto">
      {images ? (
        <>
          <div className="flex items-center justify-between">
            <div className="flex-1 flex justify-center items-center relative overflow-hidden gap-10">
              <motion.div
                initial={{  opacity: 0 }}
                animate={{  opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 1 }}
                className={`min-w-[400px] min-h-[550px] transition-transform duration-500 ease-in-out`}
                style={{ transition: "transform 0.5s ease-in-out", position: "relative",
                clipPath: "polygon(100% -1%, 100% 101%, 0% 80%, 0% 20%)"
               }}
              >
               <Image
                  src={images[currentIndex]?.profile_pic || ""}
                  alt={`Slide ${images[currentIndex]?.professional_name}`}
                  className="w-[400px] h-[550px] rounded-lg opacity-30 object-cover"
                  width={800}
                  height={800}
                />
              </motion.div>
              <motion.div
                initial={{  opacity: 0 }}
                animate={{  opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 1 }}
                className={`min-w-[400px] min-h-[550px] transition-transform duration-500 ease-in-out bg-gradient-to-br from-black/20 via-gray-300/20 to-black/20 p-3  rounded-xl`}
                style={{ transition: "transform 0.5s ease-in-out" }}
              >
                <Image
                  src={images[currentIndex + 1]?.profile_pic || ""}
                  alt={`Slide ${images[currentIndex + 1]?.professional_name}`}
                  className="w-[400px] h-[550px] rounded-lg object-cover"
                  width={800}
                  height={800}
                />
              </motion.div>
              <motion.div
                initial={{  opacity: 0 }}
                animate={{  opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 1 }}
                className={`min-w-[400px] min-h-[550px] transition-transform duration-500 ease-in-out bg-gradient-to-br from-black/20 via-gray-300/20 to-black/20 p-3  rounded-xl`}
                style={{ transition: "transform 0.5s ease-in-out" }}
              >
                <Image
                  src={images[currentIndex + 2]?.profile_pic || ""}
                  alt={`Slide ${images[currentIndex + 2]?.professional_name}`}
                  className="w-[400px] h-[550px] rounded-lg object-cover"
                  width={800}
                  height={800}
                />
              </motion.div>
              <motion.div
                initial={{  opacity: 0 }}
                animate={{  opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 1 }}
                className={`min-w-[400px] min-h-[550px] transition-transform duration-500 ease-in-out`}
                style={{ transition: "transform 0.5s ease-in-out" }}
              >
                <Image
                  style={{
                    clipPath:
                      "polygon(0 0, 6% 0, 100% 20%, 100% 80%, 1% 101%, 0 100%)",
                  }}
                  src={images[currentIndex + 3]?.profile_pic || ""}
                  alt={`Slide ${images[currentIndex + 3]?.professional_name}`}
                  className="w-[400px] h-[550px] rounded-lg opacity-30 object-cover"
                  width={800}
                  height={800}
                />
              </motion.div>
            </div>
          </div>
          <div className="flex justify-center mt-12 space-x-2">
            <div
              onClick={() => setCurrentIndex(0)}
              className={`rounded-full cursor-pointer ${currentIndex == 0 ? "bg-white w-10" : "bg-gray-500 h-2 w-6"}`}
            />
            <div
              onClick={() => setCurrentIndex(1)}
              className={`rounded-full cursor-pointer ${currentIndex === 1 ? "bg-white w-10" : "bg-gray-500 h-2 w-6"}`}
            />
            <div
              onClick={() => setCurrentIndex(2)}
              className={`rounded-full cursor-pointer ${currentIndex === 2 ? "bg-white w-10" : "bg-gray-500 h-2 w-6"}`}
            />
            <div
              onClick={() => setCurrentIndex(3)}
              className={`rounded-full cursor-pointer ${currentIndex === 3 ? "bg-white w-10" : "bg-gray-500 h-2 w-6"}`}
            />
            <div
              onClick={() => setCurrentIndex(4)}
              className={`rounded-full cursor-pointer ${currentIndex === 4 ? "bg-white w-10" : "bg-gray-500 h-2 w-6"}`}
            />
            <div
              onClick={() => setCurrentIndex(5)}
              className={`rounded-full cursor-pointer ${currentIndex === 5 ? "bg-white w-10" : "bg-gray-500 h-2 w-6"}`}
            />
            <div
              onClick={() => setCurrentIndex(6)}
              className={`rounded-full cursor-pointer ${currentIndex === 6 ? "bg-white w-10" : "bg-gray-500 h-2 w-6"}`}
            />
            <div
              onClick={() => setCurrentIndex(7)}
              className={`rounded-full cursor-pointer ${currentIndex === 7 ? "bg-white w-10" : "bg-gray-500 h-2 w-6"}`}
            />
            <div
              onClick={() => setCurrentIndex(8)}
              className={`rounded-full cursor-pointer ${currentIndex === 8 ? "bg-white w-10" : "bg-gray-500 h-2 w-6"}`}
            />
            <div
              onClick={() => setCurrentIndex(9)}
              className={`rounded-full cursor-pointer ${currentIndex === 9 ? "bg-white w-10" : "bg-gray-500 h-2 w-6"}`}
            />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default CustomPerformerSlider;
