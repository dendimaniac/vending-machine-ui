import React from "react";
import { Button, List } from "@material-ui/core";

const AvailableCoinsDisplay = (props) => {
  const { chosenPrice, vendingMachine, insertedSet, setInsertedSet } = props;

  return (
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
  );
};

export default AvailableCoinsDisplay;
