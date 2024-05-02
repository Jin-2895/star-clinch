
import { CTABanner } from "../../cta/CTABanner";
import { Section } from "../../layout/Section";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore from "swiper";
import { A11y, Navigation} from "swiper/modules";
import { CustomSlider } from "./CustomSlider";
import Slider from "react-slick";



const Banner = () => {

  SwiperCore.use([Navigation, A11y]);

  return (
    <Section>
      <CTABanner
        title="Look What Stars have to say"
        subtitle="Recognized excellence by the top celebrities. Get the inside scoop - top celebrities share their thoughts on working with StarClinch."
        style=""
        section={
          <div className="relative h-[40rem]">
            <div className="absolute flex bottom-0 -left-[9rem] justify-center items-center -z-10">
              <div className="w-[20rem] h-[15rem] rounded-t-full bg-gradient-to-bl from-[#FF774CB8] from-20% via-[#DD4B9AB8] via-35% to-[#080810] to-60% backdrop-blur-2xl"></div>
            </div>
            <div className=" flex flex-row gap-10 h-full justify-between px-24">
              <div className="w-[45rem] h-[40rem] border-l-[1px] rounded-sm border-l-gray-700 rounded-tl-[20rem] bg-gradient-to-r from-[#FFFDFD0B] to-transparent backdrop-blur-2xl"></div>
                <CustomSlider/>

            </div>
          </div>
        }
      />
      <Slider />
    </Section>
  );
};

export { Banner };
