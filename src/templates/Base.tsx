import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Home/Banner';
import { Footer } from './Footer';
import { Hero } from './Home/Hero';
import { Navbar } from './Navbar';

const Base = () => (
  <div className="antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar />
    <Hero />
    <Banner />
    <Footer />
  </div>
);

export { Base };
