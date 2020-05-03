import React from "react";
import { useSelector } from "react-redux";
import { selectChosenPrice } from "../redux/vendingMachineSlice";

const ChosenItemPriceDisplay = () => {
  const chosenPrice = useSelector(selectChosenPrice);

  return (
    <div>
      Choosen item's price: {chosenPrice.price}
      {chosenPrice.currency}
    </div>
  );
};

export default ChosenItemPriceDisplay;
