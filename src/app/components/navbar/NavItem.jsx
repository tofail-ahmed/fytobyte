"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavItem = () => {
      const pathName=usePathname();
      return (
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
      );
};

export default NavItem;





{/* <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
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
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
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
    </ul>
  </div>
  <div className="navbar-end">
  {dark? <button onClick={toggleMood}> <MdSunny /></button>:
            <button onClick={toggleMood}> <FaMoon /></button>}
  </div>
</div> */}