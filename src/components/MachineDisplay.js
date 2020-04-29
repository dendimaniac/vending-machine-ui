import React from "react";
import VendingMachine from "vending-machine-api";
import BuyButton from "./BuyButton";
import ReturnedCoins from "./ReturnedCoins";
import InsertedCoins from "./InsertedCoins";
import ChosenItemPriceDisplay from "./ChosenItemPriceDisplay";
import AvailableCoinsDisplay from "./AvailableCoinsDisplay";

const vendingMachine = new VendingMachine({ 1: 2, 2: 4, 5: 3, 10: 4 });

const MachineDisplay = () => {
  return (
    <>
      <ChosenItemPriceDisplay />
      <AvailableCoinsDisplay vendingMachine={vendingMachine} />
      <InsertedCoins />
      <ReturnedCoins />
      <BuyButton vendingMachine={vendingMachine} />
    </>
  );
};

export default MachineDisplay;
