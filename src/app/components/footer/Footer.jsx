"use client"
import Container from "../Container/Conatiner";
import footerImg from "../../../../public/assets/footerLogo.png";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      offset: -450
    });
  }, []);
  return (
    <div className="flex justify-center items-center my-20 mx-4">
      <Container>
        <div className="grid lg:grid-cols-4 grid-cols-2  gap-4">
          <div className="mx-auto text-center" data-aos="fade-up" >
            <h1 className="text-xl font-bold">Explore</h1>
            <div className="lg:block hidden">
              <p className="text-sm lg:text-md">About FYTOBYTE LIMITED</p>
              <p className="text-sm lg:text-md">Our Solutions</p>
              <p className="text-sm lg:text-md">Our Blog</p>
            </div>
          </div>
          <div className="mx-auto text-center" data-aos="fade-up" >
            <h1 className="text-xl font-bold">Expertise</h1>
            <div className="lg:block hidden">
              <p className="text-sm lg:text-md">Cloud Integration Solutions</p>
              <p className="text-sm lg:text-md">Custom Web Development</p>
              <p className="text-sm lg:text-md">Data Analytics and Insights</p>
            </div>
          </div>
          <div className="mx-auto text-center" data-aos="fade-up" >
            <h1 className="text-xl font-bold">Service</h1>
            <div className="lg:block hidden">
              <p className="text-sm lg:text-md">Cybersecurity & Compliance</p>
              <p className="text-sm lg:text-md">AI-Powered Automation</p>
              <p className="text-sm lg:text-md">User Experience Design</p>
            </div>
          </div>
          <div className="mx-auto text-center" data-aos="fade-up" >
            <h1 className="text-xl font-bold">Info</h1>
            <div className="lg:block hidden">
              <p className="text-sm lg:text-md">FAQ</p>
              <p className="text-sm lg:text-md">Documentation</p>
              <p className="text-sm lg:text-md">Get in Touch</p>
            </div>
          </div>
        </div>
        <div className="my-4 mt-8" data-aos="fade-up" >
          <Image className="mx-auto" src={footerImg} alt="image" />
        </div>
      </Container>
    </div>
  );
};


export default Footer;
