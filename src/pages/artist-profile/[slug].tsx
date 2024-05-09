import { ArtistProfileBase } from '@/templates/ArtistProfile/ArtistPofileBase'
import { Profile } from '@/types/types'
import { GetServerSideProps } from 'next'
import React from 'react'

type IIndexProps = {
  data: Profile
}

const index = ({data}: IIndexProps) => {
  return (
    <ArtistProfileBase profile={data}/>
  )
}

export const getServerSideProps:GetServerSideProps = async({query}) => {
  try {
    const { slug } = query;
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/${slug}`, {
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