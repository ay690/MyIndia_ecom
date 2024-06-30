import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import heart from "../../assets/images/heart.svg";
import bag from "../../assets/images/bag.svg";
import Cart from "../Cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/slices/authSlice";
import { Avatar, Tooltip } from "@material-tailwind/react";

const Navbar = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const user = useSelector((state) => state.auth?.user);
  const { name, image } = user;
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex items-center justify-center w-full p-4 bg-black ">
        <p className="text-2xl font-bold text-white font-inter ">
          Redux Toolkit Time
        </p>
      </div>
      <div className="flex items-center justify-around">
        <div>
          <img className="w-full h-28" src={logo} alt="store" />
        </div>
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center cursor-pointer">
            <img src={heart} alt="heart" className="h-5" />
            <p className="mr-2 text-base font-medium leading-none tracking-normal text-center font-inter">
              Wish List
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
          {/* <div className="flex flex-row items-center pl-4 cursor-pointer">
            {image && (
              <Avatar
                src={image}
                alt="avatar"
                size="sm"
                className="mr-2"
              />
            )}
            <div onClick={() => dispatch(logout())}>
              <Tooltip content="Sign Out" placement="bottom">
                <p className="text-sm font-medium leading-none tracking-normal font-inter">
                  Hi {name.charAt("0").toUpperCase() + name.slice(1)}
                </p>
              </Tooltip>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
