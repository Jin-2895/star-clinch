import { Section1Item } from '@/types/types';
import Image from 'next/image';
import React from 'react';

type ICelebThreeProps = {
  celebThreeData: Section1Item[] | null
}


const Celebthree = ({celebThreeData}: ICelebThreeProps) => {
  return (
    <>
    {celebThreeData && celebThreeData?.length ? (
            <Image
              className="celebrity-two object-cover"
              loading="lazy"
              blurDataURL="data:image/jpeg"
              placeholder="blur"
              fill={true}
              src={celebThreeData[0]?.value ? celebThreeData[0]?.value : ""}
              alt={celebThreeData[0]?.name ? celebThreeData[0]?.name : "celebrity"}
            />
      
    ) : null}
  </>
  );
};

export default Celebthree;
