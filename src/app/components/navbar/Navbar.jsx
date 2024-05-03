"use client";
import Image from "next/image";
import React from "react";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import logo from "../../../../public/assets/logo1.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const mode = "dark";
  return (
    <div className="backdrop-blur-2xl rounded-xl flex justify-between items-center p-2">
      <div>
        <Image src={logo} alt="logo" />
      </div>
      <div className="flex justify-around items-center">
        <Link
          href="/"
          className={`text-green-600 text-xl m-2 ${
            pathName === "/" ? "border-b-yellow-500" : ""
          }`}
        >
          Home{" "}
        </Link>
        <Link
          href="/contact"
          className={`text-green-600 text-xl m-2 ${
            pathName === "/contact" ? "border-b-yellow-500" : ""
          }`}
        >
          Contact{" "}
        </Link>
        <Link
          href="/about"
          className={`text-green-600 text-xl m-2 ${
            pathName === "/about" ? "border-b-yellow-500" : ""
          }`}
        >
          About{" "}
        </Link>
        <Link
          href="/blog"
          className={`text-green-600 text-xl m-2 ${
            pathName === "/blog" ? "border-b-yellow-500" : ""
          }`}
        >
          Blog{" "}
        </Link>
      </div>
      <div className="flex justify-around items-center">
        {mode === "dark" ? <MdSunny /> : <FaMoon />}
      </div>
    </div>
  );
};

export default Navbar;
