import React from "react";
import { Alert } from "@material-tailwind/react";

const Error = () => {
  return (
    <div className="grid items-center h-screen grid-cols-1 justify-items-center">
      <div className="w-[96]">
        <Alert color="red" className="text-xl font-bold font-inter">
          Sorry no products match your filter search ... Clear the filter and
          try again 😀.
        </Alert>
      </div>
    </div>
  );
};

export default Error;
