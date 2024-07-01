import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import Error from "../Error/Error";
import {
  filteredProducts,
  filterGender,
  sortByPrice,
  filterByColor,
  filterBySize,
} from "../../features/slices/productsSlice";

const FilteredProduct = () => {
  const products = useSelector((state) => state.products.filteredProducts);
  const error = useSelector((state) => state.products.error);
  const { type } = useParams();
  const dispatch = useDispatch();

  const genderButtons = ["male", "female"];
  const colorButtons = [
    "red",
    "green",
    "purple",
    "yellow",
    "orange",
    "blue",
    "black",
    "brown",
  ];
  const sizeButtons = ["S", "M", "L", "XL"];

  return (
    <div className="container px-4 mx-auto">
      <div className="pt-16">
        <div className="pl-4 md:pl-14">
          <h1 className="text-2xl font-bold leading-none tracking-normal text-gray-600 md:text-4xl font-inter">
            {type}
          </h1>
          <div className="flex flex-col items-start justify-between py-8 md:flex-row md:items-center">
            <div className="flex flex-wrap items-center mb-4 md:mb-0">
              {genderButtons.map((item, index) => (
                <Button
                  key={index}
                  color="gray"
                  size="lg"
                  variant="outlined"
                  ripple={true}
                  className="mb-2 mr-4 text-black duration-300 ease-in-out md:mb-0 hover:bg-gray-300"
                  onClick={() => dispatch(filterGender(item))}
                >
                  {item}
                </Button>
              ))}
              <Button
                color="gray"
                size="lg"
                variant="outlined"
                ripple={true}
                className="mb-2 mr-4 text-black duration-300 ease-in-out md:mb-0 hover:bg-gray-300"
                onClick={() => dispatch(sortByPrice())}
              >
                High Price
              </Button>
              <Menu>
                <MenuHandler>
                  <Button
                    color="gray"
                    size="lg"
                    variant="outlined"
                    ripple={true}
                    className="mb-2 mr-4 text-black duration-300 ease-in-out md:mb-0 hover:bg-gray-300"
                  >
                    Select a color
                  </Button>
                </MenuHandler>
                <MenuList>
                  {colorButtons.map((item, index) => (
                    <MenuItem
                      style={{ color: item }}
                      key={index}
                      onClick={() => dispatch(filterByColor(item))}
                    >
                      {item}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
              <Menu>
                <MenuHandler>
                  <Button
                    disabled={type === "Bags" || type === "Shoes"}
                    color="gray"
                    size="lg"
                    variant="outlined"
                    ripple={true}
                    className="mb-2 mr-4 text-black duration-300 ease-in-out md:mb-0 hover:bg-gray-300"
                  >
                    Select a size
                  </Button>
                </MenuHandler>
                <MenuList>
                  {sizeButtons.map((item, index) => (
                    <MenuItem key={index} onClick={() => dispatch(filterBySize(item))}>
                      {item}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            </div>
            <div className="pr-4 md:pr-14">
              <Button
                color="gray"
                size="lg"
                variant="outlined"
                ripple={true}
                className="text-black duration-300 ease-in-out hover:bg-gray-300"
                onClick={() => dispatch(filteredProducts(type))}
              >
                Clear Filter
              </Button>
            </div>
          </div>
        </div>
        {error ? (
          <Error />
        ) : (
          <div className="grid grid-cols-1 gap-8 py-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {products
              .filter((product) => product.type === type)
              .map((product, index) => (
                <div key={index} className="w-full sm:w-auto">
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    text={product.text}
                    img={product.img}
                    price={product.price}
                    colors={product.color}
                  />
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilteredProduct;
