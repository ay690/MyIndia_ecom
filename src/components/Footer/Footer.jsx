import React from "react";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <div className="flex items-center justify-center">
        <hr className="w-4/5 h-px bg-gray-400 border-none outline-none opacity-50" />
      </div>
      <div className="flex items-center justify-around pt-4">
        <div>
          <img className="h-20" src={logo} alt="logo" />
        </div>
        <div>
          <p className="text-sm text-black no-underline normal-case font-inter">
            Copyright {year} page by Aniket Yadav 💓
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
