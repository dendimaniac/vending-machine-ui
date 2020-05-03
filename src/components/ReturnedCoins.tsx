import React from "react";
import { useSelector } from "react-redux";
import { selectReturnedSet, selectChosenPrice } from "../redux/vendingMachineSlice";

const ReturnedCoins = () => {
  const returnedSet = useSelector(selectReturnedSet);
  const chosenPrice = useSelector(selectChosenPrice);

  return (
    <>
      {Object.keys(returnedSet).length > 0 && (
        <div>
          You are returned
          {Object.keys(returnedSet).map((coinValue) => {
            return (
              " " +
              returnedSet[Number(coinValue)] +
              " coin of " +
              coinValue +
              chosenPrice.currency +
              ", "
            );
          })}
        </div>
      )}
    </>
  );
};

export default ReturnedCoins;
