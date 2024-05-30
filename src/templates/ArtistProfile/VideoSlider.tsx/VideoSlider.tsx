"use client";
import React, { useRef } from "react";
import YouTube from "react-youtube";
import { Grid, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import { Profile } from "@/types/types";

type Props = {
  profile: Profile | null | undefined;
};

const VideoSlider = ({ profile }: Props) => {
  // const [activeSlide, setActiveSlide] = useState<number>(0);
  const players = useRef<Map<number, any>>(new Map());

  const opts: any = {
    height: "600",
    width: "100%",
    position: "absolute",
    objectFit: "cover",
    backgroundSize: "cover",
    playerVars: {
      autoplay: 0,
      controls: 1,
      enablejsapi: 1,
      modestbranding: 1,
      showinfo: 0,
      related: 0,
    },
  };

  const onReady = (event: any, index: number) => {
    players.current.set(index, event.target);
  };

  const onEnd = (index: number) => {
    const player = players.current.get(index);
    if (player) {
      player.seekTo(0);
      player.pauseVideo();
    }
  };

  SwiperCore.use([Grid, Pagination]);

  const handleSlideChange = (swiper: any) => {
    const newIndex = swiper.activeIndex;
    // setActiveSlide(newIndex);

    players.current.forEach((player, index) => {
      if (index === newIndex) {
        player.playVideo();
      } else {
        player.pauseVideo();
      }
    });
  };

  return (
    <Swiper
      onSlideChange={(swiper) => handleSlideChange(swiper)}
      centeredSlides={true}
      slidesPerView={3}
      pagination={{
        clickable: true,
      }}
      autoplay={false}
      spaceBetween={30}
      modules={[Pagination]}
      className="profileVideoSwiper"
    >
      {profile &&
        profile.artist_videos?.map(
          (
            video: {
              added_on: string;
              artist_id: number;
              id: number;
              media_name: string;
              media_value: string;
            },
            index: number
          ) => {
            let videoId: string | null | undefined = null;
            if (video.media_value.includes("youtube.com/shorts")) {
              videoId = video.media_value.split("/").pop();
            } else if (video.media_value.includes("youtube.com/")) {
              const urlParams = new URLSearchParams(
                video.media_value.split("?")[1]
              );
              videoId = urlParams.get("v");
            } else {
              videoId = video.media_value;
            }
            return (
              <SwiperSlide key={video.id} className="rounded-2xl">
                <YouTube
                  ref={(el) => {
                    if (el && el.internalPlayer) {
                      players.current.set(index, el.internalPlayer);
                    }
                  }}
                  videoId={videoId || ""}
                  opts={opts}
                  onReady={(event) => onReady(event, index)}
                  onEnd={() => onEnd(index)}
                  className={`video-stream-${index} object-fit overflow-hidden rounded-2xl`}
                />
              </SwiperSlide>
            );
          }
        )}
    </Swiper>
  );
};

export default VideoSlider;
