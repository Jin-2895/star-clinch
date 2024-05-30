import { Section11Heading } from "@/types/types";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const data = [
  {
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    image:
      "https://images.pexels.com/photos/15475219/pexels-photo-15475219/free-photo-of-hill-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Big Buck Bunny",
    text: "Nora Fatehi for an event hosted by XYZ performed at Pune .",
    date: "14 March 2023",
    author: "arijit Singh",
  },
  {
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    image:
      "https://images.pexels.com/photos/22626143/pexels-photo-22626143/free-photo-of-a-woman-with-curly-hair-and-a-white-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Elephant Dream",
    text: "Nora Fatehi for an event hosted by XYZ performed at Pune .",
    date: "14 March 2023",
    author: "Shreya Ghoshal",
  },
  {
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    image:
      "https://images.pexels.com/photos/22858523/pexels-photo-22858523/free-photo-of-s-curve-chicago.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "For Bigger Blazes",
    text: "Nora Fatehi for an event hosted by XYZ performed at Pune .",
    date: "14 March 2023",
    author: "kishore kumar",
  },
  {
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    image:
      "https://images.pexels.com/photos/20985362/pexels-photo-20985362/free-photo-of-cerro-2.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "For Bigger Escape",
    text: "Nora Fatehi for an event hosted by XYZ performed at Pune .",
    date: "14 March 2023",
    author: "Sonu nigham",
  },
  {
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    image:
      "https://images.pexels.com/photos/19501709/pexels-photo-19501709/free-photo-of-black-and-white-shot-of-a-young-woman-standing-outside-in-the-dark-and-looking-away.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "For Bigger Fun",
    text: "Nora Fatehi for an event hosted by XYZ performed at Pune .",
    date: "14 March 2023",
    author: "Udit narayan",
  },
  {
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    image:
      "https://images.pexels.com/photos/21751135/pexels-photo-21751135/free-photo-of-black-and-white-photo-of-a-village-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "For Bigger Joyrides",
    text: "Nora Fatehi for an event hosted by XYZ performed at Pune .",
    date: "14 March 2023",
    author: "Neha kakkar",
  },
  {
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    image:
      "https://images.pexels.com/photos/22741673/pexels-photo-22741673/free-photo-of-self.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "For Bigger Meltdowns",
    text: "Nora Fatehi for an event hosted by XYZ performed at Pune .",
    date: "14 March 2023",
    author: "Neha kakkar",
  },
];

type IRecentShows = {
  sectionElevenHeadings: Section11Heading[] | null;
};

const RecentShowsMobile = ({ sectionElevenHeadings }: IRecentShows) => {
  console.log(sectionElevenHeadings);
  return (
    <div className="w-full mt-16 relative h-[530px] ">
      <p className="text-[32px] text-center mb-6 shadow-md leading-[38.73px] text-white  px-10 ">
        Recent shows made star-studded via StarClinch
      </p>
   

      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination]}
        className="recentSlider flex justify-center"
      >
        {data &&
          data.map((data) => {
            return (
              <SwiperSlide key={data?.text} className="max-w-[362px] max-h-[512px] rounded-t-full text-white ">
                <div className="relative w-full h-full">
                  <Image
                  width={400}
                  height={400}
                    className="absolute inset-0 w-full rounded-t-full h-full object-cover "
                    src={data?.image}
                    alt="swiper"
                  />
                  <p className="absolute  bottom-4 z-30 text-center w-full text-white">
                    {data?.text}
                  </p>
                  <div className="absolute z-20 h-full rounded-t-full w-full bottom-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default RecentShowsMobile;