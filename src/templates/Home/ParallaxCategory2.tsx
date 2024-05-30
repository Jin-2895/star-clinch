"use-client";
import { Section8Image } from "@/types/types";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type ParallaxCategoryProps = {
  sectionEightImages: Section8Image[] | null;
};

const ParallaxCategory2 = ({ sectionEightImages }: ParallaxCategoryProps) => {
  const [counter, setCounter] = useState(0);
  const [proCount, setProCount] = useState(0);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (event.deltaY < 0) {
        setCounter((prev) => prev + 2);
        setProCount((prev) => (prev + 1) % (sectionEightImages?.length || 1));
      } else if (event.deltaY > 0) {
        setCounter((prev) => prev - 2);
        setProCount((prev) => (prev - 1 + (sectionEightImages?.length || 1)) % (sectionEightImages?.length || 1));
      }
    };

    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [sectionEightImages]);

  const getTranslate = (index: number) => {
    switch (index) {
      case 1:
        return '55%, -155%';
      case 2:
        return '-50%, -200%';
      case 3:
        return '-155%, -155%';
      case 4:
        return '-200%, -50%';
      case 5:
        return '-155%, 55%';
      default:
        return;
    }
  };

  const getRotate = (index: number) => {
    return -index * 45;
  };

  return (
    <div className="relative flex items-center min-h-screen text-white overflow-hidden">
      <div className="masking-element absolute top-0 left-0 w-full h-full bg-transparent overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 w-[40.1rem] h-[40.1rem] bg-transparent rounded-full border-2 border-orange-600" style={{ transform: 'translate(-50%, -50%)' }} />
      </div>
      <h1 className="text-[38px] leading-tight absolute top-[50%] right-0 z-30 bg-gradient-to-r from-white/20 via-pink-300 to-orange-800 text-transparent bg-clip-text">Explore all Categories</h1>
      <div className="masking-element absolute top-0 left-0 w-full h-full bg-transparent overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/2 left-0 w-[40rem] h-[40rem] bg-transparent rounded-full" style={{ transform: 'translate(-50%, -50%)' }} />
      </div>
      <div
        className="relative w-0 h-0"
        style={{
          transform: `rotate(${counter}deg)`,
          transition: 'all 1s ease-out',
        }}
      >
        {sectionEightImages && sectionEightImages.map((image, index) => (
          index !== 0 && (
            <motion.div
              key={index}
              className={`absolute w-72 h-72 transition-all ease-out duration-300 z-30 ${
                proCount === index ? 'active' : ''
              }`}
              style={{
                left: '0',
                top: '50%',
                transform: `translate(${getTranslate(index)}) rotate(${getRotate(index)}deg)`,
              }}
            >
              <div
                className={`absolute inset-y-0 w-[290%] transition-all ease-out duration-300 flex justify-start items-center ${
                  proCount === index ? 'text-white' : 'text-gray-300'
                }`}
              >
                <h3 className="m-0 mb-2 text-[88px] leading-tight capitalize">{image.name}</h3>
              </div>
            </motion.div>
          )
        ))}
      </div>
      <div
        className={`absolute transition-opacity duration-500 ease-out w-[40rem] h-[40rem] z-0`}
        style={{
          transform: `translate(-50%, -50%)`,
          top: '50%',
          left: '50%',
        }}
      >
        <Image
          width={800}
          height={800}
          className="m-0 inset-0 absolute object-cover rounded-full w-[40rem] h-[40rem]"
          style={{
            transition: 'all 1s ease-out',
            clipPath: 'circle(50% at 50% 50%)',
          }}
          src={sectionEightImages && sectionEightImages[proCount === 0  ? proCount + 1 : proCount === 6 ? proCount - 1 : proCount ]?.value || ""}
          alt={`image-${proCount === 0  ? proCount + 1 : proCount === 6 ? proCount - 1 : proCount }`}
        />
      </div>
     
    </div>
  );
};

export default ParallaxCategory2;
