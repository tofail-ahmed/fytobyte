import { GrTechnology } from "react-icons/gr";
import Container from "../Container/Conatiner";
import newsImg from "../../../../public/assets/NewsImg.png";
import Image from "next/image";
import { GiTechnoHeart } from "react-icons/gi";
import { useThemeContext } from "../../lib/provider/ThemeContext";
const News = () => {
  const { dark } = useThemeContext();

  return (
    <div className="flex justify-center items-center my-20 mx-4">
      <Container>
        <div className="flex justify-center items-center mx-auto">
          <span
            className={`text-center  text-lg font-semibold p-2 border-2 rounded-3xl ${
              dark ? "border-white" : "border-black"
            }  flex justify-center items-center`}
          >
            Tech News
            <GrTechnology />
          </span>
        </div>
        <div className="text-center text-3xl font-extrabold my-4 bg-gradient-to-r from-black to-white bg-clip-text text-transparent">
          <h1>Our Blog & News</h1>
        </div>
        <div className="text-center text-gray-600 text-md mb-4">
          <h1>
            We share essential insights from the technology sector, <br /> AI,
            and the world of software development.
          </h1>
        </div>
        <div className="flex justify-between rounded-3xl card-gradient3">
          <div className="w-5/12 p-4 flex flex-col justify-center gap-2">
            <GiTechnoHeart className="text-3xl font-bold" />
            <h1 className="lg:text-xl text-md font-bold">
              Unveiling the Art of Web Design: <br /> A Step-by-Step Guide
            </h1>
            <p className="lg:text-md text-xsm">
              In the ever-evolving digital landscape, a visually appealing
              anduser-friendly website is crucial for success...
            </p>
            <button
              className={`rounded-lg p-2 ${
                dark ? "bg-white text-black" : "bg-black text-white"
              }`}
            >
              Learn More
            </button>
          </div>
          <div>
            <Image className="  h-full rounded-e-3xl" src={newsImg} alt="img" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default News;
