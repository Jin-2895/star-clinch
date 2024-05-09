import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";
import React from "react";

type Props = {
  num?: number;
  filterName?: string;
};

const FilterButton = (props: Props) => {
  return (
    <div className="bg-gradient-to-r from-gray-500 to-gray-800 p-px rounded-full mt-5">
      <button className=" inline-flex items-center justify-between  gap-4 rounded-full px-4  md:px-9 py-3 shadow-lg bg-gradient-to-r from-black via-gray-900 to-black">
        <h1 className="text-white text-[18px] font-normal leading-[21.78px]">
          {props.filterName ? props.filterName : "Filter"} {props.num}
        </h1>
        {!props.filterName && (
          <HiMiniAdjustmentsHorizontal className="text-white text-lg" />
        )}
      </button>
    </div>
  );
};

export { FilterButton };
