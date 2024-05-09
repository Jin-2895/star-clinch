import { Section } from "@/layout/Section";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

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

const CategoryList = () => {

  return (
    <Section xMargin="mx-0">
      <div className="px-4 py-8 mx-auto flex flex-row justify-between">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          direction='vertical'
          pagination={{ el: ".swiper-pagination", clickable: true }}
          // navigation={{
          //   nextEl: ".swiper-button-next",
          //   prevEl: ".swiper-button-prev"
          // }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container_1"
        >
          {data.map((item: { image: string }, i: number) => (
            <SwiperSlide key={i}>
              <div className="bg-gradient-to-r from-[#F4F4F4] via-transparent to-[#F4F4F4] p-1 rounded-[35px] ">
              <Image
                width={600}
                height={600}
                src={item.image}
                alt="slide_image"
              />
              </div>
              <p className="absolute bottom-0 px-10 text-white text-[58px]">Artist</p>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center items-start flex-col">
          <h1 className="text-[58px] font-400 leading-[96.82px] text-white">Choose from </h1>
          <h1 className="text-[58px] font-400 leading-[96.82px] text-white">100+</h1>
          <h2 className="text-[58px] font-400 leading-[96.82px] text-white">Categories</h2>
        </div>
      </div>
    </Section>
  );
};

export { CategoryList };
