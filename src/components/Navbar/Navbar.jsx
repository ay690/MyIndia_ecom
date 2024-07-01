import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import heart from "../../assets/images/heart.svg";
import bag from "../../assets/images/bag.svg";
import Cart from "../Cart/Cart";
import WishList from "../WishList/WishList";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/slices/authSlice";
import { Avatar, Tooltip } from "@material-tailwind/react";

const Navbar = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalWishList = useSelector((state) => state.wish.totalAmount);

  const [open, setOpen] = useState(false);
  const [openWish, setOpenWish] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleWishList = () => {
    setOpenWish(true);
  };
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex flex-col items-center justify-around p-4 shadow-lg bg-white-300 md:flex-row">
        <div className="mb-4 md:mb-0">
          <img className="w-24 h-24 md:w-28 md:h-28" src={logo} alt="store" />
        </div>
        <div className="flex flex-row items-center space-x-4 md:space-x-6">
          <div
            className="flex flex-row items-center cursor-pointer"
            onClick={handleWishList}
          >
            {totalWishList > 0 ? (
              <span className="px-2 mr-1 text-sm bg-gray-300 rounded-full font-inter">
                {totalWishList}
              </span>
            ) : (
              <img src={heart} alt="heart" className="h-5" />
            )}
            <p className="mr-2 text-base font-medium leading-none tracking-normal text-center font-inter">
              Wish List
            </p>
          </div>
          <div>
            {openWish && (
              <WishList openModal={openWish} setOpen={setOpenWish} />
            )}
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
          </div>
          <div>{open && <Cart openModal={open} setOpen={setOpen} />}</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
