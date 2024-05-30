"use client";
import { Section2Video } from "@/types/types";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import YouTube from "react-youtube";

type Props = {
  sectionTwoVideos?: Section2Video[] | null;
  setSideText?: React.Dispatch<React.SetStateAction<string[] | null | undefined>>
};

const DefaultCarousel = ({sectionTwoVideos, setSideText}: Props) => {
  // eslint-disable-next-line
  const [player, setPlayer] = useState<any>(null);
  const videoRef = useRef<YouTube | null>(null);
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  // eslint-disable-next-line
  const opts: any = {
    height: "810",
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

  //  eslint-disable-next-line
  const onReady = (event: any) => {
    setPlayer(event.target);
  };

  const onEnd = () => {
    player.seekTo(0);
    player.pauseVideo();
  };

  const handleSlideChange = (swiper: any) => {
    let currentSlideData: Section2Video | null | undefined = null
    if(sectionTwoVideos){
      currentSlideData = sectionTwoVideos[swiper.activeIndex];
      if(currentSlideData){
        const textSplit = currentSlideData?.name?.split(" ")
        if(setSideText){
          setSideText(textSplit)
        }
      }
    }
  };

  return (
    <>
      <Swiper
        navigation={{ prevEl, nextEl }}
        modules={[Navigation]}
        onSlideChange={handleSlideChange}
        className="BannerVideo overflow-hidden"
      >
        {sectionTwoVideos &&
          sectionTwoVideos.map((slide: Section2Video, index: number) => {
            let videoId: string | null | undefined = null;
            if (slide.value.includes("youtube.com/shorts")) {
              videoId = slide.value.split("/").pop();
            } else {
              const urlParams = new URLSearchParams(slide.value.split("?")[1]);
              videoId = urlParams.get("v");
            }
            return (
              <SwiperSlide key={`youtube-${index}`} className="object-fit">
                <YouTube
                  ref={videoRef}
                  videoId={videoId ? videoId : ""}
                  opts={opts}
                  onReady={onReady}
                  onEnd={onEnd}
                  className={`video-stream-${index} rounded-tr-[10rem] rounded-bl-[10rem] h-full w-full object-cover overflow-hidden`}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
     
      <button
        type="button"
        ref={(node) => {
          setPrevEl(node);
        }}
        className="text-white z-20 absolute top-[45%] -left-10 cursor-pointer h-20 w-20"
      >
        <svg
          width="77"
          height="77"
          viewBox="0 0 77 77"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_bi_3474_812)">
            <circle
              cx="38"
              cy="38"
              r="38"
              transform="matrix(-1 0 0 1 76.791 0.443359)"
              fill="#FFFFFF1A"
              fillOpacity="1"
            />
            <circle
              cx="38"
              cy="38"
              r="37.6846"
              transform="matrix(-1 0 0 1 76.791 0.443359)"
              stroke="url(#paint0_linear_3474_812)"
              strokeWidth="0.630745"
            />
          </g>
          <path
            d="M21.6136 35.834L47.1637 25.4674C47.7535 25.2281 48.3132 25.8688 47.9969 26.4211L41.7464 37.3347C41.6357 37.5279 41.6283 37.7636 41.7267 37.9634L47.9969 50.7028C48.2884 51.2952 47.6378 51.9075 47.0642 51.5807L21.5339 37.0368C21.0478 36.7599 21.0952 36.0444 21.6136 35.834Z"
            fill="#DBDEE9"
          />
          <defs>
            <filter
              id="filter0_bi_3474_812"
              x="-60.567"
              y="-60.9147"
              width="198.716"
              height="198.716"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="30.679" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_3474_812"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_3474_812"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="13.8764" />
              <feGaussianBlur stdDeviation="8.19968" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.9625 0 0 0 0 1 0 0 0 0 0.984043 0 0 0 0.06 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect2_innerShadow_3474_812"
              />
            </filter>
            <linearGradient
              id="paint0_linear_3474_812"
              x1="38"
              y1="8.09861e-07"
              x2="65.1744"
              y2="69.814"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.619589" stopColor="#B8AEAE" />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </button>
      <button
        type="button"
        ref={(node) => {
          setNextEl(node);
        }}
        className="text-white z-20 absolute top-[45%] -right-10 cursor-pointer h-20 w-20"
      >
        <svg
          width="77"
          height="77"
          viewBox="0 0 77 77"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_bi_3474_816)">
            <circle
              cx="38.0115"
              cy="38.4434"
              r="38"
              fill="#FFFFFF1A"
              fillOpacity="1"
            />
            <circle
              cx="38.0115"
              cy="38.4434"
              r="37.6846"
              stroke="url(#paint0_linear_3474_816)"
              strokeWidth="0.630745"
            />
          </g>
          <path
            d="M55.1888 35.834L29.6387 25.4674C29.049 25.2281 28.4893 25.8688 28.8056 26.4211L35.0561 37.3347C35.1668 37.5279 35.1742 37.7636 35.0758 37.9634L28.8056 50.7028C28.5141 51.2952 29.1646 51.9075 29.7383 51.5807L55.2686 37.0368C55.7547 36.7599 55.7073 36.0444 55.1888 35.834Z"
            fill="#DBDEE9"
          />
          <defs>
            <filter
              id="filter0_bi_3474_816"
              x="-30.895"
              y="-30.4631"
              width="137.813"
              height="137.813"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="15.4533" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_3474_816"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_3474_816"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="13.8764" />
              <feGaussianBlur stdDeviation="8.19968" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.9625 0 0 0 0 1 0 0 0 0 0.984043 0 0 0 0.06 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect2_innerShadow_3474_816"
              />
            </filter>
            <linearGradient
              id="paint0_linear_3474_816"
              x1="38.0115"
              y1="0.44336"
              x2="65.1859"
              y2="70.2573"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.619589" stopColor="#B8AEAE" />
              <stop
                offset="0.619689"
                stopColor="#AFA6A6"
                stopOpacity="0.952394"
              />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </button>
    </>
  );
};

export { DefaultCarousel };
