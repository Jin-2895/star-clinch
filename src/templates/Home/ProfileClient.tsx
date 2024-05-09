import { CTABanner } from "@/cta/CTABanner";
import { Section } from "@/layout/Section";
import React, { useState } from "react";

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

const ProfileClient = () => {
  const [curr, setCurr] = useState<number>(0);

  const prev = () =>
    setCurr((curr: number) => (curr === 0 ? data?.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr: number) => (curr === data?.length - 1 ? 0 : curr + 1));

  // useEffect(() => {
  //   if (!autoSlide) return;
  //   const slideInterval = setInterval(next, autoSlideInterval);
  //   return () => clearInterval(slideInterval);
  // }, []);

  return (
    <Section yPadding="py-[10rem]">
      <CTABanner
        title="High Profile Clients Trust Us "
        style=""
        section={
          <div className="px-24 gap-2">
            <div className="overflow-hidden relative">
              <div
                className="transition-transform ease-linear duration-500 flex"
                style={{ transform: `translateX(-${curr * 100}%)` }}
              >
                {data.map(
                  (
                    slide: {
                      title: string;
                      sources: string;
                      image: string;
                      text: string;
                    },
                    index: number
                  ) => (
                    <div
                      key={index}
                      className="text-white min-w-[84rem] px-2 py-24 text-[50px] text-center relative"
                    >
                      {slide?.text}
                      <svg
                      className="absolute -z-10 top-16 left-10"
                        width="96"
                        height="75"
                        viewBox="0 0 96 75"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.08">
                          <path
                            d="M20.184 0.448242C31.4294 0.448242 43.5398 8.5105 43.5398 30.3938V31.2576C43.5398 61.2031 22.2024 74.4482 3.17178 74.4482V60.3393C14.7055 60.3393 23.3558 53.4288 23.3558 41.6233H22.7791C10.092 41.6233 0 32.6973 0 20.028C0 8.22255 8.6503 0.448242 20.184 0.448242Z"
                            fill="white"
                          />
                          <path
                            d="M72.5315 0.448242C83.7769 0.448242 95.8873 8.5105 95.8873 30.3938V31.2576C95.8873 61.2031 74.5499 74.4482 55.5192 74.4482V60.3393C67.053 60.3393 75.7033 53.4288 75.7033 41.6233H75.1266C62.4395 41.6233 52.3475 32.6973 52.3475 20.028C52.3475 8.22255 60.9978 0.448242 72.5315 0.448242Z"
                            fill="white"
                          />
                        </g>
                      </svg>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-between -left-6 -right-6 top-24">
              <button onClick={prev}>
                <svg
                  width="76"
                  height="77"
                  viewBox="0 0 76 77"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.2">
                    <g filter="url(#filter0_bi_3344_369)">
                      <circle
                        cx="38"
                        cy="38"
                        r="38"
                        transform="matrix(-1 0 0 1 76 0.448242)"
                        fill="white"
                        fillOpacity="0.1"
                      />
                      <circle
                        cx="38"
                        cy="38"
                        r="37.7022"
                        transform="matrix(-1 0 0 1 76 0.448242)"
                        stroke="url(#paint0_linear_3344_369)"
                        strokeWidth="0.595505"
                      />
                    </g>
                    <path
                      d="M20.7514 35.8679L46.4734 25.4315C47.0302 25.2056 47.5586 25.8105 47.26 26.3319L40.9457 37.3568C40.8412 37.5393 40.8343 37.7618 40.9271 37.9504L47.2599 50.8171C47.5352 51.3764 46.921 51.9545 46.3794 51.646L20.6761 37.0035C20.2171 36.7421 20.2619 36.0665 20.7514 35.8679Z"
                      fill="#DBDEE9"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_bi_3344_369"
                      x="-29.1797"
                      y="-28.7315"
                      width="134.359"
                      height="134.359"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="14.5899"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_3344_369"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_3344_369"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="13.1011" />
                      <feGaussianBlur stdDeviation="7.74156" />
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
                        result="effect2_innerShadow_3344_369"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_3344_369"
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
              <button onClick={next}>
                <svg
                  width="76"
                  height="77"
                  viewBox="0 0 76 77"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_bi_3344_372)">
                    <circle
                      cx="38"
                      cy="38.4482"
                      r="38"
                      fill="white"
                      fillOpacity="0.1"
                    />
                    <circle
                      cx="38"
                      cy="38.4482"
                      r="37.7022"
                      stroke="url(#paint0_linear_3344_372)"
                      strokeWidth="0.595505"
                    />
                  </g>
                  <path
                    d="M55.2489 35.8679L29.5269 25.4315C28.9701 25.2056 28.4416 25.8105 28.7402 26.3319L35.0545 37.3568C35.159 37.5393 35.166 37.7618 35.0731 37.9504L28.7403 50.8171C28.4651 51.3764 29.0793 51.9545 29.6208 51.646L55.3241 37.0035C55.7831 36.7421 55.7383 36.0665 55.2489 35.8679Z"
                    fill="#DBDEE9"
                  />
                  <defs>
                    <filter
                      id="filter0_bi_3344_372"
                      x="-29.1797"
                      y="-28.7315"
                      width="134.359"
                      height="134.359"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="14.5899"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_3344_372"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_3344_372"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="13.1011" />
                      <feGaussianBlur stdDeviation="7.74156" />
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
                        result="effect2_innerShadow_3344_372"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_3344_372"
                      x1="38"
                      y1="0.448243"
                      x2="65.1744"
                      y2="70.2622"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.619589" stopColor="#B8AEAE" />
                      <stop offset="1" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </button>
            </div>
            <div className="absolute bottom-4 right-0 left-0 z-10">
              <div className="flex items-center justify-center gap-2">
                {data.map((_, i: number) => (
                  <div
                    key={i}
                    className={`transition-all h-3  bg-white rounded-full ${curr === i ? "p-1 w-[12rem]" : "bg-opacity-50 w-[6rem]"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        }
      />
    </Section>
  );
};

export { ProfileClient };
