import { SiKnowledgebase } from "react-icons/si";
import Container from "../Container/Conatiner";
import { useThemeContext } from "../../lib/provider/ThemeContext";
import knowImg from "../../../../public/assets/knowImg.png";
import Image from "next/image";
import { MdAccessAlarm } from "react-icons/md";
const Knowledge = () => {
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
            Knowledge Base
            <SiKnowledgebase />
          </span>
        </div>
        <div className="text-center text-3xl font-extrabold my-4 bg-gradient-to-r from-black to-white bg-clip-text text-transparent">
          <h1>FAQ & Documentation</h1>
        </div>
        <div className="text-center text-gray-600 text-md mb-4">
          <h1>
            FYTOBYTE LIMITED provides customers complete <br /> entry to <br />
            knowledge base API and documentation.
          </h1>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
          <div>
            <Image className="rounded-3xl" src={knowImg} alt="img" />
          </div>
          <div className="flex flex-col justify-center rounded-3xl border-2 border-gray-500 p-4 card-gradient2">
            <MdAccessAlarm className="text-3xl font-bold" />
            <h1 className="text-2xl font-bold">Full API Acess</h1>
            <p>
              Sign up and access our intuitive platform. Upload your data
              effortlessly, then customize preferences. Our robust tools analyze
              and generate insights promptly. Collaborate seamlessly with team
              members using integrated communication features. Watch your
              operations optimize as our app streamlines workflows and drives
              efficiency for your success.
            </p>
            <button className={`rounded-lg p-2 ${dark?"bg-white text-black":"bg-black text-white"}`}>Learn More</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Knowledge;
