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
      <div className="flex flex-wrap items-center justify-center gap-2 py-4 md:py-8 md:gap-4">
        {buttons.map((button, idx) => {
          return (
            <div key={idx} className="mr-2 md:mr-4">
              <Link to={"/filteredProducts/" + button}>
                <Button
                  color="gray"
                  ripple={true}
                  variant="outlined"
                  className="text-sm text-black duration-300 ease-in md:text-base lg:text-lg hover:bg-gray-300"
                  onClick={() => dispatch(filteredProducts(button))}
                >
                  {button}
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="bg-black p-2 w-[80%] md:w-[60%] lg:w-[55%] mx-auto rounded-md">
        <h3 className="text-base font-bold leading-none tracking-normal text-center text-red-600 md:text-lg lg:text-xl font-inter">
          SALES UP TO 50%
        </h3>
      </div>
      <div className="flex items-center justify-center py-4">
        <img
          src={clothes}
          alt="Clothes"
          className="h-[300px] md:h-[400px] lg:h-[600px] w-[90%] md:w-[75%] lg:w-[65%] rounded-md shadow-md shadow-gray-600 object-cover"
        />
      </div>
    </>
  );
};

export default NavigateButtons;
