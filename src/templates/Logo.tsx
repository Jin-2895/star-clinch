import Image from 'next/image';
import React from 'react';

// import { AppConfig } from '../utils/AppConfig';
import LogoImage from '../../public/logo/logo.png';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '200' : '200';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span
      className={`flex flex-row items-center gap-2 text-gray-900 ${fontStyle}`}
    >
      <Image src={LogoImage} alt="starClinch logo" width={size} height={size} />

      {/* {AppConfig.site_name} */}
    </span>
  );
};

export { Logo };
