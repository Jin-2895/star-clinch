import { Meta } from '@/layout/Meta'
import { ArtistProfileBase } from '@/templates/ArtistProfile/ArtistPofileBase'
import { Footer } from '@/templates/Footer'
import { Navbar } from '@/templates/Navbar'
import { Profile } from '@/types/types'
import { GetServerSideProps } from 'next'
import React from 'react'

type IIndexProps = {
  data: Profile
}

const index = ({data}: IIndexProps) => {
  return (
    <div className="antialiased">
      <Meta title={data?.meta?.title} description={data?.meta?.description} />
      <Navbar categories={data?.categories}/>
      <ArtistProfileBase profile={data}/>
      <Footer />
    </div>
    
  )
}

export const getServerSideProps:GetServerSideProps = async({query}) => {
  try {
    const { name } = query;
    const response = await fetch(`${"https://staging-api.starclinch.in"}/${name}`, {
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

export default index