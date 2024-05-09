// import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<any>>;
};

function MobileNav({ open, setOpen }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div
      className={`fixed top-0 right-0 sm:h-screen xs:h-full min-w-[250px]  bg-black md:hidden transform ${
        open ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out `}
    >
      <div className="flex flex-col  justify-center h-full ml-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex text-sm items-center font-medium   gap-4 text-orange-600"
        >
          Book Celebrities
          <svg
            width="10"
            height="10"
            viewBox="0 0 21 14"
            fill="none"
            className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.68571L11.5556 13L20 1"
              stroke="#D9D9D9"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {isOpen ? (
          <div className="absolute right-0 overflow-scroll top-[14rem] h-[400px] z-10 w-[250px] rounded-xl bg-black    p-[2px]">
            <div className="p-6">
              <div className="flex text-sm flex-col gap-4">
                <div className="transition-all duration-300 hover:text-orange-600 cursor-pointer">
                  <Link href="/">Anchor/Emcee</Link>
                </div>
                <div className="transition-all duration-300 hover:text-orange-600 cursor-pointer">
                  <Link href="/">Instrumentalist</Link>
                </div>
                <div className="transition-all duration-300 hover:text-orange-600 cursor-pointer">
                  <Link href="/">Dj</Link>
                </div>
                <div className="transition-all duration-300 hover:text-orange-600 cursor-pointer">
                  <Link href="/">Live Brand</Link>
                </div>
                <div className="transition-all duration-300 hover:text-orange-600 cursor-pointer">
                  <Link href="/">Makeup-Artist/Stylist</Link>
                </div>
                <div className="transition-all duration-300 hover:text-orange-600 cursor-pointer">
                  <Link href="/">Photo/Videographer</Link>
                </div>
                <div className="transition-all duration-300 hover:text-orange-600 cursor-pointer">
                  <Link href="/">Speaker</Link>
                </div>
                <div className="transition-all duration-300 hover:text-orange-600 cursor-pointer">
                  <Link href="/">Celebrities Appearance</Link>
                </div>
                <div className="transition-all duration-300 hover:text-orange-600 cursor-pointer">
                  <Link href="/">Dancer/Troupe</Link>
                </div>
                <div className="transition-all duration-300 hover:text-orange-600 cursor-pointer">
                  <Link href="/">Comedian</Link>
                </div>
                <div className="transition-all duration-300 hover:text-orange-600 cursor-pointer">
                  <Link href="/">Magician</Link>
                </div>
                <div className="transition-all duration-300 hover:text-orange-600 cursor-pointer">
                  <Link href="/">Model</Link>
                </div>
                <div className="transition-all duration-300 hover:text-orange-600 cursor-pointer">
                  <Link href="/">Singer</Link>
                </div>
                <div className="transition-all duration-300 hover:text-orange-600 cursor-pointer">
                  <Link href="/">Variety Artist</Link>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <Link className="text-sm mt-7  font-medium my-4" href="/">
          <h1
            onClick={() => setOpen(!open)}
            className="text-sm  font-medium text-orange-600  transition-all"
          >
            Join Community
          </h1>
        </Link>
        <Link className="text-sm  font-normal my-4" href="/about">
          <h1
            onClick={() => setOpen(!open)}
            className="text-sm font-medium text-orange-600 transition-all"
          >
            Post Requirement
          </h1>
        </Link>
        <Link className="text-sm font-normal my-4" href="/contact">
          <h1
            onClick={() => setOpen(!open)}
            className="text-sm  font-medium text-orange-600 transition-all"
          >
            Contact Us
          </h1>
        </Link>
        <Link className="text-sm font-normal my-4" href="/faq">
          <h1
            onClick={() => setOpen(!open)}
            className="text-sm   font-medium text-orange-600 transition-all"
          >
            FAQs
          </h1>
        </Link>
      </div>
      <div className="flex justify-center gap-3 py-11 ml-4">
        <div>
          {/* <Image width={40} height={40} src={facebook} alt="facebook" /> */}
        </div>
        <div>
          {/* <Image width={40} height={40} src={instagram} alt="instagram" /> */}
        </div>
        <div>
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
      <div className="md:w-2/12 w-9/12 flex justify-end items-center lg:hidden">
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
