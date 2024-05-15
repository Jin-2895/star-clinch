import Image from "next/image";
import React from "react";


type IClientProps = {
  image: {
    value: string, 
    name: string
  }
}

const ClientsLogo = ({ image }: IClientProps) => {
  return (
    <Image className="object-fit w-full h-full max-h-[10rem] max-w-[10rem]" width={150} height={150} src={image.value}  alt={image.name}/>
  );
};

export default ClientsLogo;
