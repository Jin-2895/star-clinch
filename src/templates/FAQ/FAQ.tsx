import { Section } from "@/layout/Section";
import React, { useState } from "react";

const FAQ = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [activeEvent, setActiveEvent] = useState<number | null>(1);
  return (
    <div className="h-full">
      <div className="relative">
        <svg
          className="absolute"
          width="1494"
          height="625"
          viewBox="0 0 1494 625"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_42_587)">
            <path
              d="M1212 343L1212 -55.9999C1212 -221.685 1077.69 -356 912 -356L-186 -356L-186 343L1212 343Z"
              fill="url(#paint0_linear_42_587)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_42_587"
              x="-468"
              y="-638"
              width="1962"
              height="1263"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="141"
                result="effect1_foregroundBlur_42_587"
              />
            </filter>
            <linearGradient
              id="paint0_linear_42_587"
              x1="1416"
              y1="511"
              x2="-7.99999"
              y2="-6.00009"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#CC3775" />
              <stop offset="1" stopColor="#4F2A49" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          className="absolute right-0"
          width="1598"
          height="997"
          viewBox="0 0 1598 997"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_42_588)">
            <path
              d="M1680 715L1680 316C1680 150.315 1545.69 16.0001 1380 16.0001L282 16L282 715L1680 715Z"
              fill="url(#paint0_linear_42_588)"
              fillOpacity="0.73"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_42_588"
              x="0"
              y="-266"
              width="1962"
              height="1263"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="141"
                result="effect1_foregroundBlur_42_588"
              />
            </filter>
            <linearGradient
              id="paint0_linear_42_588"
              x1="1680"
              y1="365.5"
              x2="282"
              y2="365.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B44848" />
              <stop offset="1" stopColor="#4F2A49" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative py-[16rem]">
        <div className="absolute inset-0 top-[10%] flex justify-center items-center">
          <svg
            width="789"
            height="370"
            viewBox="0 0 789 370"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H175C274.964 0 356 82.549 356 182.513C356 280.819 276.307 362 178 362C79.6933 362 0 282.307 0 184V0Z"
              fill="url(#paint0_linear_0_1)"
              fillOpacity="0.11"
            />
            <path
              d="M374 370H549C648.964 370 730 287.451 730 187.487C730 89.1808 650.307 8 552 8C453.693 8 374 87.6933 374 186V370Z"
              fill="url(#paint1_linear_0_1)"
              fillOpacity="0.11"
            />
            <rect
              width="147"
              height="150"
              transform="matrix(1 0 0 -1 642 206)"
              fill="url(#paint2_linear_0_1)"
              fillOpacity="0.11"
            />
            <rect
              width="160"
              height="160"
              rx="80"
              transform="matrix(1 0 0 -1 241 325)"
              fill="url(#paint3_linear_0_1)"
              fillOpacity="0.11"
            />
            <defs>
              <linearGradient
                id="paint0_linear_0_1"
                x1="178"
                y1="0"
                x2="178"
                y2="362"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D9D9D9" />
                <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_0_1"
                x1="552"
                y1="370"
                x2="552"
                y2="8"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D9D9D9" />
                <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_0_1"
                x1="73.5"
                y1="0"
                x2="73.5"
                y2="150"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D9D9D9" />
                <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_0_1"
                x1="80"
                y1="0"
                x2="80"
                y2="160"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D9D9D9" />
                <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="flex justify-center items-start">
          <h1 className="font-[400] text-[96px] leading-[116.18px] text-white">
            FAQ
          </h1>
        </div>
      </div>
      <Section>
        <div>
          <div className="py-12 flex justify-center items-center">
            <div className="relative w-[55rem]">
              <div className="relative w-full">
                <input
                  type="text"
                  id="feedback"
                  placeholder="Ask us anything or raise a concern about your order"
                  className="border-none focus:border-none px-4 py-6 rounded-[1rem] w-full bg-[#FFFFFF1A] placeholder:text-white/20"
                />
                <button className="absolute right-3 top-3 text-[20px] font-[400] leading-[29.05px] bg-gradient-to-br from-[#96fdbffb] via-[#598F43CC] to-[#25292CCC] px-8 py-2 rounded-xl text-white">
                  Let us know
                </button>
                <p className="font-[400] text-[20px] leading-[29.05px] text-white text-center py-6">
                  Got a question ? Feel Free to ask
                </p>
              </div>
            </div>
          </div>
          <div className="event-opening px-24 flex flex-row gap-[10rem]">
            <div className="flex flex-col gap-6">
              <h1
                onClick={() => setActiveTab(1)}
                className={`text-[22px] font-[700] leading-[38.73px] w-[14rem] ${activeTab === 1 ? "text-white" : "text-white/20"}`}
              >
                {"Payments >"}
              </h1>
              <h1
                onClick={() => setActiveTab(2)}
                className={`text-[22px] font-[700] leading-[38.73px] w-[14rem] ${activeTab === 2 ? "text-white" : "text-white/20"}`}
              >
                {"Booking >"}
              </h1>
              <h1
                onClick={() => setActiveTab(3)}
                className={`text-[22px] font-[700] leading-[38.73px] w-[14rem] ${activeTab === 3 ? "text-white" : "text-white/20"}`}
              >
                {"Recommendation >"}
              </h1>
            </div>
            <div>
              <h1 className="text-[48px] font-[400] leading-[58.09px] text-white">
                Payments
              </h1>
              {activeTab === 1 && (
                <div className="py-2">
                  <div className="container mx-auto py-8">
                    {eventArray.map((event) => (
                      <>
                        {activeEvent === event.id ? (
                          <div
                            key={event.id}
                            className="bg-gradient-to-r from-[#FFFFFF00] via-[#FFFFFF0F] to-[#FFFFFF00] backdrop-blur-[50px] p-4 rounded-xl mb-6"
                          >
                            <div className="flex flex-row justify-between">
                              <div>
                                <h2 className="text-xl font-semibold text-white">
                                  Event Cancellation by artists ?
                                </h2>
                              </div>
                              <button
                                onClick={() => setActiveEvent(null)}
                              >
                                <svg
                                  fill="#FFFFFF"
                                  version="1.1"
                                  id="Capa_1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  width="15px"
                                  height="15px"
                                  viewBox="0 0 45.402 45.402"
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    <path
                                      d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
		c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
		c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
		c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"
                                    />
                                  </g>
                                </svg>
                              </button>
                            </div>
                            <p className="mt-4 text-white">
                              Manage all accounting transactions. Handle
                              monthly, quarterly, and annual closings. Reconcile
                              accounts payable and receivable. Compute taxes and
                              prepare...
                            </p>
                          </div>
                        ) : (
                          <div
                            onClick={() => setActiveEvent(event.id)}
                            key={event.id}
                            className="border-b border-t border-t-gray-900 border-b-gray-900 p-4 mb-6 cursor-auto hover:bg-gradient-to-r hover:from-[#FFFFFF00] hover:via-[#FFFFFF0F] hover:to-[#FFFFFF00]"
                            style={{ cursor: "pointer" }}
                          >
                            <div className="flex flex-row justify-between">
                              <div>
                                <h2 className="text-xl font-semibold text-white">
                                  Event Cancellation by artists ?
                                </h2>
                              </div>
                              <button
                                onClick={() => setActiveEvent(event.id)}
                              >
                                <svg
                                  fill="#FFFFFF"
                                  version="1.1"
                                  id="Capa_1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  width="15px"
                                  height="15px"
                                  viewBox="0 0 45.402 45.402"
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    <path
                                      d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
		c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
		c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
		c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"
                                    />
                                  </g>
                                </svg>
                              </button>
                            </div>
                          </div>
                        )}
                      </>
                    ))}
                  </div>
                </div>
              )}
              {activeTab === 2 && (
                <div className="py-8">
                  <div className="container mx-auto py-8">
                    {eventArray.map((event) => (
                      <>
                        {activeEvent === event.id ? (
                          <div
                            key={event.id}
                            className="bg-gradient-to-r from-[#FFFFFF00] via-[#FFFFFF0F] to-[#FFFFFF00] backdrop-blur-[50px] p-4 rounded-xl mb-6"
                          >
                             <div className="flex flex-row justify-between">
                              <div>
                                <h2 className="text-xl font-semibold text-white">
                                  Event Cancellation by artists ?
                                </h2>
                              </div>
                              <button
                                onClick={() => setActiveEvent(null)}
                              >
                                <svg
                                  fill="#FFFFFF"
                                  version="1.1"
                                  id="Capa_1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  width="15px"
                                  height="15px"
                                  viewBox="0 0 45.402 45.402"
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    <path
                                      d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
		c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
		c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
		c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"
                                    />
                                  </g>
                                </svg>
                              </button>
                            </div>

                            <p className="mt-4 text-white">
                              Manage all accounting transactions. Handle
                              monthly, quarterly, and annual closings. Reconcile
                              accounts payable and receivable. Compute taxes and
                              prepare...
                            </p>
                          </div>
                        ) : (
                          <div
                            onClick={() => setActiveEvent(event.id)}
                            key={event.id}
                            className="border-b border-t border-t-gray-900 border-b-gray-900 p-4 mb-6 cursor-auto hover:bg-gradient-to-r hover:from-[#FFFFFF00] hover:via-[#FFFFFF0F] hover:to-[#FFFFFF00]"
                            style={{ cursor: "pointer" }}
                          >
                             <div className="flex flex-row justify-between">
                              <div>
                                <h2 className="text-xl font-semibold text-white">
                                  Event Cancellation by artists ?
                                </h2>
                              </div>
                              <button
                                onClick={() => setActiveEvent(event.id)}
                              >
                                <svg
                                  fill="#FFFFFF"
                                  version="1.1"
                                  id="Capa_1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  width="15px"
                                  height="15px"
                                  viewBox="0 0 45.402 45.402"
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    <path
                                      d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
		c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
		c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
		c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"
                                    />
                                  </g>
                                </svg>
                              </button>
                            </div>

                          </div>
                        )}
                      </>
                    ))}
                  </div>
                </div>
              )}
              {activeTab === 3 && (
                <div className="py-8 w-full">
                  <div className="container mx-auto py-8 w-full">
                    {eventArray.map((event) => (
                      <>
                        {activeEvent === event.id ? (
                          <div
                          key={event.id}
                          className="bg-gradient-to-r from-[#FFFFFF00] via-[#FFFFFF0F] to-[#FFFFFF00] backdrop-blur-[50px] p-4 rounded-xl mb-6 w-full"
                        >
                           <div className="flex flex-row justify-between">
                            <div>
                              <h2 className="text-xl font-semibold text-white">
                                Event Cancellation by artists ?
                              </h2>
                            </div>
                            <button
                              onClick={() => setActiveEvent(null)}
                            >
                              <svg
                                fill="#FFFFFF"
                                version="1.1"
                                id="Capa_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="15px"
                                height="15px"
                                viewBox="0 0 45.402 45.402"
                                xmlSpace="preserve"
                              >
                                <g>
                                  <path
                                    d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
  c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
  c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
  c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"
                                  />
                                </g>
                              </svg>
                            </button>
                          </div>

                          <p className="mt-4 text-white">
                            Manage all accounting transactions. Handle
                            monthly, quarterly, and annual closings. Reconcile
                            accounts payable and receivable. Compute taxes and
                            prepare...
                          </p>
                        </div>
                        ) : (
                          <div
                            onClick={() => setActiveEvent(event.id)}
                            key={event.id}
                            className="border-b border-t border-t-gray-900 border-b-gray-900 p-4 mb-6 cursor-auto hover:bg-gradient-to-r hover:from-[#FFFFFF00] hover:via-[#FFFFFF0F] hover:to-[#FFFFFF00]"
                            style={{ cursor: "pointer" }}
                          >
                             <div className="flex flex-row justify-between">
                              <div>
                                <h2 className="text-xl font-semibold text-white">
                                  Event Cancellation by artists ?
                                </h2>
                              </div>
                              <button
                                onClick={() => setActiveEvent(event.id)}
                              >
                                <svg
                                  fill="#FFFFFF"
                                  version="1.1"
                                  id="Capa_1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  width="15px"
                                  height="15px"
                                  viewBox="0 0 45.402 45.402"
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    <path
                                      d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
		c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
		c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
		c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"
                                    />
                                  </g>
                                </svg>
                              </button>
                            </div>

                          </div>
                        )}
                      </>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

const eventArray = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
];

export { FAQ };
