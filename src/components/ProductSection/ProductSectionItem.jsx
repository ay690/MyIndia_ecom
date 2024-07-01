import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/slices/cartSlice";
import { addToWishlist } from "../../features/slices/wishListSlice";

const ProductSectionItem = ({
  id,
  img,
  name,
  text,
  size,
  price,
  color,
  totalPrice,
}) => {
  const dispatch = useDispatch();
  const defaultSize = size[0];
  const defaultColor = color[0];

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <Card className="relative w-full sm:w-72 md:w-80 lg:w-96">
        <Typography
          variant="h4"
          className="absolute z-10 mb-2 text-red-700 -rotate-45 top-12 right-8"
        >
          SALE%
        </Typography>
        <CardHeader floated={false} className="h-48 sm:h-64 md:h-72 lg:h-96">
          <img src={img} alt={name} className="object-cover w-full h-full" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" color="blue-gray" className="mb-2 sm:mb-4">
            {name}
          </Typography>
          <Typography color="gray" className="text-sm font-medium sm:text-base" textGradient>
            {text}
          </Typography>
          <div className="flex items-center justify-between pt-2 sm:pt-4">
            <Typography color="red" className="text-sm font-medium sm:text-base" textGradient>
              Size left:{" "}
              <span className="text-base text-gray-400 font-extralight">
                {defaultSize}
              </span>
            </Typography>
            <Typography color="gray" className="text-sm font-medium sm:text-base" textGradient>
              Color:{" "}
              <span
                className="px-2 ml-2 rounded-full"
                style={{ backgroundColor: defaultColor }}
              ></span>
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="flex justify-center gap-2 pt-2 sm:gap-4 md:gap-6 lg:gap-7">
          <Tooltip content="Add to Cart" placement="bottom">
            <Button
              onClick={() =>
                dispatch(
                  addToCart({
                    id: id,
                    img: img,
                    text: text,
                    amount: 1,
                    price: price,
                    totalPrice: totalPrice,
                    name: name,
                    size: defaultSize,
                    color: defaultColor,
                  })
                )
              }
              size="md"
              color="gray"
              variant="outlined"
              ripple={true}
            >
              Add to Cart
            </Button>
          </Tooltip>

          <Tooltip content="Add to WishList" placement="bottom">
            <Button
              onClick={() =>
                dispatch(
                  addToWishlist({
                    id: id,
                    img: img,
                    text: text,
                    amount: 1,
                    price: price,
                    totalPrice: totalPrice,
                    name: name,
                    size: defaultSize,
                    color: defaultColor,
                  })
                )
              }
              size="md"
              color="blue"
              variant="outlined"
              ripple={true}
            >
              Add to Wishlist
            </Button>
          </Tooltip>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductSectionItem;
