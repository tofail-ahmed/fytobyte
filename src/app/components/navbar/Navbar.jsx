"use client";
import Image from "next/image";
import React from "react";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import logo from "../../../../public/assets/logo1.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({dark,setDark}) => {
      const toggleMood=()=>{
        setDark((prevDark) => !prevDark);

      }
  const pathName = usePathname();
  const mode = "dark";
  return (
    <div className="  relative backdrop-blur-3xl rounded-xl flex justify-between items-center p-2 z-50">
      <div>
        <Image src={logo} alt="logo" />
      </div>
      <div className="flex justify-around items-center">
        <Link
          href="/"
          className={`text-green-600 text-xl m-2 ${
            pathName === "/" ?  "border-b-2 border-b-yellow-500" : ""
          }`}
        >
          Home{" "}
        </Link>
        <Link
          href="/contact"
          className={`text-green-600 text-xl m-2 ${
            pathName === "/contact" ? " border-b-2 border-b-yellow-500" : ""
          }`}
        >
          Contact{" "}
        </Link>
        <Link
          href="/about"
          className={`text-green-600 text-xl m-2 ${
            pathName === "/about" ? " border-b-2 border-b-yellow-500" : ""
          }`}
        >
          About{" "}
        </Link>
        <Link
          href="/blog"
          className={`text-green-600 text-xl m-2 ${
            pathName === "/blog" ? "border-b-2 border-b-yellow-500" : ""
          }`}
        >
          Blog{" "}
        </Link>
      </div>
      <div >

           {dark? <button onClick={toggleMood}> <MdSunny /></button>:
            <button onClick={toggleMood}> <FaMoon /></button>}
        {/* {mode === "dark" ? <MdSunny /> : <FaMoon />} */}
      </div>
    </div>
  );
};

export default Navbar;
