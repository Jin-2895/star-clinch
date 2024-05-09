import React from "react";
import { SingleArtist } from "./SingleArtist";
import { VariousArtist } from "@/types/types";

type ISingleArtistProps = {
  data?: VariousArtist | null | undefined;
}

const SingleArtistBase = ({data}: ISingleArtistProps) => {
  return (
      <SingleArtist data={data}/>
  );
};

export { SingleArtistBase };
