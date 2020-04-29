import React from "react";
import { Button } from "@material-ui/core";

const BuyButton = (props) => {
  const { chosenPrice, checkValidBuy } = props;

  return (
    chosenPrice.price !== 0 && (
      <Button variant="contained" color="primary" onClick={checkValidBuy}>
        Buy
      </Button>
    )
  );
};

export default BuyButton;
