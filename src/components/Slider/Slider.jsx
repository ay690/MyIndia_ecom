import React, { useEffect } from "react";
import {
  nextSlide,
  prevSlide,
  dotSlide,
} from "../../features/slices/sliderSlice";
import { useSelector, useDispatch } from "react-redux";
import { sliderData } from "../../assets/data/dummyData";

const Slider = () => {
  const slideIndex = useSelector((state) => state.slider.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(nextSlide(slideIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [dispatch, slideIndex]);

  return (
    <div className="relative pb-4">
      {/* ******* for image rendering ********   */}
      <div>
        {sliderData?.map((item) => {
          return (
            <div
              key={item.id}
              className={
                parseInt(item.id) === slideIndex
                  ? "opacity-100 duration-700 ease-in-out scale-100"
                  : "opacity-0 duration-700 ease-in-out scale-95"
              }
            >
              <div>
                {parseInt(item.id) === slideIndex && (
                  <img
                    className="h-[500px] md:h-[600px] lg:h-[800px] w-full object-cover"
                    src={item.img}
                    alt="shoes"
                  />
                )}
              </div>
              <div className="absolute mx-auto text-center top-1/4 md:top-1/3 lg:top-1/2 inset-x-1/4">
                <p className="text-xl font-bold leading-none tracking-normal text-white md:text-2xl lg:text-4xl font-inter">
                  {parseInt(item.id) === slideIndex && item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ********** for dots rendering******  */}

      <div className="absolute flex transform -translate-x-1/2 bottom-4 md:bottom-8 left-1/2">
        {sliderData?.map((dot, index) => {
          return (
            <div className="mr-2 md:mr-4" key={dot.id}>
              <div
                className={
                  index === slideIndex
                    ? "bg-green-300 rounded-full p-2 cursor-pointer"
                    : "bg-white rounded-full p-2 cursor-pointer"
                }
                onClick={() => dispatch(dotSlide(index))}
              ></div>
            </div>
          );
        })}
      </div>

      {/* ****** buttons next and prev ******  */}
      <div>
        <button
          className="absolute p-2 transform -translate-y-1/2 bg-white rounded-full top-1/2 right-4 hover:bg-green-300"
          onClick={() => dispatch(nextSlide(slideIndex + 1))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <button
          className="absolute p-2 transform -translate-y-1/2 bg-white rounded-full top-1/2 left-4 hover:bg-green-300"
          onClick={() => dispatch(prevSlide(slideIndex - 1))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;
