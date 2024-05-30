import { Meta } from '@/layout/Meta';
import { Footer } from '@/templates/Footer';
import { GTQStepBase } from '@/templates/GTQStep/GTQStepBase';
import { Navbar } from '@/templates/Navbar';
import {  Profile } from '@/types/types';
import { AppConfig } from '@/utils/AppConfig';
import { GetServerSideProps } from 'next';
import React from 'react';

type IIndexProps ={
  data: Profile
}

const index = ({data}: IIndexProps) => {
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Navbar categories={data?.categories}/>
      <GTQStepBase profile={data}/>
      <Footer />
    </div>
  )
};

export const getServerSideProps: GetServerSideProps = async ({query}) => {
  try {
    const { id } = query;
    const response = await fetch(`${"https://staging-api.starclinch.in"}/${id}`, {
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