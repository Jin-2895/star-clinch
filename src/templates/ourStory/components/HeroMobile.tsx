import React from "react";

const HeroMobile = () => {
  return (
    <div className="h-[625px] w-full relative bg-gradient-to-t from-[#211125] via-transparent to-transparent ">
      <div className="flex flex-col gap-12">
        <p className="text-[48px] leading-[58.09px] text-white text-center mx-10 mt-9 pt-7">Behind the Scenes: Crafting a meaningful vision</p>
        <div>
          <p className="text-[16px] leading-[19.36px] mx-8 mb-5 text-white text-center">
            Explore the chapters of our extraordinary journey, where dreams met
            stardom and events became legendary stories.
          </p>
          <div className="flex items-center justify-center">
          <p className="text-[#D387A2] text-[16px] leading-[19.36px]  text-center  ">
            Join the journey
          </p>
            <div>
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5468 18.2558C10.2757 18.6249 9.72434 18.6249 9.45318 18.2558L2.56663 8.88395C2.23733 8.43581 2.55733 7.80357 3.11345 7.80357L16.8866 7.80357C17.4427 7.80357 17.7627 8.43581 17.4334 8.88395L10.5468 18.2558Z"
                  fill="url(#paint0_linear_64_5475)"
                />
                <path
                  d="M10.5468 14.1843C10.2757 14.5533 9.72434 14.5533 9.45318 14.1843L2.56663 4.81241C2.23733 4.36427 2.55733 3.73204 3.11345 3.73204L16.8866 3.73204C17.4427 3.73204 17.7627 4.36428 17.4334 4.81242L10.5468 14.1843Z"
                  fill="url(#paint1_linear_64_5475)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_64_5475"
                    x1="10"
                    y1="26.4643"
                    x2="10"
                    y2="4.07143"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#C17C99" />
                    <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_64_5475"
                    x1="10"
                    y1="22.3928"
                    x2="10"
                    y2="-0.000106125"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#C17C99" />
                    <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 flex justify-center w-full">
        <svg
          width="355"
          height="329"
          viewBox="0 0 355 329"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 226.066V395M1 226.066H354M1 226.066L24.6768 176.135M95.707 26.3401L72.0303 76.2717M132.757 26.3401L95.707 226.066V395M184.737 26.3401V226.066V395M234.859 1L268.631 226.066V395M354 226.066V395M354 226.066L339.904 176.135M290.651 26.3401L308.23 76.2717M48.3535 126.203L24.6768 176.135M48.3535 126.203L72.0303 76.2717M48.3535 126.203H187.081H325.808M325.808 126.203L339.904 176.135M325.808 126.203L308.23 76.2717M24.6768 176.135H339.904M72.0303 76.2717H308.23"
            stroke="url(#paint0_linear_64_5482)"
            strokeOpacity="0.31"
          />
          <defs>
            <linearGradient
              id="paint0_linear_64_5482"
              x1="176.964"
              y1="1"
              x2="178.767"
              y2="374.164"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity="0" />
              <stop offset="0.619842" stopColor="white" />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute top-0 right-0">
        <svg
          width="200"
          height="234"
          viewBox="0 0 200 234"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.61">
            <path
              d="M298.086 62.4524L271.359 100.375C219.568 173.862 118.009 191.45 44.5221 139.658L0.612156 108.711L121.116 -62.2711L298.086 62.4524Z"
              fill="url(#paint0_linear_64_5467)"
              fillOpacity="0.29"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_64_5467"
              x1="314.584"
              y1="61.2513"
              x2="61.9817"
              y2="32.3326"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F5FD96" />
              <stop offset="0.482292" stopColor="#608F43" />
              <stop offset="1" stopColor="#080810" />
            </linearGradient>
          </defs>
        </svg>
      </div>

    </div>
  );
};

export default HeroMobile;
