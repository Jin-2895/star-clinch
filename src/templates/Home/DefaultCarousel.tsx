import React, { useEffect, useState } from "react";

type Props = {
  data?:
    | {
        sources: string;
        image: string;
        title: string;
        text: string;
        author: string;
      }[]
    | undefined;
  children?: React.ReactNode[] | React.ReactNode;
  indicator?: boolean;
  autoSlide?: boolean;
  autoSlideInterval?: number;
};

const DefaultCarousel = (props: Props) => {
  const [curr, setCurr] = useState<number>(0);

  const prev = () =>
    setCurr((curr: number) => {
      if (props?.data) {
        return curr === 0 ? props?.data.length - 1 : curr - 1;
      } else {
        return 0;
      }
    });
  const next = () =>
    setCurr((curr: number) => {
      if (props?.data) {
        return curr === props?.data.length - 1 ? 0 : curr + 1;
      } else {
        return 0;
      }
    });

  useEffect(() => {
    if (!props.autoSlide) return;
    const slideInterval = setInterval(next, props.autoSlideInterval);
    return () => clearInterval(slideInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="overflow-hidden relative  rounded-tr-[10rem] rounded-bl-[10rem] w-full">
        <div
          className="transition-transform ease-linear duration-500 "
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          <div className="flex gap-2 p-1">{props.children}</div>
        </div>

        {props?.indicator ? (
          <div className="absolute bottom-4 right-0 left-0 z-10">
            <div className="flex items-center justify-center gap-2">
              {props?.data?.map((_: { text: string }, i: number) => (
                <div
                  key={i}
                  className={`transition-all w-4 h-4 bg-white rounded-full ${curr === i ? "p-2" : "bg-opacity-50"}`}
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>
      {/* <div className="absolute inset-0 flex items-center justify-between -left-10 -right-10"> */}
        <button
        type="button"
          onClick={prev}
          className="text-white z-20 absolute top-[50%] -left-10 cursor-pointer h-20 w-20"
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
          onClick={next}
          className="text-white z-20 absolute top-[50%] -right-10 cursor-pointer h-20 w-20"
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
                <feGaussianBlur
                  in="BackgroundImageFix"
                  stdDeviation="15.4533"
                />
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
      {/* </div> */}
    </>
  );
};

export { DefaultCarousel };
