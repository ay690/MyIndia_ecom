import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Link, useParams } from "react-router-dom";
import { singleProduct } from "../../features/slices/productsSlice";
import { useDispatch } from "react-redux";

const ProductCard = ({ id, name, text, img, price, colors }) => {
  const dispatch = useDispatch();
  const { type } = useParams();

  return (
    <Link to={`/filteredProducts/${type}/` + id}>
      <Card
        className="relative overflow-hidden w-96"
        onClick={() => dispatch(singleProduct(id))}
      >
        <CardHeader color="blue" className="h-96 w-full right-4 overflow-hidden ">
          <img
            src={img}
            alt="img-blur-shadow"
            className="absolute h-96 w-full object-cover"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            {name}
          </Typography>
          <Typography>{text}</Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">{price}$</Typography>
          <Typography variant="small" color="gray" className="flex gap-1">
            {colors?.map((color, index) => {
              return (
                <i
                  className="fas fa-map-marker-alt fa-sm mt-[3px] rounded-full p-2 mr-4 "
                  key={index}
                  style={{ backgroundColor: color }}
                ></i>
              );
            })}
          </Typography>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
