import React, { useState } from "react";
import { List, Button } from "@material-ui/core";
import VendingMachine from "vending-machine-api";

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
      <div>
        Choosen item's price: {chosenPrice.price}
        {chosenPrice.currency}
      </div>
      <div>
        Available coins value:
        {chosenPrice.price !== 0 && (
          <List>
            {Object.keys(vendingMachine.coins).map((coinValue, index) => {
              return (
                <Button
                  variant="contained"
                  color="primary"
                  key={index}
                  onClick={() => {
                    let valueToSet = 1;
                    if (insertedSet[coinValue] !== undefined) {
                      valueToSet = Number(insertedSet[coinValue]) + 1;
                    }
                    setInsertedSet((insertedSet) => ({
                      ...insertedSet,
                      [coinValue]: valueToSet,
                    }));
                  }}
                >
                  {coinValue}
                </Button>
              );
            })}
          </List>
        )}
      </div>
      <div>
        Inserted coins: {calcTotalInsertedValue()}
        {chosenPrice.currency}
      </div>
      {Object.keys(returnedSet).length > 0 && (
        <div>
          You are returned
          {Object.keys(returnedSet).map((coinValue) => {
            return (
              " " +
              returnedSet[coinValue] +
              " coin of " +
              coinValue +
              chosenPrice.currency +
              ", "
            );
          })}
        </div>
      )}
      {chosenPrice.price !== 0 && (
        <Button variant="contained" color="primary" onClick={checkValidBuy}>
          Buy
        </Button>
      )}
    </>
  );
};

export default MachineDisplay;
