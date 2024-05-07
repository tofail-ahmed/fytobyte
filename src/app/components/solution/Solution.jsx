import { TbSettingsStar } from "react-icons/tb";
import Container from "../Container/Conatiner";
import { AiOutlineSolution } from "react-icons/ai";
import { useThemeContext } from "../../lib/provider/ThemeContext";
import solnImg1 from "../../../../public/assets/solnImg1.png";
import Image from "next/image";
const Solution = () => {
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
              dark ? "border-white" : "border-white"
            }  flex justify-center items-center`}
          >
            Our Solution
            <AiOutlineSolution />
          </span>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-center text-3xl font-extrabold my-4 bg-gradient-to-r from-black to-white bg-clip-text text-transparent"
        >
          <h1>
            Streamlining operations, <br />
            unleashing seamless digital <br />
            solutions
          </h1>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-center text-gray-600 text-md mb-4"
        >
          <h1>Innovative solutions for seamless digital transformation.</h1>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="border-2 border-zinc-500 rounded-3xl card-gradient1"
          >
            <Image
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
              className="rounded-t-3xl"
              src={solnImg1}
              alt="img"
            />
            <div className="p-4">
              <h1
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-3xl font-bold"
              >
                Fytobyte Limited
              </h1>
              <h1
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-md font-bold"
              >
                Solutions
              </h1>
              <p data-aos="fade-up" data-aos-duration="1000">
                A comprehensive business service app offering efficient
                solutions for seamless operations and growth.
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="border-2 border-zinc-500 rounded-3xl card-gradient2"
          >
            <Image
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
              className="rounded-t-3xl"
              src={solnImg1}
              alt="img"
            />
            <div className="p-4">
              <h1
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-3xl font-bold"
              >
                Fytobyte Limited
              </h1>
              <h1
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-md font-bold"
              >
                Solutions
              </h1>
              <p data-aos="fade-up" data-aos-duration="1000">
                A comprehensive business service app offering efficient
                solutions for seamless operations and growth.
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="border-2 border-zinc-500 rounded-3xl card-gradient3"
          >
            <Image
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
              className="rounded-t-3xl"
              src={solnImg1}
              alt="img"
            />
            <div className="p-4">
              <h1
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-3xl font-bold"
              >
                Fytobyte Limited
              </h1>
              <h1
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-md font-bold"
              >
                Solutions
              </h1>
              <p data-aos="fade-up" data-aos-duration="1000">
                A comprehensive business service app offering efficient
                solutions for seamless operations and growth.
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="border-2 border-zinc-500 rounded-3xl card-gradient1"
          >
            <Image
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
              className="rounded-t-3xl"
              src={solnImg1}
              alt="img"
            />
            <div className="p-4">
              <h1
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-3xl font-bold"
              >
                Fytobyte Limited
              </h1>
              <h1
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-md font-bold"
              >
                Solutions
              </h1>
              <p data-aos="fade-up" data-aos-duration="1000">
                A comprehensive business service app offering efficient
                solutions for seamless operations and growth.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Solution;
