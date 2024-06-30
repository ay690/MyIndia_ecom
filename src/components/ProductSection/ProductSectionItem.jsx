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
    <div>
      <Card className="relative w-96">
        <Typography
          variant="h4"
          className="absolute z-10 mb-2 text-red-700 -rotate-45 top-12 right-8"
        >
          SALE%
        </Typography>
        <CardHeader floated={false} className="h-96">
          <img src={img} alt={name} />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {name}
          </Typography>
          <Typography color="gray" className="font-medium" textGradient>
            {text}
          </Typography>
          <div className="flex items-center justify-between pt-4">
            <Typography color="red" className="font-medium" textGradient>
              Size left:{" "}
              <span className="text-base text-gray-400 font-extralight">
                {defaultSize}
              </span>
            </Typography>
            <Typography color="gray" className="font-medium" textGradient>
              Color:{" "}
              <span
                className="px-2 ml-2 rounded-full"
                style={{ backgroundColor: defaultColor }}
              ></span>
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="flex justify-center pt-2 gap-7">
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
              size="lg"
              color="gray"
              variant="outlined"
              ripple={true}
            >
              Add to Cart
            </Button>
          </Tooltip>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductSectionItem;
