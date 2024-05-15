import { Section1Item } from "@/types/types";
import Image from "next/image";
import React from "react";

type ICelebOneProps = {
  celebProps?: Section1Item[] | null;
  style?: string
};

const Celebrity = ({ celebProps, style }: ICelebOneProps) => {
  return (
    <>
      {celebProps && celebProps?.length ? (
              <Image
                className={style}
                loading="lazy"
                blurDataURL="data:image/jpeg"
                placeholder="blur"
                fill={true}
                src={celebProps[0]?.value ? celebProps[0]?.value : ""}
                alt={celebProps[0]?.name ? celebProps[0]?.name : "celebrity"}
              />
        
      ) : null}
    </>
  );
};

export default Celebrity;
