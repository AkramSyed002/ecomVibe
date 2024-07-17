import { Button } from "@mui/material";
import { COLORS } from "constant/colors";
import React from "react";

const CommonButton = (props: any) => {
  const buttonStyle = {
    borderRadius: "0px",
    border: "1.5px solid white",
    padding:"10px 20px",
    background: props.bColor === "blue" ? COLORS.blue.blue : COLORS.light.white,
    fontWeight: "600px",
    outline: "1px solid white",
    color: COLORS.black.black,
    width: props.width ? props.width : "auto",
    textAlign:"center",
    "&:hover": {
      background: COLORS.black.black,
      color: COLORS.light.white,
    },
  };
  const { title,onClick } = props || {};
  return (
    <div>
      <Button onClick={onClick} sx={buttonStyle} type="button">
        {title}
      </Button>
    </div>
  );
};

export default CommonButton;
