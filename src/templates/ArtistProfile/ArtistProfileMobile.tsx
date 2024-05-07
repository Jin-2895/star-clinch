import { FaArrowRightLong } from "react-icons/fa6";

import { useState } from "react";
import Image from "next/image";
import { Section } from "@/layout/Section";

const ArtistProfileMobile = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <Section>
      <div className=" flex flex-col justify-start w-full mx-0 ">
        <div className="flex flex-col ">
          <div className="relative flex flex-col justify-start w-full max-h-[576.2px] h-screen overflow-hidden shadow-lg ">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] via-[rgba(8,8,16,0)] to-[rgba(8,8,16,1)]" />
              <Image
                width={1000}
                height={1000}
                src="/celebrities/zakirKhan.jpeg"
                className="w-full h-full object-cover"
                alt="Zakir Khan"
              />
            </div>

            <div className="absolute bottom-0 px-6 flex flex-col gap-4 w-full ">
              <div className="font-normal leading-[38.73px] text-[48px]  text-white">
                Zakir Khan
              </div>
              <div className=" w-fit bg-gradient-to-b from-[rgba(255,255,255,0)] via-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0)] border border-red-500 rounded-full px-8 py-2 ">
                <p className=" font-normal text-sm text-white">
                  Recently booked on{" "}
                  <span
                    className="font-bold text-sm"
                    style={{
                      background:
                        "linear-gradient(90deg,  #C44F31 100%, #C44F31 100%, #4D0F27 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    12 March
                  </span>
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-[14px] leading-[16.94px] text-white">
                  Zakir Khan acted as a breath of fresh air in the comedy scene
                  and has attracted...
                </h1>
                <p className="text-[14px] font-semibold text-white">
                  {" "}
                  Read More
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* carousel section */}
      <div className="">
        <div className="mx-auto mt-10 w-fit">
          <div
            className="tabs flex gap-4 bg-[#0c0c15] px-4 py-2 rounded-full"
            style={{
              boxShadow: " 0 20px 20px rgba(0, 0, 0, 1)",
            }}
          >
            <button
              className={`tab px-8 py-4 rounded-full text-white text-base font-normal ${
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
              className={`tab px-8 py-4 rounded-full text-white text-base font-normal ${
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
            <div className="content ">Content </div>
          </div>
        </div>
      </div>

      <div className=" overflow-hidden mb-10">
        <div className="flex flex-col bg-[#10121A]/10 w-full justify-between rounded-[80px] py-10 px-6 gap-20 relative z-10 overflow-hidden ">
          <div className="flex flex-col justify-between">
            <div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex flex-row items-center justify-between w-full gap-4 transition-all duration-300  text-[24px] text-white font-normal leading-[29.05px]"
              >
                Performance Details
                <svg
                  width="18"
                  height="14"
                  viewBox="0 0 21 14"
                  fill="none"
                  className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1.68571L11.5556 13L20 1"
                    stroke="#D9D9D9"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            {isOpen && (
              <>
                <div className="flex flex-col gap-2 mt-4">
                  <h1 className="text-[16px] text-white font-normal leading-[29.05px]">
                    Don’t like what you see here ? Get customized package in
                    your budget
                  </h1>
                  <span
                    className="text-[16px] text-white font-normal leading-[29.05px] mt-4"
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
                <div className="flex flex-col gap-4 py-4">
                  <div className="grid sm:grid-cols-3 xs:grid-cols-1 gap-4">
                    <div className="rounded-2xl p-px bg-gradient-to-br from-[#C6C8FF] to-[#00000000]">
                      <div className="w-full h-full rounded-2xl text-center bg-gray-900/90 flex flex-col justify-center items-center p-6">
                        <h1 className="text-[38px] font-bold leading-[58.09px] text-white">
                          1
                        </h1>
                        <span className="mt-2 text-[16px] font-normal leading-[19.36px] text-white">
                          Performing Members
                        </span>
                      </div>
                    </div>
                    <div className="rounded-2xl p-px bg-gradient-to-br from-[#C6C8FF] to-[#00000000]">
                      <div className="w-full h-full rounded-2xl text-center bg-gray-900/90  flex flex-col justify-center items-center p-6">
                        <h1 className="text-[38px] font-bold leading-[58.09px] text-white">
                          10
                        </h1>
                        <span className="mt-4 text-[16px] font-normal leading-[19.36px] text-white">
                          Off Stage Members
                        </span>
                      </div>
                    </div>
                    <div className="rounded-2xl p-px bg-gradient-to-br from-[#C6C8FF] to-[#00000000]">
                      <div className="w-full h-full rounded-2xl text-center bg-gray-900/90  flex flex-col justify-center items-center p-6">
                        <h1 className="text-[38px] font-bold leading-[58.09px] text-white">
                          15-20
                        </h1>
                        <span className="mt-4 text-[16px] font-normal leading-[19.36px] text-white">
                          mins of stage time
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 xs:grid-cols-1 gap-4">
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
              </>
            )}
            <div className="text-center mt-20 flex flex-col items-center">
              <h1
                className="px-8 text-[16px] leading-[19.36px] font-bold max-w-[821px] text-center opacity-70"
                style={{
                  background: "linear-gradient(0deg, #F16633 20%, #FD2D7D 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                128 Queries made so far
              </h1>
              <h1 className="text-[16px] leading-[19.36px] font-normal  text-center">
                Fill out a form and get quote for free. All it takes is 5 min to
                book your dream star
              </h1>
              <button className=" mt-4 flex gap-2 items-center bg-gradient-to-r from-[#F16633CC] to-[#FD2D7DCC]  py-2 px-4 rounded-full w-fit">
                <h1 className="text-[18px] font-normal text-white">
                  Get a quote
                </h1>
                <FaArrowRightLong className="text-[22px] text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" mx-auto  bg-[#111121] py-8  mb-20 flex flex-col justify-center items-center w-full">
        <div className="flex flex-col items-center">
          <h1
            className="text-[32px] leading-[38.73px] font-normal"
            style={{ opacity: "0.6" }}
          >
            Tags of the Day
          </h1>
        </div>
        <div className=" flex flex-col justify-between items-center gap-4 py-8 w-full overflow-hidden" >
          <div className="ml-24 inline-flex gap-4  overflow-hidden" style={{ whiteSpace: 'nowrap' }}>
            <span className=" text-sm text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className=" text-sm text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className=" text-sm text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className=" text-sm text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className=" text-sm text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className=" text-sm text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className=" text-sm text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className=" text-sm text-white py-2  text-center">
              #Artist of the Day
            </span>
          </div>
          <div className="ml-10 inline-flex gap-4  overflow-hidden" style={{ whiteSpace: 'nowrap' }}>
            <span className=" text-sm text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className=" text-sm text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className=" text-sm text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className=" text-sm text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className=" text-sm text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className=" text-sm text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className=" text-sm text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className=" text-sm text-white py-2  text-center">
              #Artist of the Day
            </span>
          </div>
          <div className="ml-40 inline-flex gap-4  overflow-hidden" style={{ whiteSpace: 'nowrap' }}>
            <span className=" text-sm text-white py-2  text-center">
              #Artist of the Day
            </span>
             <span className=" text-sm text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className=" text-sm text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className=" text-sm text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className=" text-sm text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className=" text-sm text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className=" text-sm text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className=" text-sm text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className=" text-sm text-white py-2  text-center">
              #Artist of the Day
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export { ArtistProfileMobile };
