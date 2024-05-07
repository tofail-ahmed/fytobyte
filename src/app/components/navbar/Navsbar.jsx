"use client";
import React from "react";
import Image from "next/image";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import logo from "../../../../public/assets/logo1.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdWifiCalling3 } from "react-icons/md";
import { useThemeContext } from "../../lib/provider/ThemeContext";
import Container from "../Container/Conatiner";
import { Button, Navbar } from "flowbite-react";

const Navsbar = () => {
  const pathName = usePathname();
  const { dark, toggleTheme } = useThemeContext();

  return (
    <Container className="z-50">
      <Navbar fluid rounded className="relative z-50 backdrop-blur-lg ">
        <Navbar.Brand href="https://flowbite-react.com">
          <Image
            src={logo}
            className="lg:w-[300px] w-[200px] sm:h-9"
            alt="Flowbite React Logo"
          />
          {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-black">
            Flowbite React
          </span> */}
        </Navbar.Brand>
        <div className="flex md:order-2">
          {/* <Button>Get started</Button> */}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </Container>
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
