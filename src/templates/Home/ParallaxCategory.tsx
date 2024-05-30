"use-client";
import { Section8Image } from "@/types/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type ParallaxCaegoryProps = {
  sectionEightImages: Section8Image[] | null;
};

const ParallaxCategory = ({ sectionEightImages }: ParallaxCaegoryProps) => {
  const [scroller, setScroller] = useState({
    x: 0,
    y: 0,
    r: 0,
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {
      passive: true,
      capture: true,
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    const { pageYOffset } = window;
    if (pageYOffset >= 6088) {
      setScroller({
        x: 0,
        y: -pageYOffset + 6088,
        r: -pageYOffset + 6088,
      });
    }
  };

  console.log(scroller)
  return (
    <div
      className="pb-[10rem]"
      style={{
        height: "800px",
        paddingBottom: "40px",
        // overflow: "scroll",
        width: "100%",
      }}
    >
      <div className="h-[3000px] flex justify-center">
        <div className="h-[800px] absolute">
          <div className="gap-[20px] flex flex-row" id="reload">
            <div className="absolute w-[800px] h-[800px] z-20 overflow-hidden -left-[200px]">
              <div
                style={{
                  transform: `translateY(50%) rotate(${scroller.r}deg) scale(1,1)`,
                  transformOrigin: "-10% 0%",
                  transition: "transform 3s ease",
                }}
              >
                <h1
                  className="text-white text-[60px] font-bold capitalize"
                  style={{ padding: "70px 0 70px 70px" }}
                >
                  {sectionEightImages && sectionEightImages[1]?.name}
                </h1>

                <h1
                  className="text-white text-[60px] font-bold capitalize"
                  style={{
                    transform:
                      `translateX(-18%) translateY(-210%) translateZ(1px) rotate(-137deg) scale(1,1)`,
                    transformOrigin: "0% 0%",
                    padding: "50px 0 0px 70px",
                  }}
                >
                  {sectionEightImages && sectionEightImages[2]?.name}
                </h1>
                <h1
                  className="text-white text-[60px] font-bold capitalize"
                  style={{
                    transform:
                      "translateX(-18%) translateY(-140%) translateZ(1px) rotate(144deg) scale(1,1)",
                    transformOrigin: "0% 0%",
                    padding: "50px 0 0px 70px",
                  }}
                >
                  {sectionEightImages && sectionEightImages[3]?.name}
                </h1>
              </div>
            </div>
            <div className="rounded-full w-[800px] h-[800px] relative overflow-hidden border-[1px] border-yellow-500">
              <Image
                width={800}
                height={800}
                src={
                  scroller.r + 692 > -162
                    ? (sectionEightImages && sectionEightImages[1]?.value) || ""
                    : (sectionEightImages && sectionEightImages[2]?.value) || ""
                }
                className=" border-2 border-solid"
                alt="dummy"
              />

              <div
                style={{
                  transform: `translateY(${scroller.r + 692}%) rotate(0deg) scale(1,1)`,
                  transformOrigin: "-10% 0%",
                  transition: "transform 3s ease",
                }}
              >
                <div
                  className="rounded-full h-[800px] w-[800px] opacity-80 bg-[#ffbb00]"
                  style={{
                    transform:
                      "translateX(0px) translateY(26%) translateZ(0px) rotate(121deg) scale(1)",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxCategory;
