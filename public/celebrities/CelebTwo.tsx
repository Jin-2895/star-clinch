import { Section1Item } from '@/types/types';
import Image from 'next/image';
import React from 'react';

type ICelebTwoProps = {
  celebTwoData: Section1Item[] | null
}


const CelebTwo = ({celebTwoData} : ICelebTwoProps) => {
  return (
    <>
      {celebTwoData && celebTwoData?.length ? (
              <Image
                className="celebrity-two object-cover"
                loading="lazy"
                blurDataURL="data:image/jpeg"
                placeholder="blur"
                fill={true}
                src={celebTwoData[0]?.value ? celebTwoData[0]?.value : ""}
                alt={celebTwoData[0]?.name ? celebTwoData[0]?.name : "celebrity"}
              />
        
      ) : null}
    </>
  );
};

export default CelebTwo;
