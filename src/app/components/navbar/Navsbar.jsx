"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../../public/assets/logo1.png";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useThemeContext } from "../../lib/provider/ThemeContext";
import Container from "../Container/Conatiner"

const Navsbar = () => {
  const { dark, toggleTheme } = useThemeContext();
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" relative z-50 navbar bg-slate-400/50 backdrop-blur-xl w-[90vw] rounded-2xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
  );
};

const NavItem = ({ path, currentPath, children }) => {
  const isActive = currentPath === path;
  return (
    <li className="m-2">
      <Link href={path} className={`text-[#224192] text-xl ${
        isActive ? "border-b-2 border-b-[#224192]" : ""
      }`}>
        {children}
      </Link>
    </li>
  );
};

export default Navsbar;




// "use client";
// import React from "react";
// import Image from "next/image";
// import { FaMoon } from "react-icons/fa";
// import { MdSunny } from "react-icons/md";
// import logo from "../../../../public/assets/logo1.png";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { MdWifiCalling3 } from "react-icons/md";
// import {useThemeContext} from "../../lib/provider/ThemeContext"
// import Container from "../Container/Conatiner"

// const Navbar = () => {
//   const pathName = usePathname();
//   const { dark,toggleTheme } = useThemeContext();

//   return (
//     <Container>
//       <div className="navbar relative backdrop-blur-xl rounded-xl flex justify-between items-center p-2 z-50">
//         <div className="navbar-start ">
//           <div>
//             <Image src={logo} alt="logo" />
//           </div>
//           <div className="dropdown ">
//             <div
//               tabIndex={0}
//               role="button"
//               className="btn btn-ghost lg:hidden block  "
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </div>

//             <ul className="menu menu-sm dropdown-content mt-3 me-6 z-[1] p-2 shadow bg-base-100 rounded-box w-auto">
//               {[
//                 { href: "/", label: "Home" },
//                 { href: "/contact", label: "Contact" },
//                 { href: "/about", label: "About" },
//                 { href: "/blog", label: "Blog" },
//               ].map((item, index) => (
//                 <Link
//                   key={index}
//                   href={item.href}
//                   className={`text-fuchsia-700 text-xl m-2 ${
//                     pathName === item.href
//                       ? "border-b-2 border-b-fuchsia-700"
//                       : ""
//                   }`}
//                 >
//                   {item.label}
//                 </Link>
//               ))}

//             </ul>
//           </div>
//         </div>
//         <div className="navbar-center hidden lg:flex ">
//           <ul className="menu menu-horizontal px-1">
//             {[
//               { href: "/", label: "Home" },
//               { href: "/contact", label: "Contact" },
//               { href: "/about", label: "About" },
//               { href: "/blog", label: "Blog" },
//             ].map((item, index) => (
//               <Link
//                 key={index}
//                 href={item.href}
//                 className={`text-fuchsia-700 text-xl m-2 ${
//                   pathName === item.href
//                     ? "border-b-2 border-b-fuchsia-700"
//                     : ""
//                 }`}
//               >
//                 {item.label}s
//               </Link>
//             ))}

//           </ul>
//         </div>
//         <div className="navbar-end flex items-center absolute right-0  gap-4">
//           {dark ? (
//             <button onClick={toggleTheme}>
//               <MdSunny />
//             </button>
//           ) : (
//             <button onClick={toggleTheme}>
//               <FaMoon />
//             </button>
//           )}
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default Navbar;
