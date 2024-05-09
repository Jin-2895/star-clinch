import Image from "next/image";

// import { AppConfig } from '../utils/AppConfig';
import LogoImage from "../../public/logo/logo.png";

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? "200" : "200";
  const fontStyle = props.xl
    ? "font-semibold text-3xl"
    : "font-semibold text-xl";

  return (
    <span className={`flex flex-row items-center gap-2  ${fontStyle}`}>
      <div className="w-32 sm:w-full">
        <Image
          src={LogoImage}
          alt="starClinch logo"
          width={size}
          height={size}
        />
      </div>

      {/* {AppConfig.site_name} */}
    </span>
  );
};

export { Logo };
