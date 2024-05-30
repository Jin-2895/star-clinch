import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";
import React from "react";

type Props = {
  num?: number;
  filterName?: string;
};

const FilterButton = (props: Props) => {
  return (
    <div className="bg-gradient-to-tr from-gray-700 via-transparent to-gray-700 p-px rounded-full">
      <button className=" inline-flex items-center justify-between gap-4 rounded-full px-9 py-3 shadow-lg bg-gradient-to-tr from-black via-gray-900 to-black">
        <h1 className="text-white text-[18px] font-normal leading-[21.78px]">
          {props.filterName ? props.filterName : "Filter"}
        </h1>
        {!props.filterName && (
          <HiMiniAdjustmentsHorizontal className="text-white text-lg" />
        )}
      </button>
    </div>
  );
};

export { FilterButton };
