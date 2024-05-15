import { FaArrowRightLong } from "react-icons/fa6";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Section } from "@/layout/Section";
import Link from "next/link";
import { Profile } from "@/types/types";
import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Grid } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoMdArrowDropdown } from "react-icons/io";

import YouTube from "react-youtube";
// import Slider from 'react-slick';
// import Slider from "react-slick";

type ArtistProfileProps = {
  profile?: Profile;
};

const ArtistProfile = ({ profile }: ArtistProfileProps) => {
  const [player, setPlayer] = useState<any>(null);
  const [read, setRead] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  
  // const [height, setHeight] = useState('20px');
  // const sliderRef = React.useRef<Slider>(null);


  const videoRef = useRef<YouTube | null>(null);
  const [activeTab, setActiveTab] = useState<number>(0);
  const params = useParams();

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const readMore = () => {
    setRead(!read)
    // setHeight(read ? '48px' : 'auto'); 
  };

  const handleOpen = () => {
    setOpen(!open)
    // setHeight(read ? '48px' : 'auto'); 
  };
  const rotate = open&& "rotate-180"


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
  
    // const Settings = {
    //   dots: true,
    // infinite: true,
    // speed: 500,

    // slidesToShow: 2,
    // slidesToScroll: 2,
    // swipeToSlide: true,
    // initialSlide: 1,
    // rows: 3,
    // };

  const opts: any = {
    height: "630",
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

  SwiperCore.use([Grid, Pagination]);

  return (
    <Section>
      <div className="container flex flex-col justify-start w-full mx-auto ">
        <div className="flex flex-col px-[10px] lg:px-[48px] py-[28px] ">
          <div className=" flex items-start justify-start max-h-[137px] py-[2px] lg:py-[60px]">
            <h1
              className="text-sm lg:text-2xl leading-[29.05px] text-white"
              style={{ opacity: "0.5" }}
            >
              All Categories {">"} {profile?.artist?.category_name}
            </h1>
          </div>
          <div className=" hidden lg:flex items-start justify-center gap-16">
            <div className="min-w-[40rem] min-h-[44rem] max-w-[42rem] max-h-[50rem] overflow-hidden rounded-t-full">
              <Image
                width={1000}
                height={1000}
                src={
                  profile?.artist?.profile_pic
                    ? profile?.artist?.profile_pic
                    : ""
                }
                className="object-cover min-w-[40rem] min-h-[50rem] max-w-[42rem] max-h-[44rem] duration-300 transition-all"
                alt={
                  profile?.artist?.professional_name
                    ? profile?.artist?.professional_name
                    : "Artist image"
                }
              />
            </div>
            <div className="my-auto flex flex-col gap-8 justify-start">
              <h1 className="text-[96px] leading-[116.18px] font-normal text-white">
                {profile?.artist?.professional_name
                  ? profile?.artist?.professional_name
                  : "-"}
              </h1>
              <button
                className=" w-fit inline-flex items-center  justify-between gap-4 bg-transparent  rounded-full px-12 py-4 shadow-lg "
                style={{
                  border: "2px solid", // Set border to 2px solid
                  borderColor: "rgba(253, 45, 125, 0.4)",
                }}
              >
                <h1 className="text-white text-[18px] font-normal leading-[21.78px]">
                  Recently Booked on{" "}
                  <span
                    style={{
                      background:
                        "linear-gradient(90deg, #F16633 80%, #FD2D7D 80%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    12 March
                  </span>
                </h1>
              </button>
              <div className="flex flex-col gap-2 text-white">
                <h1 className="text-[18px] leading-[21.78px] max-w-[482px]">
                  {profile?.artist?.usp}
                </h1>
                {/* <span>Read More</span> */}
              </div>
              <Link
                href={`/${params.slug}/${params.name}/${profile?.artist?.slug}`}
                className="flex gap-4 items-center bg-gradient-to-r from-[#F16633CC] to-[#FD2D7DCC] w-fit  py-4 px-6 rounded-full"
              >
                <h1 className="text-[24px] font-normal text-white">
                  Get a quote
                </h1>
                <FaArrowRightLong className="text-[22px] text-white" />
              </Link>
            </div>
          </div>
          <div className="lg:hidden    flex  flex-col  ">
         <div className="w-full   relative">
          {/* <div className="w-full h-full absolute  "></div> */}
         <Image
                width={1000}
                height={1000}
                src={
                  profile?.artist?.profile_pic
                    ? profile?.artist?.profile_pic
                    : ""
                }
                className="object-cover min-w-full max-h-full   duration-300 transition-all"
                alt={
                  profile?.artist?.professional_name
                    ? profile?.artist?.professional_name
                    : "Artist image"
                }
              />
              <div className="absolute bg-gradient-to-t  from-black to-transparent px-4 bottom-0 flex   flex-col">
             <div className="flex flex-col gap-2">
             <h1 className="text-[40px] leading-[40.18px]  font-normal text-white">
                {profile?.artist?.professional_name
                  ? profile?.artist?.professional_name
                  : "-"}
              </h1>
              <button
                className=" w-fit inline-flex items-center  justify-between gap-4 bg-transparent  rounded-full px-6 py-2 shadow-lg "
                style={{
                  border: "2px solid", // Set border to 2px solid
                  borderColor: "rgba(253, 45, 125, 0.4)",
                }}
              >
                <h1 className="text-white text-[10px] font-normal leading-[16.78px]">
                  Recently Booked on{" "}
                  <span
                    style={{
                      background:
                        "linear-gradient(90deg, #F16633 80%, #FD2D7D 80%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    12 March
                  </span>
                </h1>
              </button>
             </div>
              <div className=" flex flex-col  gap-2  my-3 text-white">
                <h1
 className={`text-[14px] font-light leading-[16.78px] max-w-[482px] ${
  read ? '' : 'line-clamp-2'
} transition-all ease-out delay-300`}

                 >
                  {profile?.artist?.usp}
                </h1>
                <p className="text-white text-[14px] cursor-pointer" onClick={readMore}>
        {read ? 'Read Less' : 'Read More'}
        </p>
              </div>
              </div>
         </div>

          </div>
        </div>
      </div>
      <div className="m-0 mt-20 hidden  max-w-full h-[1039.85px]  rounded-t-[999px] lg:flex flex-col mb-20"
        style={{
          borderTop: "2px solid",
          borderColor: "rgba(26, 25, 52)",
          boxShadow: "inset 0 50px 20px rgba(0, 0, 0, 1)",
        }}
      >
        <div className="mx-auto mt-32">
          <div
            className="tabs flex gap-4 bg-[#0c0c15] px-4 py-2 rounded-full"
            style={{
              boxShadow: " 0 20px 20px rgba(0, 0, 0, 1)",
            }}
          >
            <button
              className={`tab px-8 py-4 rounded-full text-white text-2xl font-normal ${
                activeTab === 0 ? "active" : ""
              }`}
              onClick={() => handleTabClick(0)}
              style={{
                backgroundColor: activeTab === 0 ? "#e0e2fa" : "",
                color: activeTab === 0 ? "black" : "",
              }}
            >
              Photos
            </button>
            <button
              className={`tab px-8 py-4 rounded-full text-white text-2xl font-normal ${
                activeTab === 1 ? "active" : ""
              }`}
              onClick={() => handleTabClick(1)}
              style={{
                backgroundColor: activeTab === 1 ? "#e0e2fa" : "",
                color: activeTab === 1 ? "black" : "",
              }}
            >
              Videos
            </button>
          </div>
        </div>
        <div className="tab-content px-[14rem] pt-24">
          {activeTab === 0 && (
            <Swiper
              slidesPerView={4}
              grid={{
                rows: 2,
                fill: "row",
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Grid, Pagination]}
              className="profilePhotoSwiper min-h-[90rem] min-w-48"
            >
              {profile &&
                profile.artist_images?.map((img: string, index: number) => (
                  <SwiperSlide key={index}>
                    <Image
                      className={`${borderStyling[`${index}`]} object-cover min-h-[18rem] max-h-[18rem] max-w-[18rem] min-w-[18rem]`}
                      src={img}
                      alt="artist image"
                      width={1000}
                      height={1000}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          )}
          {activeTab === 1 && (
            <Swiper
              slidesPerView={4}
              grid={{
                rows: 2,
                fill: "column",
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Grid, Pagination]}
              className="profilePhotoSwiper min-h-[80rem] "
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
                  ) => (
                    <SwiperSlide key={video.id}>
                      <YouTube
                        ref={videoRef}
                        videoId={video.media_value}
                        opts={opts}
                        onReady={onReady}
                        onEnd={onEnd}
                        className={`video-stream-${index} object-fit overflow-hidden`}
                      />
                    </SwiperSlide>
                  )
                )}
            </Swiper>
          )}
        </div>
      </div>
      <div className="lg:hidden flex flex-col">
      <div className="mx-auto mt-8">
          <div
            className="tabs flex gap-4   px-4 py-2 rounded-full"
            style={{
              boxShadow: " 0 20px 20px rgba(0, 0, 0, 1)",
            }}
          >
            <button
              className={`tab px-4 py-2 rounded-full text-white text-md font-normal ${
                activeTab === 0 ? "active" : ""
              }`}
              onClick={() => handleTabClick(0)}
              style={{
                backgroundColor: activeTab === 0 ? "#e0e2fa" : "",
                color: activeTab === 0 ? "black" : "",
              }}
            >
              Photos
            </button>
            <button
              className={`tab px-4 py-2 rounded-full text-white text-md font-normal ${
                activeTab === 1 ? "active" : ""
              }`}
              onClick={() => handleTabClick(1)}
              style={{
                backgroundColor: activeTab === 1 ? "#e0e2fa" : "",
                color: activeTab === 1 ? "black" : "",
              }}
            >
              Videos
            </button>
          </div>
        </div> 
        <div className="tab-content mx-2 text-white pt-2">
          {activeTab === 0 && (

            <Swiper
              slidesPerView={2}
              grid={{
                rows: 3,
                fill: "column",
              }}
              spaceBetween={1}
              pagination={{
                clickable: true,
              }}
              modules={[Grid, Pagination]}
              className="profilePhotoSwiper min-h-full"
            >
              {profile &&
                profile?.artist_images?.map((img: string, index: number) => (
                  <SwiperSlide key={index}>
                    <Image
                      className={`${borderStyling[`${index}`]} object-cover min-h-[10rem] max-h-[10rem] max-w-[5rem] min-w-[10rem]`}
                      src={img}
                      alt="artist image"
                      width={200}
                      height={200}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
  //      <div className="">
  //            <Slider ref={sliderRef} {...Settings}>
  //       <div className="w-[100px] h-[100px] bg-red-300" >
  //         <h3 >1</h3>
  //       </div>
  //       <div className="w-[100px] h-[100px] bg-red-300" >
  //         <h3>2</h3>
  //       </div>
  //       <div className="w-[100px] h-[100px] bg-red-300" >
  //         <h3>3</h3>
  //       </div>
  //       <div className="w-[100px] h-[100px] bg-red-300" >
  //         <h3>4</h3>
  //       </div>
  //       <div className="w-[100px] h-[100px] bg-red-300" >
  //         <h3>4</h3>
  //       </div>
  //  =
      
   
       
  //     </Slider>
  //      </div>
          )}
          {activeTab === 1 && (
            <Swiper
              slidesPerView={2}
              grid={{
                rows: 2,
                fill: "column",
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Grid, Pagination]}
              className="profilePhotoSwiper min-h-full"
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
                  ) => (
                    <SwiperSlide key={video.id}>
                      <YouTube
                        ref={videoRef}

                        videoId={video.media_value}
                        opts={opts}
                        onReady={onReady}
                        onEnd={onEnd}
                        className={`video-stream-${index} object-fit overflow-hidden`}
                      />
                    </SwiperSlide>
                  )
                )}
            </Swiper>
          )}
        </div>
      </div>
      <div className="relative hidden lg:block overflow-hidden mb-40">
        <div className="flex bg-[#10121A]/10 w-full max-h-[649.76px] justify-between rounded-[80px] p-[50px] gap-20 relative z-10 overflow-hidden ">
          <div className="flex flex-col justify-between">
            <h1 className="text-[58px] text-white font-normal leading-[67.77px]">
              Performance
              <br /> Details
            </h1>
            <div className="flex flex-col gap-2">
              <h1 className="text-[24px] text-white font-normal leading-[29.05px]">
                Don’t like what you see here ? Get customized package in your
                budget
              </h1>
              <span
                className="text-[24px] text-white font-normal leading-[29.05px] mt-4"
                style={{
                  background:
                    "linear-gradient(90deg, #F16633 80%, #FD2D7D 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Post your requirements {"-->"}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-2xl p-px bg-gradient-to-br from-[#C6C8FF] to-[#00000000]">
                <div className="w-full h-full rounded-2xl text-center bg-gray-900/90 flex flex-col justify-center items-center p-6">
                  <h1 className="text-[48px] font-bold leading-[58.09px] text-white">
                    1
                  </h1>
                  <span className="mt-2 text-[16px] font-normal leading-[19.36px] text-white">
                    Performing Members
                  </span>
                </div>
              </div>
              <div className="rounded-2xl p-px bg-gradient-to-br from-[#C6C8FF] to-[#00000000]">
                <div className="w-full h-full rounded-2xl text-center bg-gray-900/90  flex flex-col justify-center items-center p-6">
                  <h1 className="text-[48px] font-bold leading-[58.09px] text-white">
                    10
                  </h1>
                  <span className="mt-4 text-[16px] font-normal leading-[19.36px] text-white">
                    Off Stage Members
                  </span>
                </div>
              </div>
              <div className="rounded-2xl p-px bg-gradient-to-br from-[#C6C8FF] to-[#00000000]">
                <div className="w-full h-full rounded-2xl text-center bg-gray-900/90  flex flex-col justify-center items-center p-6">
                  <h1 className="text-[48px] font-bold leading-[58.09px] text-white">
                    15-20
                  </h1>
                  <span className="mt-4 text-[16px] font-normal leading-[19.36px] text-white">
                    mins of stage time
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl p-px bg-gradient-to-br from-[#C6C8FF] to-[#00000000]">
                <div className="w-full h-full rounded-2xl text-center bg-gray-900/90  flex flex-col justify-center items-center p-6">
                  <h1 className="text-3xl font-bold leading-[58.09px] text-white">
                    Nationwide
                  </h1>
                  <span className="text-[16px] font-normal leading-[19.36px] text-white">
                    can travel
                  </span>
                </div>
              </div>
              <div className="rounded-2xl p-px bg-gradient-to-br from-[#C6C8FF] to-[#00000000]">
                <div className="w-full h-full rounded-2xl text-center bg-gray-900/90  flex flex-col justify-center items-center p-6">
                  <h1 className="text-3xl font-bold leading-[58.09px] text-white">
                    Hindi, English
                  </h1>
                  <span className="text-[16px] font-normal leading-[19.36px] text-white">
                    Performing Language
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          width={400}
          height={350}
          src="/assets/circle.png"
          className="absolute top-0 left-0 right-10 -z-10"
          alt="Circle 1"
        />

        <Image
          width={250}
          height={350}
          src="/assets/circle2.png"
          className="absolute bottom-0 right-0 rounded-b-[80px] overflow-hidden -z-10"
          alt="Circle 2"
        />
      </div>
      <div className="flex mx-4 lg:hidden  flex-col">
      <div className="flex justify-between items-center my-8  text-white  ">
<p className="text-white opacity-75 leading-[29px] font-light text-[24px]">Performance details</p>
<IoMdArrowDropdown onClick={handleOpen} className={`${rotate} transition-all delay-50`} size={25} color="white" />
      </div>
         
          
       <div className={`grid grid-cols-1 gap-4 transition-all duration-300 ease-out ${open ? 'opacity-100' : 'hidden'} ${open?"h-full":"h-0"}`}>
              <div className="rounded-md p-px bg-gradient-to-br from-[#C6C8FF] to-[#00000000]">
                <div className="w-full h-full rounded-md text-center bg-gray-900/90 flex flex-col justify-center items-center p-6">
                  <h1 className="text-[48px] font-bold leading-[58.09px] text-white">
                    1
                  </h1>
                  <span className="mt-2 text-[16px] font-normal leading-[19.36px] text-white">
                    Performing Members
                  </span>
                </div>
              </div>
              <div className="rounded-md p-px bg-gradient-to-br from-[#C6C8FF] to-[#00000000]">
                <div className={`${open?"w-full":"w-0"}  ${open?"h-full":"h-0"} rounded-md text-center bg-gray-900/90  flex flex-col justify-center items-center p-6`}>
                  <h1 className="text-[48px] font-bold leading-[58.09px] text-white">
                    10
                  </h1>
                  <span className="mt-4 text-[16px] font-normal leading-[19.36px] text-white">
                    Off Stage Members
                  </span>
                </div>
              </div>
              <div className="rounded-md p-px bg-gradient-to-br from-[#C6C8FF] to-[#00000000]">
                <div className="w-full h-full rounded-md text-center bg-gray-900/90  flex flex-col justify-center items-center p-6">
                  <h1 className="text-[48px] font-bold leading-[58.09px] text-white">
                    15-20
                  </h1>
                  <span className="mt-4 text-[16px] font-normal leading-[19.36px] text-white">
                    mins of stage time
                  </span>
                </div>
              </div>
          
            
              <div className="rounded-md p-px bg-gradient-to-br from-[#C6C8FF] to-[#00000000]">
                <div className="w-full h-full rounded-md text-center bg-gray-900/90  flex flex-col justify-center items-center p-6">
                  <h1 className="text-3xl font-bold leading-[58.09px] text-white">
                    Nationwide
                  </h1>
                  <span className="text-[16px] font-normal leading-[19.36px] text-white">
                    can travel
                  </span>
                </div>
              </div>
              <div className="rounded-md p-px bg-gradient-to-br from-[#C6C8FF] to-[#00000000]">
                <div className="w-full h-full rounded-md text-center bg-gray-900/90  flex flex-col justify-center items-center p-6">
                  <h1 className="text-3xl font-bold leading-[58.09px] text-white">
                    Hindi, English
                  </h1>
                  <span className="text-[16px] font-normal leading-[19.36px] text-white">
                    Performing Language
                  </span>
                </div>
              </div>
            
          

      

           </div>

      </div>
      <div className="relative overflow-hidden lg:block hidden mb-40 rounded-l-full rounded-r-full">
        <Image
          width={200}
          height={200}
          src="/assets/left.png"
          className="absolute bottom-0 left-0 right-0  -z-10"
          alt="Circle 1"
        />

        <Image
          width={200}
          height={200}
          src="/assets/right1.png"
          className="absolute top-0 right-0 rounded-b-[80px] overflow-hidden -z-10"
          alt="Circle 2"
        />
        <Image
          width={400}
          height={350}
          src="/assets/right2.png"
          className="absolute bottom-0 right-0 rounded-b-[80px] overflow-hidden -z-10"
          alt="Circle 2"
        />
        <div className="flex flex-col justify-center items-center bg-[#10121A]/40 bg-clip-padding h-[649.76px] rounded-full relative z-10 overflow-hidden ">
          <div className="flex flex-col items-center justify-between gap-24">
            <div className="flex flex-col gap-4 items-center">
              <Image
                width={100}
                height={100}
                src="/assets/live.png"
                alt="live"
              />
              <h1
                className="text-[58px] leading-[67.77px] font-normal max-w-[821px] text-center"
                style={{
                  background:
                    "linear-gradient(180deg, #F16633 80%, #FD2D7D 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                128 Queries made for Zakir Khan in past 15 mins
              </h1>
            </div>

            <div className="flex flex-col gap-8 items-center">
              <button className="flex gap-2 items-center bg-gradient-to-r from-[#F16633CC] to-[#FD2D7DCC]  py-4 px-6 rounded-full w-fit">
                <h1 className="text-[24px] font-normal">Get a quote</h1>
                <FaArrowRightLong className="text-[22px]" />
              </button>
              <span className="text-[18px] leading-[21.78px] font-normal  text-center">
                Fill out a form and get quote for free. All it takes is 5 min to
                book your dream star
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex lg:hidden flex-col items-center justify-between  gap-3 ">
            <div className="flex flex-col mb-20  gap-4 items-center mt-6">
              <Image
                width={100}
                height={100}
                src="/assets/live.png"
                alt="live"
              />
              <div className=" flex flex-col items-center mx-4">
              <h1
                className="text-[16px] leading-[19.77px] font-normal  text-center"
                style={{
                 color:"#963334"
                }}
              >
                128 Queries made for Zakir Khan in past 15 mins
              </h1>
              <span className="text-[16px] leading-[19.77px] font-normal  text-center text-white opacity-75">
                Fill out a form and get quote for free. All it takes is 5 min to
                book your dream star
              </span>
              </div>
            </div>

         
              <button className="flex justify-center text-center z-50 fixed bottom-0 items-center bg-gradient-to-r from-[#F16633CC] to-[#FD2D7DCC]  py-4 px-6 rounded-t-lg w-full">
                <h1 className="text-[24px] text-center   font-normal">Get a quote</h1>
                <FaArrowRightLong className="text-[22px]" />
              </button>
            </div>
     

  
      {profile?.tags && (
        <div
          className=" hidden mx-auto rounded-[58px] bg-[#111121] py-8 relative mb-20 lg:flex flex-col justify-center items-center"
          style={{
            borderTop: "2px solid",
            borderColor: "rgba(26, 25, 52)",
            boxShadow: "inset 0 20px 20px rgba(0, 0, 0, 0.6)",
          }}
        >
          <div className="flex flex-col items-center">
            <h1
              className="text-[32px] leading-[38.73px] font-normal"
              style={{ opacity: "0.6" }}
            >
              Tags of the Day
            </h1>
          </div>
          <div className=" flex flex-wrap justify-center items-center gap-4 py-8 overflow-hidden">
            <div className="flex gap-4">
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
            </div>
            <div className="flex gap-4">
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
            </div>
            <div className="flex gap-4">
              <span className="  text-white  py-2  text-center">
                #Artist of the Day
              </span>
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
            </div>
            <div className="flex gap-4">
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
              <span className="  text-white py-2  text-center">
                #Artist of the Day
              </span>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export { ArtistProfile };
