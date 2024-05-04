"use client";
import React from "react";
import Image from "next/image";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import logo from "../../../../public/assets/logo1.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavItem from "./navItem";

const Navbar = ({ dark, setDark }) => {
  const toggleMood = () => {
    setDark((prevDark) => !prevDark);
  };
  const pathName = usePathname();
  const mode = "dark";
  return (
    <div className="navbar relative backdrop-blur-xl rounded-xl flex justify-between items-center p-2 z-50">
      <div className="navbar-start">
        <div>
          <Image src={logo} alt="logo" />
        </div>
        <div className="dropdown absolute right-[5vw]">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 me-6 z-[1] p-2 shadow bg-base-100 rounded-box w-auto">
            <Link
              href="/"
              className={`text-green-600 text-xl m-2 ${
                pathName === "/" ? "border-b-2 border-b-yellow-500" : ""
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
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex absolute lg:left-[30vw]">
        <ul className="menu menu-horizontal px-1">
          <Link
            href="/"
            className={`text-green-600 text-xl m-2 ${
              pathName === "/" ? "border-b-2 border-b-yellow-500" : ""
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
            About
          </Link>
          <Link
            href="/blog"
            className={`text-green-600 text-xl m-2 ${
              pathName === "/blog" ? "border-b-2 border-b-yellow-500" : ""
            }`}
          >
            Blog{" "}
          </Link>
        </ul>
      </div>
      <div className="navbar-end flex items-center absolute lg:right-[2vw] right-[20vw]">
        {dark ? (
          <button onClick={toggleMood}>
            <MdSunny />
          </button>
        ) : (
          <button onClick={toggleMood}>
            <FaMoon />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
