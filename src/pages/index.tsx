import { Main } from "@/types/types";
import { Base } from "../templates/Base";
import React from "react";
import { GetServerSideProps } from "next";

type IIndexProps = {
  data: Main
}

const Index = ({data}: IIndexProps) => {
  return data ? <Base data={data} /> : null;
};

export const getServerSideProps:GetServerSideProps = async () =>  {
  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/`, {
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
