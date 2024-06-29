import React from "react";
import logo from "../../assets/images/logo.png";
import heart from "../../assets/images/heart.svg"
import bag from "../../assets/images/bag.svg"

const Navbar = () => {
  return (
    <>
      <div className="w-full bg-black p-2">
        <h3 className="text-white font-inter text-2xl leading-none tracking-normal text-center">
          Welcome All{" "}
        </h3>
      </div>
      <div className="flex justify-around items-center">
        <div>
          <img src={logo} alt="Logo" className="h-20 w-full" />
        </div>

        <div className="flex flex-row justify-center">
          <button className="font inter text-base font-bold tracking-normal leading-none text-center mr-4">
            Logout
          </button>
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="flex flex-row items-center cursor-pointer">
          <img src={heart} alt="heart" className="h-5"/>
            <p className=" font-inter text-base font-medium tracking-normal leading-none text-center mr-2">
              Wishlist
            </p>
          </div>
          <div className="flex flex-row items-center cursor-pointer">
           <img src={bag} alt="cart" className="h-5" />
            <p className=" font-inter text-base font-medium tracking-normal leading-none text-center mr-2">
              Cart
            </p>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Navbar;
