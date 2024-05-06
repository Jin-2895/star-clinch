
import { CTABanner } from "../../cta/CTABanner";
import { Section } from "../../layout/Section";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { A11y, Navigation} from "swiper/modules";
import VideoSource from "./VideoSource";
import { DefaultCarousel } from "./Carousel";
import Image from "next/image";

const data = [
  {
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    title: "Big Buck Bunny",
  },
  {
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    title: "Elephant Dream",
  },
  {
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    title: "For Bigger Blazes",
  },
  {
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    title: "For Bigger Escape",
  },
  {
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    title: "For Bigger Fun",
  },
  {
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    title: "For Bigger Joyrides",
  },
  {
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    title: "For Bigger Meltdowns",
  },
];

const Banner = () => {

  SwiperCore.use([Navigation, A11y]);

  return (
    <Section>
      <CTABanner
        title="Look What Stars have to say"
        subtitle="Recognized excellence by the top celebrities. Get the inside scoop - top celebrities share their thoughts on working with StarClinch."
        style=""
        section={
          <DefaultCarousel>
            {data.map((slide: {title: string, sources: string}) => (
              <Image width={1000} height={1000} src={slide.sources} alt="slides" />
            ))}
          </DefaultCarousel>
        }
      />
    </Section>
  );
};

export { Banner };
