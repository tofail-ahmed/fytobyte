import Container from "../../Container/Conatiner";
import { TbSettingsStar } from "react-icons/tb";
import "./Service.css";
import { useThemeContext } from "../../../lib/provider/ThemeContext";
import { WiDayCloudyWindy } from "react-icons/wi";
import imgLg from "../../../../../public/assets/service-lg.png";
import imgSm from "../../../../../public/assets/service-sm.png";
import Image from "next/image";
const Service = () => {
  const { dark } = useThemeContext();
  return (
    <div className=" flex justify-center items-center mx-4">
      <Container className=" mt-96 ">
        <div data-aos="zoom-in" className="flex justify-center items-center mx-auto">
          <span
            className={`text-center  text-lg font-semibold p-2 border-2 rounded-3xl ${
              dark ? "border-white" : "border-black"
            }  flex justify-center items-center`}
          >
            Our Services
            <TbSettingsStar />
          </span>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" className="text-center text-3xl font-extrabold my-4 bg-gradient-to-r from-black to-white bg-clip-text text-transparent">
          <h1>
            Transform your tech <br />
            business with tailored
            <br />
            services
          </h1>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" className="text-center text-gray-600 text-md mb-4">
          <h1>Websites / Applications / Web3 / Blockchain</h1>
        </div>
        <div className="flex lg:flex-row flex-col gap-4 my-4 p-4">
          <div data-aos="fade-up" data-aos-duration="1000"  className="border-2 border-gray-400 flex flex-col gap-2 justify-center rounded-3xl p-2 lg:w-1/3 w-[50vw] mx-auto card-gradient3">
            <WiDayCloudyWindy data-aos="fade-down"  data-aos-duration="1000" data-aos-delay="500" className="text-3xl font-semibold" />
            <h1 data-aos="fade-down"  data-aos-duration="1000" data-aos-delay="500" className="text-4xl font-bold">Lorem Ipsum</h1>
            <h1 data-aos="fade-down"  data-aos-duration="1000" data-aos-delay="500" className="text-xl font-semibold">Create Fast And Simple</h1>
            <h1 data-aos="fade-down"  data-aos-duration="1000" data-aos-delay="500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eos
              voluptatem quo laborum perferendis eligendi voluptas nam
              dignissimos hic dolorem inventore…
            </h1>
          </div>
          <div className=" lg:w-2/3 w-full ">
            <Image data-aos="fade-up" data-aos-duration="1000" className="w-full h-full" src={imgLg} alt="img" />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col gap-4 my-4 p-4">

          <div className="lg:w-2/3 w-full flex gap-4">
            <div className=" w-[50vw]  rounded-lg">
              <Image data-aos="fade-up" data-aos-duration="1000"  className="rounded-3xl h-full" src={imgSm} alt="img" />
            </div>

            <div data-aos="fade-up" data-aos-duration="1000"   className="border-2 border-gray-400 flex flex-col gap-2 justify-center rounded-3xl p-2 w-[50vw] card-gradient2 ">
              <WiDayCloudyWindy data-aos="fade-down"  data-aos-duration="1000" data-aos-delay="500" className="text-3xl font-semibold" />
              <h1 data-aos="fade-down"  data-aos-duration="1000" data-aos-delay="500" className="text-4xl font-bold">Lorem Ipsum</h1>
              <h1 data-aos="fade-down"  data-aos-duration="1000" data-aos-delay="500" className="text-xl font-semibold">Create Fast And Simple</h1>
              <h1 data-aos="fade-down"  data-aos-duration="1000" data-aos-delay="500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                eos voluptatem quo laborum perferendis eligendi voluptas nam
                dignissimos hic dolorem inventore…
              </h1>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" className="border-2 border-gray-400 flex flex-col gap-2 justify-center rounded-3xl p-2 lg:w-1/3 w-[50vw] mx-auto card-gradient1 ">
            <WiDayCloudyWindy data-aos="fade-down"  data-aos-duration="1000" data-aos-delay="500" className="text-3xl font-semibold" />
            <h1 data-aos="fade-down"  data-aos-duration="1000" data-aos-delay="500" className="text-4xl font-bold">Lorem Ipsum</h1>
            <h1 data-aos="fade-down"  data-aos-duration="1000" data-aos-delay="500" className="text-xl font-semibold">Create Fast And Simple</h1>
            <h1 data-aos="fade-down"  data-aos-duration="1000" data-aos-delay="500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eos
              voluptatem quo laborum perferendis eligendi voluptas nam
              dignissimos hic dolorem inventore…
            </h1>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Service;
