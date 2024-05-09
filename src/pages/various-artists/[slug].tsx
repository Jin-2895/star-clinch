import { Meta } from "@/layout/Meta";
import { Footer } from "@/templates/Footer";
import { Navbar } from "@/templates/Navbar";
import { SingleArtistBase } from "@/templates/SingleArtist/SingleArtistBase";
import { SingleArtistBaseMobile } from "@/templates/SingleArtist/SingleArtistBaseMobile";
import { VariousArtist } from "@/types/types";
import { AppConfig } from "@/utils/AppConfig";
import { GetServerSideProps } from "next";
import React from "react";

type IIndexProps ={
  data?: VariousArtist | null | undefined
}

const index = ({data}:IIndexProps) => {
  return (
    <div className="antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Navbar categories={data?.categories}/>
      <div className="hidden md:block">
        <SingleArtistBase data={data}/>
      </div>
      <div className="block md:hidden">
        <SingleArtistBaseMobile />
      </div>
      <Footer />
    </div>
  );
};

export const getServerSideProps:GetServerSideProps = async ({query}) => {
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

export default index;
