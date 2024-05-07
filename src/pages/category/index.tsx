import { CategoryBase } from "@/templates/Category/CategoryBase";
import { CategoryBaseMobile } from "@/templates/Category/CategoryBaseMobile";
import React from "react";

const index = () => {
  return (
    <>
      <div className="hidden md:block">
        <CategoryBase />
      </div>
      <div className="block md:hidden">
        <CategoryBaseMobile />
      </div>
    </>
  );
};

export default index;
