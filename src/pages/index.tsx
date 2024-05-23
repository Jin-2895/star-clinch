import { HomeData } from "@/types/types";
import { Base } from "../templates/Base";
import React from "react";
import { GetServerSideProps } from "next";
import HomeMobileBase from "@/templates/HomeMobile/HomeMobileBase";

type IIndexProps = {
  data: HomeData
}

const Index = ({data}: IIndexProps) => {
  if (!data) return null;
  return (
    <>
      <div className="hidden lg:block">
        <Base data={data} />
      </div>
      <div className="block lg:hidden">
        <HomeMobileBase data={data}/>
      </div>
    </>
  );;
};

export const getServerSideProps:GetServerSideProps = async () =>  {
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

export default Index;
