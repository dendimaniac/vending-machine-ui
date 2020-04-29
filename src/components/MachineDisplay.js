import React, { useState } from "react";
import VendingMachine from "vending-machine-api";
import BuyButton from "./BuyButton";
import ReturnedCoins from "./ReturnedCoins";
import InsertedCoins from "./InsertedCoins";
import ChosenItemPriceDisplay from "./ChosenItemPriceDisplay";
import AvailableCoinsDisplay from "./AvailableCoinsDisplay";

const vendingMachine = new VendingMachine({ 1: 2, 2: 4, 5: 3, 10: 4 });

const MachineDisplay = (props) => {
  const { chosenPrice, setChosenPrice } = props;
  const [insertedSet, setInsertedSet] = useState({});
  const [returnedSet, setReturnedSet] = useState({});

  const calcTotalInsertedValue = () => {
    let total = 0;
    Object.keys(insertedSet).forEach((value) => {
      total += Number(value) * Number(insertedSet[value]);
    });
    return total;
  };

  const checkValidBuy = () => {
    const returnedCoinSet = vendingMachine.vending(
      Number(chosenPrice.price),
      insertedSet
    );

    setInsertedSet({});
    setReturnedSet(returnedCoinSet);
    setChosenPrice({ price: 0, currency: "$" });
  };

  return (
    <>
      <ChosenItemPriceDisplay chosenPrice={chosenPrice} />
      <AvailableCoinsDisplay
        chosenPrice={chosenPrice}
        vendingMachine={vendingMachine}
        insertedSet={insertedSet}
        setInsertedSet={setInsertedSet}
      />
      <InsertedCoins
        chosenPrice={chosenPrice}
        calcTotalInsertedValue={calcTotalInsertedValue}
      />
      <ReturnedCoins returnedSet={returnedSet} chosenPrice={chosenPrice} />
      <BuyButton chosenPrice={chosenPrice} checkValidBuy={checkValidBuy} />
    </>
  );
};

export default MachineDisplay;
