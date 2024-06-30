import React from "react";
import { storeData } from "../../assets/data/dummyData";
import ProductSectionItem from "./ProductSectionItem";

const ProductSection = () => {
  return (
    <div>
      <div className="bg-black p-2 w-[50%] mx-auto rounded-md">
        <h2 className="text-lg font-bold leading-none tracking-normal text-center text-red-600 font-inter">
          SUMMER T-Shirt SALE 30%
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-4 py-8 mx-auto justify-items-center max-w-7xl">
        {storeData.slice(0, 6).map((product, index) => {
          return (
            <div key={index}>
              <ProductSectionItem
                id={product.id}
                name={product.name}
                img={product.img}
                text={product.text}
                price={product.price}
                totalPrice={product.totalPrice}
                color={product.color}
                size={product.size}
              ></ProductSectionItem>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSection;
