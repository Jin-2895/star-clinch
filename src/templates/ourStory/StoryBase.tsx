import React from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Mission from "./components/Mission";
import Success from "./components/Success";

const StoryBase = () => {
  return (
    <div className="bg-[#080810] ">
      <Navbar />
      <Hero />
      <About />
      <Mission/>
      <Success/>
      <Footer />
    </div>
  );
};

export default StoryBase;
