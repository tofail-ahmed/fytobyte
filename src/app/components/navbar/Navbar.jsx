"use client";
import React from "react";
import Image from "next/image";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import logo from "../../../../public/assets/logo1.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdWifiCalling3 } from "react-icons/md";
import {useThemeContext} from "../../lib/provider/ThemeContext"



const Navbar = () => {
  const pathName = usePathname();
  const { dark,toggleTheme } = useThemeContext();

  // const toggleMood = () => {
  //   setDark((prevDark) => !prevDark);
  // };
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
            {[
              { href: "/", label: "Home" },
              { href: "/contact", label: "Contact" },
              { href: "/about", label: "About" },
              { href: "/blog", label: "Blog" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`text-green-600 text-xl m-2 ${
                  pathName === item.href ? "border-b-2 border-b-yellow-500" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex absolute lg:left-[20vw]">
        
        <ul className="menu menu-horizontal px-1">
  {[
    { href: "/", label: "Home" },
    { href: "/contact", label: "Contact" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" }
  ].map((item, index) => (
    <Link
      key={index}
      href={item.href}
      className={`text-green-600 text-xl m-2 ${
        pathName === item.href ? "border-b-2 border-b-yellow-500" : ""
      }`}
    >
      {item.label}s
    </Link>
  ))}
</ul>

        
      </div>
      <div className="navbar-end flex items-center absolute lg:right-[20px] right-[20vw] gap-4">
      <button className="flex justify-center items-center rounded-md border-2 border-zinc-900 p-1 ">
<h1>
  Call Us
</h1>
<MdWifiCalling3 />
</button>
        {dark ? (
          <button onClick={toggleTheme}>
            <MdSunny />
          </button>
        ) : (
          <button onClick={toggleTheme}>
            <FaMoon />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
