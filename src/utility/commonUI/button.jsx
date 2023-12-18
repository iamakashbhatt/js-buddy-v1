import { Button } from "@chakra-ui/react";
import React from "react";

const CommomButton = ({ buttonText, onClick, ...passedProps }) => {
  let { isButtonLoading } = passedProps;
  console.log("6", isButtonLoading);
  let isLoading = false;
  if (isButtonLoading) {
    isLoading = true;
  }
  let props = {
    onClick,
    colorScheme: "blue",
    color: "white",
    _hover: {
      bg: "blue.500",
    },
    isLoading,
    ...passedProps,
  };
  return <Button {...props}>{buttonText}</Button>;
};

export default CommomButton;
