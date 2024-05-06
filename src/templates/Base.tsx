import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
// import { Banner } from './Home/Banner';
import { Footer } from './Footer';
import { Hero } from './Home/Hero';
import { Navbar } from './Navbar';
import { Price } from './Home/Price';
import { Clients} from './Home/Clients';
import { Commitment } from './Home/Commitment';
import { Funded } from './Home/Funded';
import { Category } from './Home/Category';

const Base = () => (
  <div className="antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar />
    <Hero />
    {/* <Banner /> */}
    <Price />
    <Clients xAxis='-100%' initial='0%'/>
    <Clients xAxis='0%' initial='-100%'/>
    <Commitment />
    <Funded/>
    <Category/>
    {/* <FollowInstagram /> */}
    <Footer />
  </div>
);

export { Base };
