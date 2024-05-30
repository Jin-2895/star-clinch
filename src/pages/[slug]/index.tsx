import { Meta } from "@/layout/Meta";
import { Footer } from "@/templates/Footer";
import { Navbar } from "@/templates/Navbar";
import { SingleArtistBase } from "@/templates/SingleArtist/SingleArtistBase";
import { VariousArtist } from "@/types/types";
import { AppConfig } from "@/utils/AppConfig";
import { GetServerSideProps } from "next";
import React from "react";

const timestamp: number = new Date().getTime();

type IIndexProps ={
  data?: VariousArtist | null | undefined
}

const index = ({data}:IIndexProps) => {

  return (
    <div className="antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Navbar categories={data?.categories}/>
      <SingleArtistBase data={data}/>
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const { slug, city, gender, language, event, genre } = query;

    const queryParams = [];
    if (city) {
      queryParams.push(`l--${city}`);
    }
    if (gender) {
      queryParams.push(`g--${gender}`);
    }
    if (language) {
      queryParams.push(`lang--${language}`);
    }
    if (event) {
      queryParams.push(`e--${event}`);
    }
    const queryString = queryParams.join('_');
    let apiUrl = ""
    if(genre){
      apiUrl = `${"https://staging-api.starclinch.in"}/${slug}/${genre}/${queryString ? `/${queryString}?timestamp=${timestamp}` : ''}`;
    } else {
      apiUrl = `${"https://staging-api.starclinch.in"}/${slug}${queryString ? `/${queryString}?timestamp=${timestamp}` : ''}`;
    }
    console.log(apiUrl)
    const response = await fetch(apiUrl, {
      cache: 'no-cache',
    });
    const data = await response.json();

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      props: {
        data: null,
      },
    };
  }
};

export default index;
