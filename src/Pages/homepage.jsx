import Hero from '../components/sections/Hero';
import Navbar from '../components/homepage/Navbar';
import Section2 from '../components/sections/section2';

export default function Homepage() {
  return (
    <div className="flex flex-col  justify-start w-full h-screen">
      <Navbar />
      <Hero />
      <Section2 />
      <div className=" w-full mt-48">
        <div className="max-h-[538px] ">
          <div className="relative w-full">
            <div className="glass-card left-[100px] relative z-10 rounded-tl-[600px] w-[786px] h-[836px]"></div>
            <div className=" absolute inset-0 bg-gradient-to-b from-pink-500 to-[#080810]  rounded-tr-full w-[406px] h-[538px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
