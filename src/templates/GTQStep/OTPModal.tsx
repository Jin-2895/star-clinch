"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { NextResponse } from "next/server";

interface FormGtq {
  occassion: string;
  eventDate: string;
  budget: string;
  attendees: string;
  venue: string;
  moreInfo: string;
  newsLetter: string;
  name: string;
  mobileNumber: number | string;
  email: string;
}

type IOTPModalProps = {
  isOpen: boolean;
  formData?: FormGtq | null;
  onOpenChange: (e: any) => void;
};

export default function OTPModal({
  isOpen,
  onOpenChange,
  formData,
}: IOTPModalProps) {
  const [otpValue, setOtpValue] = useState<string>("");

  const verifyOtp = async (e: any) => {
    e.preventDefault();
    try {
      const jsonData = {
        mobile: formData?.mobileNumber,
        type: "gtq",
        user_otp: otpValue,
        cart_id: formData?.mobileNumber,
      };

      const res = await fetch(
        `${"https://staging-api.starclinch.in"}/cart/otp/verify/`,
        {
          method: "POST",
          body: JSON.stringify(jsonData),
          headers: {
            "content-type": "application/json",
          },
        }
      );
      if (!res.ok) {
        throw new Error(`HTTP error! status ${res.status}`);
      }
      return NextResponse.json({ res });
    } catch (error) {
      return console.log(error);
    }
  };



  const verifyWithoutOtp = async (e: any) => {
    e.preventDefault();
    try {

      const res = await fetch(
        `${"https://staging-api.starclinch.in"}/cart/otp/verify/`,
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "content-type": "application/json",
          },
        }
      );
      if (!res.ok) {
        throw new Error(`HTTP error! status ${res.status}`);
      }
      return NextResponse.json({ res });
    } catch (error) {
      return console.log(error);
    }
  }

    // const timerResetOtp = () => {
  //   let count = 15;
  //   const timer = setInterval(function () {
  //     count--;
  //     if (count === 0) {
        
  //       return console.log("Resend Otp");
  //     } else {
  //       return count;
  //     }
  //   }, 1000);
  //   clearInterval(timer);
  // };

  return (
    <Modal
      backdrop="blur"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      className="bg-[rgba(13,13,19,1)] p-8 border-[1px] border-[rgba(255,255,255,0.11)]"
    >
      <ModalContent>
        {(onClose) => {
          console.log(onClose)
          return (
            <>
              <ModalHeader className="flex flex-col gap-1 text-white">
                Enter your OTP here
              </ModalHeader>
              <ModalBody>
                <div className="relative">
                  <div className="flex flex-col items-center w-full">
                    <input
                      type="text"
                      name="otp"
                      id="otp"
                      defaultValue={otpValue ? otpValue : ""}
                      onChange={(e) => setOtpValue(e.target.value)}
                      placeholder="Enter a 4-digit OTP"
                      className="bg-rgba(255,255,255,0.04) rounded-xl text-black py-4 px-6  mb-4 w-[100%]"
                    />
  
                    {/* <p className="text-gray-400 mb-4">{timerResetOtp()}</p> */}
  
                    <div className="flex flex-col items-center gap-2 my-6">
                      <p className="text-gray-400">
                        Didn&lsquo;t receive the OTP ?
                      </p>
                      <div className="flex gap-4 items-center">
                        <svg
                          width="29"
                          height="29"
                          viewBox="0 0 29 29"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_25_3473)">
                            <path
                              d="M1.09801 14.2614C1.09735 16.6139 1.71685 18.911 2.89482 20.9357L0.985352 27.8534L8.1201 25.9972C10.0935 27.0632 12.3045 27.6217 14.5514 27.6218H14.5573C21.9745 27.6218 28.0124 21.633 28.0155 14.2719C28.0169 10.7049 26.6183 7.35081 24.077 4.82733C21.5363 2.30408 18.1571 0.913737 14.5567 0.912109C7.13857 0.912109 1.10118 6.90064 1.09812 14.2614"
                              fill="url(#paint0_linear_25_3473)"
                            />
                            <path
                              d="M0.615078 14.2568C0.614313 16.694 1.25602 19.0732 2.47598 21.1704L0.498047 28.3361L7.88863 26.4134C9.92497 27.515 12.2177 28.0959 14.5507 28.0967H14.5567C22.24 28.0967 28.4948 21.8925 28.498 14.2679C28.4994 10.5727 27.0504 7.09803 24.4184 4.48415C21.786 1.8706 18.286 0.43023 14.5567 0.428711C6.87198 0.428711 0.618141 6.63212 0.615078 14.2568ZM5.01633 20.8092L4.74038 20.3746C3.58034 18.5444 2.96806 16.4294 2.96894 14.2577C2.97145 7.92023 8.16939 2.76422 14.561 2.76422C17.6564 2.76552 20.5653 3.96279 22.7532 6.13507C24.9411 8.30756 26.145 11.1955 26.1442 14.267C26.1413 20.6045 20.9433 25.7611 14.5567 25.7611H14.5521C12.4725 25.76 10.433 25.2059 8.65436 24.1587L8.23108 23.9096L3.84536 25.0506L5.01633 20.8091V20.8092Z"
                              fill="url(#paint1_linear_25_3473)"
                            />
                            <path
                              d="M11.0751 8.47538C10.8141 7.89987 10.5395 7.88825 10.2913 7.87816C10.0881 7.86948 9.8558 7.87013 9.62371 7.87013C9.3914 7.87013 9.01395 7.95684 8.6949 8.3025C8.37552 8.64849 7.47559 9.48458 7.47559 11.1851C7.47559 12.8857 8.72388 14.5291 8.8979 14.76C9.07213 14.9904 11.3078 18.5917 14.8484 19.9772C17.7911 21.1286 18.3899 20.8996 19.0285 20.8418C19.6673 20.7843 21.0896 20.006 21.3798 19.1988C21.6702 18.3918 21.6702 17.7001 21.5831 17.5555C21.496 17.4115 21.2637 17.325 20.9154 17.1522C20.5669 16.9794 18.8543 16.1432 18.535 16.0278C18.2157 15.9125 17.9835 15.855 17.7511 16.2011C17.5188 16.5467 16.8518 17.325 16.6484 17.5555C16.4453 17.7866 16.242 17.8153 15.8937 17.6425C15.5452 17.469 14.4233 17.1045 13.0923 15.9271C12.0568 15.0109 11.3576 13.8795 11.1544 13.5334C10.9512 13.1878 11.1326 13.0005 11.3073 12.8283C11.4638 12.6734 11.6558 12.4247 11.8301 12.2229C12.0038 12.0211 12.0618 11.8771 12.1779 11.6465C12.2942 11.4158 12.236 11.214 12.1491 11.0411C12.0618 10.8682 11.3849 9.15878 11.0751 8.47538Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <linearGradient
                              id="paint0_linear_25_3473"
                              x1="1352.49"
                              y1="2695.04"
                              x2="1352.49"
                              y2="0.912109"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#1FAF38" />
                              <stop offset="1" stopColor="#60D669" />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_25_3473"
                              x1="1400.5"
                              y1="2791.17"
                              x2="1400.5"
                              y2="0.428711"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#F9F9F9" />
                              <stop offset="1" stopColor="white" />
                            </linearGradient>
                            <clipPath id="clip0_25_3473">
                              <rect
                                width="28"
                                height="28"
                                fill="white"
                                transform="translate(0.498047 0.428711)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <svg
                          width="29"
                          height="29"
                          viewBox="0 0 29 29"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.22138 13.017C9.90138 16.3187 12.608 19.0254 15.9097 20.7054L18.4764 18.1387C18.803 17.812 19.258 17.7187 19.6664 17.847C20.973 18.2787 22.373 18.512 23.8314 18.512C24.1408 18.512 24.4375 18.635 24.6563 18.8538C24.8751 19.0725 24.998 19.3693 24.998 19.6787V23.762C24.998 24.0715 24.8751 24.3682 24.6563 24.587C24.4375 24.8058 24.1408 24.9287 23.8314 24.9287C18.5713 24.9287 13.5266 22.8391 9.8071 19.1197C6.08762 15.4002 3.99805 10.3555 3.99805 5.09538C3.99805 4.78596 4.12096 4.48921 4.33976 4.27042C4.55855 4.05163 4.85529 3.92871 5.16471 3.92871H9.24805C9.55747 3.92871 9.85421 4.05163 10.073 4.27042C10.2918 4.48921 10.4147 4.78596 10.4147 5.09538C10.4147 6.55371 10.648 7.95371 11.0797 9.26038C11.208 9.66871 11.1147 10.1237 10.788 10.4504L8.22138 13.017Z"
                            fill="#F8F8F8"
                          />
                        </svg>
                        <svg
                          width="29"
                          height="29"
                          viewBox="0 0 29 29"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M23.834 5.0957H5.16732C3.88398 5.0957 2.84565 6.1457 2.84565 7.42904L2.83398 21.429C2.83398 22.7124 3.88398 23.7624 5.16732 23.7624H23.834C25.1173 23.7624 26.1673 22.7124 26.1673 21.429V7.42904C26.1673 6.1457 25.1173 5.0957 23.834 5.0957ZM23.834 9.76237L14.5007 15.5957L5.16732 9.76237V7.42904L14.5007 13.2624L23.834 7.42904V9.76237Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 w-full"></div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className="flex flex-col gap-2">
                <button
                  className="bg-gradient-to-br from-[rgba(255,227,226,0.8)] via-[rgba(241,102,51,0.8)] to-[rgba(253,45,125,0.8)] hover:bg-red-600 text-white rounded-full py-2 px-4 w-full transition-all duration-300"
                  onClick={verifyOtp}
                >
                  Verify
                </button>
                <button
                  className="rounded-full py-2 px-4 w-full transition-all duration-300 text-md leading-[21.78px] font-normal text-white hover:text-red-600"
                  onClick={verifyWithoutOtp}
                >
                  Verify without OTP
                </button>
              </ModalFooter>
            </>
          )
        }}
      </ModalContent>
    </Modal>
  );
}
