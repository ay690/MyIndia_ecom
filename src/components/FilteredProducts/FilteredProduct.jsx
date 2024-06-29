import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const FilteredProduct = () => {
  const products = useSelector((state) => state.products.filteredProducts);
  console.log("products", products);
  const { type } = useParams();
  console.log(type);
  return (
    <div>
      <div className="pt-16">
        <div className="pl-14">
          <h1 className="text-gray-600 text-4xl font-inter font-bold tracking-normal leading-none">
            {type}
          </h1>
        </div>
        <div className="grid grid-cols-3 justify-items-center py-20 gap-5">
          {products
            .filter((product) => product.type === type)
            .map((product, index) => {
              return (
                <div key={index}>
                  <ProductCard
                    id={product.id}
                    text={product.text}
                    img={product.img}
                    name={product.name}
                    size={product.size}
                    colors={product.color}
                    price={product.price}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default FilteredProduct;
