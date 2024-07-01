import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Tooltip, Button } from "@material-tailwind/react";
import { addToCart } from "../../features/slices/cartSlice";
import { addToWishlist } from "../../features/slices/wishListSlice";

const SingleProduct = () => {
  const product = useSelector((state) => state.products.singleProduct);
  console.log("singleProduct", product);
  const productSize = product[0].size ? product[0].size[0] : "";
  const productColor = product[0].color[0];
  const [size, setSize] = useState(productSize);
  const [color, setColor] = useState(productColor);
  const dispatch = useDispatch();
  const { id } = useParams();

  return (
    <div>
      {product
        .filter((product) => product.id === id)
        .map((item, idx) => {
          return (
            <div key={idx} className="flex items-center justify-center py-10 ">
              <div className="pl-44 grow-[2]">
                <img
                  className="h-[600px] rounded-lg"
                  src={item.img}
                  alt={item.name}
                />
              </div>
              <div className="grow-[3]">
                <div className="max-w-lg">
                  <h5 className="pb-4 text-2xl font-bold leading-none tracking-normal font-inter">
                    {item.name}
                  </h5>

                  <p className="pb-4 text-xl font-bold leading-none tracking-normal text-orange-700 font-inter">
                    15% OFF
                  </p>
                  <p className="pb-4 text-xl font-bold leading-none tracking-normal text-gray-600 font-inter">
                    {item.text}
                  </p>
                  <div className="pb-4">
                    {item.size ? (
                      <div>
                        <label
                          htmlFor="size"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Pick a size
                        </label>
                        <select
                          id="size"
                          name="size"
                          value={size}
                          onChange={(e) => setSize(e.target.value)}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          {item.size.map((item, index) => {
                            return (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    ) : (
                      <div>
                        <label
                          htmlFor="size"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Pick a size
                        </label>
                        <select
                          id="size"
                          disabled={true}
                          name="size"
                          value={size}
                          onChange={(e) => setSize(e.target.value)}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          {item?.size?.map((item, index) => {
                            return (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    )}
                  </div>
                  <div className="pb-4">
                    <label
                      htmlFor="color"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Pick a color
                    </label>
                    <select
                      id="color"
                      name="color"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      className="bg-gray-50 cursor-pointer border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      {item.color.map((color, index) => {
                        return (
                          <option
                            key={index}
                            value={color}
                            className="cursor-pointer"
                          >
                            {color}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="flex gap-2">
                    <Tooltip content={"Add to Cart"} placeholder={"bottom"}>
                      <Button
                        color="gray"
                        size="lg"
                        variant="outlined"
                        ripple={true}
                        onClick={() =>
                          dispatch(
                            addToCart({
                              id: item.id,
                              name: item.name,
                              img: item.img,
                              text: item.text,
                              size: size,
                              color: color,
                              price: item.price,
                              amount: 1,
                              totalPrice: item.price,
                            })
                          )
                        }
                      >
                        Add To Cart
                      </Button>
                    </Tooltip>

                    <Tooltip content={"Add to Wishlist"} placeholder={"bottom"}>
                      <Button
                        color="blue"
                        size="lg"
                        variant="outlined"
                        ripple={true}
                        onClick={() =>
                          dispatch(
                            addToWishlist({
                              id: item.id,
                              name: item.name,
                              img: item.img,
                              text: item.text,
                              size: size,
                              color: color,
                              price: item.price,
                              amount: 1,
                              totalPrice: item.price,
                            })
                          )
                        }
                      >
                        Add To Wishlist
                      </Button>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SingleProduct;
