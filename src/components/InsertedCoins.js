import React from "react";
import { useSelector } from "react-redux";
import { selectChosenPrice, selectInsertedSet } from "../redux/vendingMachineSlice";

const InsertedCoins = () => {
  const chosenPrice = useSelector(selectChosenPrice);
  const insertedSet = useSelector(selectInsertedSet);

  const calcTotalInsertedValue = () => {
    let total = 0;
    Object.keys(insertedSet).forEach((value) => {
      total += Number(value) * Number(insertedSet[value]);
    });
    return total;
  };

  return (
    <div>
      Inserted coins: {calcTotalInsertedValue()}
      {chosenPrice.currency}
    </div>
  );
};

export default InsertedCoins;
