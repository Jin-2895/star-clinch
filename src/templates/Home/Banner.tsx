import { motion } from "framer-motion";
import { CTABanner } from "../../cta/CTABanner";
import { Section } from "../../layout/Section";
import { DefaultCarousel } from "./DefaultCarousel";
import React, { useRef, useState } from "react";

const data = [
  {
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    image:
      "https://images.pexels.com/photos/15475219/pexels-photo-15475219/free-photo-of-hill-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Big Buck Bunny",
    text: "Perfectly organized event at pune and a huge shout out to StarClinch for this wonderful opportunity",
    author: "arijit Singh",
  },
  {
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    image:
      "https://images.pexels.com/photos/22626143/pexels-photo-22626143/free-photo-of-a-woman-with-curly-hair-and-a-white-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Elephant Dream",
    text: "Perfectly organized event at pune and a huge shout out to StarClinch for this wonderful opportunity",
    author: "Shreya Ghoshal",
  },
  {
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    image:
      "https://images.pexels.com/photos/22858523/pexels-photo-22858523/free-photo-of-s-curve-chicago.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "For Bigger Blazes",
    text: "Perfectly organized event at pune and a huge shout out to StarClinch for this wonderful opportunity",
    author: "kishore kumar",
  },
  {
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    image:
      "https://images.pexels.com/photos/20985362/pexels-photo-20985362/free-photo-of-cerro-2.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "For Bigger Escape",
    text: "Perfectly organized event at pune and a huge shout out to StarClinch for this wonderful opportunity",
    author: "Sonu nigham",
  },
  {
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    image:
      "https://images.pexels.com/photos/19501709/pexels-photo-19501709/free-photo-of-black-and-white-shot-of-a-young-woman-standing-outside-in-the-dark-and-looking-away.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "For Bigger Fun",
    text: "Perfectly organized event at pune and a huge shout out to StarClinch for this wonderful opportunity",
    author: "Udit narayan",
  },
  {
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    image:
      "https://images.pexels.com/photos/21751135/pexels-photo-21751135/free-photo-of-black-and-white-photo-of-a-village-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "For Bigger Joyrides",
    text: "Perfectly organized event at pune and a huge shout out to StarClinch for this wonderful opportunity",
    author: "Neha kakkar",
  },
  {
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    image:
      "https://images.pexels.com/photos/22741673/pexels-photo-22741673/free-photo-of-self.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "For Bigger Meltdowns",
    text: "Perfectly organized event at pune and a huge shout out to StarClinch for this wonderful opportunity",
    author: "Neha kakkar",
  },
];

const text =
  "Perfectly organized event at pune and a huge shout out to StarClinch for this wonderful opportunity".split(
    " "
  );

const Banner = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [stop, setStop] = useState<boolean>(false);

  const handleVideo = () => {    
    setStop(!stop);
    if (stop === true && videoRef.current) {
      videoRef.current.pause();
    } else {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }
  };

  return (
    <Section>
      <CTABanner
        title="Look What Stars have to say"
        subtitle="Recognized excellence by the top celebrities. Get the inside scoop - top celebrities share their thoughts on working with StarClinch."
        style=""
        section={
          <div className="relative">
            <div className="absolute flex bottom-0 -left-[9rem] justify-center items-center -z-10">
              <div className="w-[20rem] h-[15rem] rounded-t-full bg-gradient-to-bl from-[#FF774CB8] from-20% via-[#DD4B9AB8] via-35% to-[#080810] to-60% backdrop-blur-2xl"></div>
            </div>

            <div className="flex flex-row gap-10 h-full justify-between px-24">
              <div className="border-l-[1px] rounded-sm border-l-gray-700 rounded-tl-[15rem] bg-gradient-to-r from-[#FFFDFD0B] to-transparent backdrop-blur-2xl">
                <p className="text-white text-[42px] leading-tight h-full w-full px-24 mt-[12rem]">
                  {text.map((el: string, i: number) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.25,
                        delay: i / 5,
                      }}
                    >
                      {el}{" "}
                    </motion.span>
                  ))}
                </p>
              </div>
              <div className="w-full bg-gradient-to-br from-[#F16633CC] to-[#FD2D7DCC] p-1 gap-2 rounded-tr-[10rem] rounded-bl-[10rem] backdrop-blur-lg bg-opacity-20 max-w-md">
                <DefaultCarousel indicator={false} data={data}>
                  {data.map(
                    (
                      slide: { title: string; sources: string; image: string },
                      index: number
                    ) => (
                      <div
                        key={`youtube-${index}`}
                        onClick={()=>handleVideo()}
                        className="w-[432.5px] min-h-[630px] relative z-50"
                      >
                        <video
                          ref={videoRef}
                          src={slide.sources}
                          className="rounded-tr-[10rem] rounded-bl-[10rem] w-[432.5px] min-h-[630px] object-fit"
                        />
                        {stop === false && videoRef ? (
                          <button
                            type="button"
                            onClick={()=>handleVideo()}
                            className="absolute top-[44%] left-[40%] items-center cursor-auto z-40"
                          >
                            <svg
                              className="cursor-pointer"
                              width="87"
                              height="80"
                              viewBox="0 0 84 90"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M76.9279 32.4359L20.3363 1.99757C11.4498 -2.78211 0.679199 3.65452 0.679199 13.7448V48.2381V76.4877C0.679199 86.7268 11.7383 93.148 20.6306 88.0719L77.2222 55.7674C86.3209 50.5735 86.1547 37.3987 76.9279 32.4359Z"
                                fill="#DBDEE9"
                              />
                            </svg>
                          </button>
                        ) : null}
                      </div>
                    )
                  )}
                </DefaultCarousel>
              </div>
            </div>
          </div>
        }
      />
    </Section>
  );
};

export { Banner };
