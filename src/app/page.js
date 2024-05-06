
"use client";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Image from "next/image";
import ball from "../../public/assets/ball.png";
import Service from "./components/navbar/Service/Service.jsx";
import { useThemeContext } from "./lib/provider/ThemeContext";
import Solution from "./components/solution/Solution.jsx";
import Knowledge from "./components/knowledge/Knowledge.jsx"
import News from "./components/News/News.jsx"
const HeroSection = () => {
  const { dark } = useThemeContext();

  return (
    <div className="h-auto ">
      {/* Background image for large screens */}
      <div
        className="hidden lg:block bg-cover bg-center absolute inset-0"
        style={{ backgroundImage: "url('/assets/bg.png')" }}
      ></div>

      <div className="lg:pt-4 pt-2 relative z-10">
        <HeroContent />
        <ButtonGroup dark={dark} />
      </div>

      <BallImage />
      <Service />
      <Solution/>
      <Knowledge/>
      <News/>
    </div>
  );
};

const HeroContent = () => {
  return (
    <div>
      <h1 className="lg:text-3xl text-lg mx-auto text-center font-extrabold lg:mt-4 mt-2 lg:mb-4 mb-2">
        Transform your workflow with <br /> cutting-edge solutions from <br /> FYTOBYTE
        LIMITED.
      </h1>
      <h1 className="lg:text-lg text-sm mx-auto text-center font-bold lg:mt-4 mt-2 lg:mb-4 mb-2">
        Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit. <br /> Aliquid
        sapiente suscipit amet <br /> optio quia fuga rerum ex cupiditate <br />
        maiores, perferendis blanditiis, quam a.
      </h1>
    </div>
  );
};

const ButtonGroup = ({ dark }) => {
  return (
    <div className="flex justify-center items-center gap-8">
      <button
        className={`${dark? "bg-white text-black" : "bg-black text-white"} p-2 rounded-md lg:text-lg text-sm`}
      >
        Get Started
      </button>
      <button
        className={`${dark? "bg-white text-black" : "bg-black text-white"} p-2 rounded-md lg:text-lg text-sm`}
      >
        Join Us
      </button>
    </div>
  );
};

const BallImage = () => {
  return (
    <div className="absolute inset-0 flex justify-center items-center z-1 lg:top-[500px] top-[50px]">
      <Image
        className="w-full lg:w-[40vw] md:w-[30vw] sm:w-[20vw] xs:w-[10vw]"
        src={ball}
        alt="ball"
      />
    </div>
  );
};

export default HeroSection;