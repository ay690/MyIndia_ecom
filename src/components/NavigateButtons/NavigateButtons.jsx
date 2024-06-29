import React from "react";
import { Button } from "@material-tailwind/react";
import clothes from "../../assets/images/clothes.jpg";
import { buttons } from "../../helpers/buttons";
import { filteredProducts } from "../../features/slices/productsSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const NavigateButtons = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex flex-wrap items-center justify-center py-8 gap-2">
        {buttons.map((button, idx) => {
          return (
            <div key={idx} className="mr-4">
              <Link to={"/filteredProducts/" + button}>
                <Button
                  color="gray"
                  ripple={true}
                  variant="outlined"
                  className="text-black hover:bg-gray-300 duration-300 ease-in"
                  onClick={() => dispatch(filteredProducts(button))}
                >
                  {button}
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="bg-black p-2 w-[55%] mx-auto rounded-md">
        <h3 className="text-red-600 text-center text-lg font-inter font-bold tracking-normal leading-none">
          SALES UP TO 50%
        </h3>
      </div>
      <div className="flex justify-center items-center py-4">
        <img
          src={clothes}
          alt="Clothes"
          className="h-[600px] w-[65%] rounded-md shadow-md shadow-gray-600"
        />
      </div>
    </>
  );
};

export default NavigateButtons;
