import Image from "next/image";
import { CTABanner } from "../../cta/CTABanner";
import { Section } from "../../layout/Section";
import { FilterButton } from "../SingleArtist/Components/FilterButton";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { EffectCoverflow, Pagination } from "swiper/modules";
import React from "react";

SwiperCore.use([EffectCoverflow, Pagination]);

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

const BrowsePerformer = () => {
  return (
    <Section yPadding="py-24">
      <CTABanner
        title="Browse from your top pics/Pick your Performer"
        subtitle="Craft your experience: Customize your event with our Diverse Artists."
        style=""
        section={
          <div className="relative">
            <div className="absolute -top-24 right-0 -z-10">
              <div className="w-[25rem] h-[25rem] rounded-full bg-gradient-to-bl from-[#FF81E340] from-30% via-[#0B060A03] via-80%  to-transparent to-10% backdrop-blur-2xl"></div>
            </div>
            <div className="flex gap-8 justify-center items-center">
              <FilterButton num={1} filterName="Live Band" />
              <FilterButton num={2} filterName="Singer" />
              <FilterButton num={3} filterName="Celebrity" />
              <FilterButton num={4} filterName="Dancer" />
              <FilterButton num={5} filterName="Anchor" />
              <FilterButton num={5} filterName="Anchor" />
              <FilterButton num={5} filterName="Anchor" />
            </div>
            <div className="py-24">
              <Swiper
                className="mySwiper"
                slidesPerView={2}
                navigation={false}
                effect={"coverflow"}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                centeredSlides={true}
                loop={true}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 10,
                  depth: 100,
                  modifier: 2,
                  slideShadows: true,
                }}
              >
                {data.map((item: { image: string,  }, i: number) => (
                  <SwiperSlide key={i}>
                    <Image
                      width={700}
                      height={700}
                      src={item.image}
                      alt="artist image"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        }
      />
    </Section>
  );
};

export { BrowsePerformer };
