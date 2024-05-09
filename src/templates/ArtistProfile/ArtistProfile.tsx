import { FaArrowRightLong } from "react-icons/fa6";

import React, { useState } from "react";
import Image from "next/image";
import { Section } from "@/layout/Section";
import Link from "next/link";
import { Profile } from "@/types/types";

type ArtistProfileProps = {
  profile?: Profile;
};

const ArtistProfile = ({ profile }: ArtistProfileProps) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  console.log(profile);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <Section>
      <div className="container flex flex-col justify-start w-full mx-auto ">
        <div className="flex flex-col  px-[48px] py-[28px] ">
          <div className=" flex items-start justify-start max-h-[137px] py-[60px]">
            <h1
              className="text-2xl leading-[29.05px]"
              style={{ opacity: "0.5" }}
            >
              All Categories {">"} {profile?.artist?.category_name}
            </h1>
          </div>
          <div className="flex items-start justify-center gap-16">
            <div className="min-w-[30rem] min-h-[44rem] max-w-[32rem] max-h-[44rem]  overflow-hidden rounded-t-full">
              <Image
                width={1000}
                height={1000}
                src={
                  profile?.artist?.profile_pic
                    ? profile?.artist?.profile_pic
                    : ""
                }
                className="object-cover min-w-[30rem]  min-h-[44rem] max-w-[32rem] max-h-[44rem] hover:scale-110 duration-300 transition-all"
                alt={
                  profile?.artist?.professional_name
                    ? profile?.artist?.professional_name
                    : "Artist image"
                }
              />
            </div>
            <div className="my-auto flex flex-col gap-8 justify-start">
              <h1 className="text-[96px] leading-[116.18px] font-normal">
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
              <div className="flex flex-col gap-2">
                <h1 className="text-[18px] leading-[21.78px] max-w-[482px]">
                  {profile?.artist?.description}
                </h1>
                <span>Read More</span>
              </div>
              <Link
                href={"/gtq-step"}
                className="flex gap-4 items-center bg-gradient-to-r from-[#F16633CC] to-[#FD2D7DCC] w-fit  py-4 px-6 rounded-full"
              >
                <h1 className="text-[24px] font-normal text-white">
                  Get a quote
                </h1>
                <FaArrowRightLong className="text-[22px] text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="m-0 mt-20 max-w-full h-[1039.85px]  rounded-t-[999px] flex flex-col mb-20"
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
          <div className="tab-content">
            <div className="content hidden">Content for Photos tab</div>
            <div className="content hidden">Content for Videos tab</div>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden mb-40">
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
                <div className="w-full h-full rounded-2xl text-center bg-gray-900/90 flex flex-col justify-center items-center p-10">
                  <h1 className="text-[48px] font-bold leading-[58.09px] text-white">
                    1
                  </h1>
                  <span className="mt-2 text-[16px] font-normal leading-[19.36px] text-white">
                    Performing Members
                  </span>
                </div>
              </div>
              <div className="rounded-2xl p-px bg-gradient-to-br from-[#C6C8FF] to-[#00000000]">
                <div className="w-full h-full rounded-2xl text-center bg-gray-900/90  flex flex-col justify-center items-center p-10">
                  <h1 className="text-[48px] font-bold leading-[58.09px] text-white">
                    10
                  </h1>
                  <span className="mt-4 text-[16px] font-normal leading-[19.36px] text-white">
                    Off Stage Members
                  </span>
                </div>
              </div>
              <div className="rounded-2xl p-px bg-gradient-to-br from-[#C6C8FF] to-[#00000000]">
                <div className="w-full h-full rounded-2xl text-center bg-gray-900/90  flex flex-col justify-center items-center p-10">
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
                <div className="w-full h-full rounded-2xl text-center bg-gray-900/90  flex flex-col justify-center items-center p-10">
                  <h1 className="text-3xl font-bold leading-[58.09px] text-white">
                    Nationwide
                  </h1>
                  <span className="text-[16px] font-normal leading-[19.36px] text-white">
                    can travel
                  </span>
                </div>
              </div>
              <div className="rounded-2xl p-px bg-gradient-to-br from-[#C6C8FF] to-[#00000000]">
                <div className="w-full h-full rounded-2xl text-center bg-gray-900/90  flex flex-col justify-center items-center p-10">
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
      <div className="relative overflow-hidden mb-40 rounded-l-full rounded-r-full">
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
      {profile?.tags && (
        <div
          className=" mx-auto rounded-[58px] bg-[#111121] py-8 relative mb-20 flex flex-col justify-center items-center"
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
