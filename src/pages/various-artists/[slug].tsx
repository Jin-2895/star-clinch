import { Meta } from "@/layout/Meta";
import { Footer } from "@/templates/Footer";
import { Navbar } from "@/templates/Navbar";
import { SingleArtistBase } from "@/templates/SingleArtist/SingleArtistBase";
import { SingleArtistBaseMobile } from "@/templates/SingleArtist/SingleArtistBaseMobile";
import { VariousArtist } from "@/types/types";
import { GetServerSideProps } from "next";
import React from "react";

type IIndexProps = {
  data?: VariousArtist | null | undefined;
};

const index = ({ data }: IIndexProps) => {
  return (
    <div className="antialiased">
      <Meta title={data?.meta?.title} description={data?.meta?.description} />
      <Navbar categories={data?.categories} />
      <div className="hidden  md:block">
        <SingleArtistBase data={data} />
      </div>
      <div className="block w-full md:hidden">
        <SingleArtistBaseMobile mobileData={data} />
      </div>
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
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
};

export default index;
