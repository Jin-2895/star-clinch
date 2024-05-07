// import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<any>>
}

function MobileNav({ open, setOpen } : Props) {
  return (
    <div
      className={`absolute top-0 -left-[50px] h-screen w-screen bg-black md:hidden transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out `}
    >
     
      <div className="flex flex-col ml-4 justify-center items-center gap-4">
        <Link className="text-xl font-medium my-4" href="/">
          <h1
            onClick={() => setOpen(!open)}
            className="text-xl font-semibold hover:text-green-500"
          >
            Join Community
          </h1>
        </Link>
        <Link className="text-xl font-normal my-4" href="/about">
          <h1
            onClick={() => setOpen(!open)}
            className="text-xl font-semibold hover:text-green-500 transition-all"
          >
            Post Requirement
          </h1>
        </Link>
        <Link className="text-xl font-normal my-4" href="/contact">
          <h1
            onClick={() => setOpen(!open)}
            className="text-xl font-semibold hover:text-green-500 transition-all"
          >
            Contact Us
          </h1>
        </Link>
        <Link className="text-xl font-normal my-4" href="/faq">
          <h1
            onClick={() => setOpen(!open)}
            className="text-xl  font-semibold hover:text-green-500 transition-all"
          >
            FAQs
          </h1>
        </Link>
      </div>
      <div className="flex justify-center gap-3 py-11 ml-4">
        <div
        >
          {/* <Image width={40} height={40} src={facebook} alt="facebook" /> */}
        </div>
        <div
        >
          {/* <Image width={40} height={40} src={instagram} alt="instagram" /> */}
        </div>
        <div
        >
          {/* <Image width={40} height={40} src={tiktok} alt="tiktok" /> */}
        </div>
      </div>
    </div>
  );
}
export default function MyNavbar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="container mx-auto flex  lg:hidden flex-row filter bg-opacity-96 px-3 h-[4rem] items-center">
      <MobileNav open={open} setOpen={setOpen} />
      <div
        
        className="md:w-2/12 w-9/12 flex justify-end items-center lg:hidden"
      >
        <div
          className="z-50 flex relative w-8 h-4 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-[80%] bg-white rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-[100%]"
            }`}
          />
          <span
            className={`h-1 w-[80%] bg-white rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-1" : ""
            }`}
          />
        </div>
      </div>
    </nav>
  );
}