import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";
import { login } from "../../features/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const initialState = {
    name: "",
    password: "",
    image: "",
  };

  const [values, setValues] = useState(initialState);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const { authUser, errorMessage } = useSelector((state) => state.auth.user);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(login(values));
    if (!authUser) {
      setError(errorMessage);
    } else {
      setError("");
    }
  };

  return (
    <div className="grid items-center h-screen grid-cols-1 justify-items-center">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="blue"
          className="grid mb-4 h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input
            label="Name"
            size="lg"
            type="text"
            name="name"
            value={values.name}
            onChange={onChange}
          />
          <Input
            label="Password"
            size="lg"
            type="password"
            name="password"
            value={values.password}
            onChange={onChange}
          />
          <Input
            label="Image URL address"
            size="lg"
            type="text"
            name="image"
            value={values.image}
            onChange={onChange}
          />
          {error && (
            <Typography variant="small" color="red">
              {error}
            </Typography>
          )}
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth onClick={handleSubmit}>
            Sign In
          </Button>
          <Typography variant="small" className="flex justify-center mt-6">
            Image is Optional
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
