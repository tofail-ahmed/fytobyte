import Container from "../Container/Conatiner";
import footerImg from "../../../../public/assets/footerLogo.png";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="flex justify-center items-center my-20 mx-4">
      <Container>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <h1 className="text-xl font-bold">Explore</h1>
            <p className="text-sm lg:text-md">About FYTOBYTE LIMITED</p>
            <p className="text-sm lg:text-md">Our Solutions</p>
            <p className="text-sm lg:text-md">Our Blog</p>
          </div>
          <div>
            <h1 className="text-xl font-bold">Explore</h1>
            <p className="text-sm lg:text-md">About FYTOBYTE LIMITED</p>
            <p className="text-sm lg:text-md">Our Solutions</p>
            <p className="text-sm lg:text-md">Our Blog</p>
          </div>
          <div>
            <h1 className="text-xl font-bold">Explore</h1>
            <p className="text-sm lg:text-md">About FYTOBYTE LIMITED</p>
            <p className="text-sm lg:text-md">Our Solutions</p>
            <p className="text-sm lg:text-md">Our Blog</p>
          </div>
          <div>
            <h1 className="text-xl font-bold">Explore</h1>
            <p className="text-sm lg:text-md">About FYTOBYTE LIMITED</p>
            <p className="text-sm lg:text-md">Our Solutions</p>
            <p className="text-sm lg:text-md">Our Blog</p>
          </div>
        </div>
        <div className="my-4">
          <Image className="mx-auto" src={footerImg} alt="image" />
        </div>
      </Container>
    </div>
  );
};

export default Footer;
