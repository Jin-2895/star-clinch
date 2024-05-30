


import { StoryBase } from '@/templates/ourStory/StoryBase';
import StoryBaseMobile from '@/templates/ourStory/StoryBaseMobile';
import { GetServerSideProps } from 'next';
import React from 'react';



const index = () => {
  return(
    <div>
      <div className='hidden lg:block'>
      <StoryBase />
    </div>
    <div className='block lg:hidden'>
      <StoryBaseMobile/>
    </div>
    </div>
    
    ) 
    
};

export const getServerSideProps:GetServerSideProps = async() => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}`, {
      cache: "no-cache",
    });
    const data = await response.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(`Error fetching data: ${error}`);
    return {
      props: {
        data: null,
      },
    };
  }
}

export default index;
