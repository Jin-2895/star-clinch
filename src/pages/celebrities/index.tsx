import { CategoryBase } from '@/templates/Category/CategoryBase';
import { HomeData } from '@/types/types';
import { GetServerSideProps } from 'next';
import React from 'react';

type IIndexProps= {
  data: HomeData
}

const index = ({data}: IIndexProps) => {
  return <CategoryBase data={data}/>;
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
