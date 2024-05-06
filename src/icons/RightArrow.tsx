import React from "react";


const RightArrow = () => {
  return (
    <svg
      width="69"
      height="46"
      viewBox="0 0 69 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dd_3244_544)">
        <path
          d="M64.2321 20.9504C65.2084 19.9741 65.2084 18.3912 64.2321 17.4149L48.3222 1.50496C47.3459 0.528648 45.7629 0.528648 44.7866 1.50496C43.8103 2.48127 43.8103 4.06418 44.7866 5.04049L58.9288 19.1826L44.7866 33.3248C43.8103 34.3011 43.8103 35.884 44.7866 36.8603C45.7629 37.8366 47.3458 37.8366 48.3222 36.8603L64.2321 20.9504ZM4.6582 21.6826L62.4643 21.6826L62.4643 16.6826L4.6582 16.6826L4.6582 21.6826Z"
          fill="#FFE3E2"
          fillOpacity="0.9"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_3244_544"
          x="0.658203"
          y="0.772461"
          width="68.3062"
          height="44.8203"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_3244_544"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_3244_544"
            result="effect2_dropShadow_3244_544"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_3244_544"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default RightArrow;
