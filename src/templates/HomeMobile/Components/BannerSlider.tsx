'use client'

import React, { useState, useRef, SetStateAction } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Section2Video } from '@/types/types';
import YouTube from "react-youtube";

type Props = {
  sectionTwoVideos?: Section2Video[] | null;
  children?: React.ReactNode[] | React.ReactNode;
  indicator?: boolean;
  autoSlide?: boolean;
  autoSlideInterval?: number;
  setSideText: React.Dispatch<SetStateAction<string[] | undefined>>;
};

const BannerSlider = (props: Props) => {
  console.log(props)
  const [player, setPlayer] = useState<any>(null);
  const videoRef = useRef<YouTube | null>(null);

  const opts: any = {
    height: "600px",
    // borderRadius:"50px",
    width: "100%",
    playerVars: {
      autoplay: 0,
      controls: 1,
      enablejsapi: 1,
      modestbranding: 1,
      showinfo: 0,
      related: 0,
    },
  };

  const onReady = (event: any) => {
    setPlayer(event.target);
  };

  const onEnd = () => {
    if (player) {
      player.seekTo(0);
      player.pauseVideo();
    }
  };

  return (
    <div className='relative mx-auto overflow-hidden'>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="slider01"
      >
        {props?.sectionTwoVideos &&
          props?.sectionTwoVideos.map((slide: Section2Video, index: number) => {
            let videoId: string | null | undefined = null;
            if (slide.value.includes("youtube.com/shorts")) {
              videoId = slide.value.split("/").pop();
            } else {
              const urlParams = new URLSearchParams(slide.value.split("?")[1]);
              videoId = urlParams.get("v");
            }
            return (
              <SwiperSlide key={`youtube-${index}`}>
              <div className=" w-full overflow-hidden" style={{borderRadius:"20px"}}>
              <YouTube
                  ref={videoRef}
                  videoId={videoId ? videoId : ""}
                  opts={opts}
                  onReady={onReady}
                  onEnd={onEnd}
                  className={`video-stream-${index}  object-cover w-full `}
                />
              </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  )
}

export default BannerSlider