import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import heart from "../../assets/images/heart.svg";
import bag from "../../assets/images/bag.svg";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="flex items-center justify-center w-full p-4 bg-black ">
        <p className="text-2xl font-bold text-white font-inter ">
          Redux Toolkit Time
        </p>
      </div>
      <div className="flex items-center justify-around">
        <div>
          <img className="w-full h-28" src={logo} alt="store"></img>
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="flex flex-row items-center cursor-pointer">
            <img src={heart} alt="heart" className="h-5" />
            <p className="mr-2 text-base font-medium leading-none tracking-normal text-center font-inter">
              Whish List
            </p>
          </div>
          <div
            className="flex flex-row items-center cursor-pointer"
            onClick={handleOpen}
          >
            {totalAmount > 0 ? (
              <span className="px-2 mr-1 text-sm bg-gray-300 rounded-full font-inter">
                {totalAmount}
              </span>
            ) : (
              <img src={bag} alt="cart" className="h-5" />
            )}

            <p className="text-base font-medium leading-none tracking-normal text-center font-inter">
              Cart
            </p>
            <div>
              {open && <Cart openModal={open} setOpen={setOpen}></Cart>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
