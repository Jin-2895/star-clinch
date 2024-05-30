'use client'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from 'swiper/modules';
import SwiperCore from "swiper";
import { Profile } from '@/types/types';
import Image from 'next/image';

type Props = {
  profile: Profile | null | undefined
}

const PhotoSlider = ({profile}: Props) => {


  const borderStyling: string[] = [
    "rounded-bl-full rounded-t-full",
    "rounded-xl",
    "rounded-bl-full rounded-t-full",
    "rounded-xl",
    "rounded-xl",
    "rounded-tr-[45%]",
    "rounded-xl",
    "rounded-tr-[45%]",
    "rounded-tl-[45%]",
    "rounded-t-full",
    "rounded-tl-[45%]",
    "rounded-t-full",
    "rounded-tl-full rounded-t-full",
    "rounded-bl-full rounded-t-full",
    "rounded-bl-full rounded-t-full",
    "rounded-bl-full rounded-t-full",
    "rounded-bl-full rounded-t-full",
    "rounded-bl-full rounded-t-full",
    "rounded-xl",
    "rounded-tr-[45%]",
    "rounded-tl-[45%]",
    "rounded-t-full",
    "rounded-tl-[45%]",
    "rounded-t-full",
  ];

  SwiperCore.use([Grid, Pagination]);

  return (
    <div className="px-[14rem]">
               <Swiper
              slidesPerView={4}
              slidesPerGroup={2}
              grid={{
                rows: 2,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Grid, Pagination]}
              className="profilePhotoSwiper"
            >
              {profile &&
                profile.artist_images?.map((img: string, index: number) => (
                  <SwiperSlide key={index}>
                    <div className="relative min-h-[18rem] max-h-[18rem] max-w-[18rem] min-w-[18rem]">
                      <Image
                        className={`${borderStyling[`${index}`]} object-cover min-h-[18rem] max-h-[18rem] max-w-[18rem] min-w-[18rem]`}
                        src={img}
                        alt="artist image"
                        width={800}
                        height={800}
                      />
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
            </div>
  )
}

export default PhotoSlider