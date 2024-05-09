import { SingleArtistBase } from "@/templates/SingleArtist/SingleArtistBase";
import { SingleArtistBaseMobile } from "@/templates/SingleArtist/SingleArtistBaseMobile";
import React from "react";

const index = () => {
  return (
    <>
      <div className="hidden md:block">
        <SingleArtistBase />
      </div>
      <div className="block md:hidden">
        <SingleArtistBaseMobile />
      </div>
    </>
  );
};

export default index;
