import React from "react";
import Navbar from "./components/navbar/Navbar";

const Page = () => {
  return (
    <div className="bg-cover bg-center min-h-[90vh] " style={{ backgroundImage: "url('/assets/bg.png')" }}
    >
      <div className="w-[90vw] mx-auto py-4">
        <Navbar />
      </div>
    </div>
  );
};

export default Page;
