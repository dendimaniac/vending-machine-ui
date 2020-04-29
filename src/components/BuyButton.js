import React from "react";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { selectChosenPrice, selectInsertedSet, setChosenPrice, setReturnedSet, setInsertedSet } from "../redux/vendingMachineSlice";

const BuyButton = (props) => {
  const dispatch = useDispatch();
  
  const chosenPrice = useSelector(selectChosenPrice);
  const insertedSet = useSelector(selectInsertedSet);

  const { vendingMachine } = props;

  const checkValidBuy = () => {
    const returnedCoinSet = vendingMachine.vending(
      Number(chosenPrice.price),
      insertedSet
    );

    dispatch(setInsertedSet({}));
    dispatch(setReturnedSet(returnedCoinSet));
    dispatch(setChosenPrice({ price: 0, currency: "$" }));
  };

  return (
    chosenPrice.price !== 0 && (
      <Button variant="contained" color="primary" onClick={checkValidBuy}>
        Buy
      </Button>
    )
  );
};

export default BuyButton;
