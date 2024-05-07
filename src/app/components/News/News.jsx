"use client";
import { GrTechnology } from "react-icons/gr";
import Container from "../Container/Conatiner";
import newsImg from "../../../../public/assets/NewsImg.png";
import Image from "next/image";
import { GiTechnoHeart } from "react-icons/gi";
import { useThemeContext } from "../../lib/provider/ThemeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const News = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const { dark } = useThemeContext();

  return (
    <div className="flex justify-center items-center my-20 mx-4">
      <Container>
        <div
          data-aos="zoom-in"
          className="flex justify-center items-center mx-auto"
        >
          <span
            className={`text-center  text-lg font-semibold p-2 border-2 rounded-3xl ${
              dark ? "border-white" : "border-black"
            }  flex justify-center items-center`}
          >
            <span>Tech News</span>
            <span>
              <GrTechnology />
            </span>
          </span>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-center text-3xl font-extrabold my-4 bg-gradient-to-r from-black to-white bg-clip-text text-transparent"
        >
          <h1>Our Blog & News</h1>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-center text-gray-600 text-md mb-4"
        >
          <h1>
            We share essential insights from the technology sector, <br /> AI,
            and the world of software development.
          </h1>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-duraion="1000"
          className="flex justify-between rounded-3xl card-gradient3"
        >
          <div className="lg:w-5/12  p-4 flex flex-col justify-center gap-2">
            <span>
              <GiTechnoHeart
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-3xl font-bold"
              />
            </span>{" "}
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              className="lg:text-xl text-sm font-bold"
            >
              Unveiling the Art of Web Design: <br /> A Step-by-Step Guide
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="lg:text-md text-sm"
            >
              In the ever-evolving digital landscape, a visually appealing
              anduser-friendly website is crucial for success...
            </p>
            <button
              data-aos="fade-up"
              data-aos-duration="1000"
              className={`rounded-lg p-2 ${
                dark ? "bg-white text-black" : "bg-black text-white"
              }`}
            >
              Learn More
            </button>
          </div>
          <div>
            <Image
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
              className="  h-full rounded-e-3xl"
              src={newsImg}
              alt="img"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default News;
