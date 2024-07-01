import React from "react";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="px-4 py-8">
      <div className="flex items-center justify-center">
        <hr className="w-full h-px bg-gray-400 border-none outline-none opacity-50 md:w-4/5" />
      </div>
      <div className="flex flex-col items-center justify-around pt-4 md:flex-row">
        <div className="mb-4 md:mb-0">
          <img className="h-16 md:h-20" src={logo} alt="logo" />
        </div>
        <div className="text-center md:text-left">
          <p className="text-sm text-black no-underline normal-case font-inter">
            Copyright {year} page by Aniket Yadav 💓
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
