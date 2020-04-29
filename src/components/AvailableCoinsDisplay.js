import React from "react";
import { Button, List } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import {
  selectChosenPrice,
  selectInsertedSet,
  setInsertedSet,
} from "../redux/vendingMachineSlice";

const AvailableCoinsDisplay = (props) => {
  const dispatch = useDispatch();

  const chosenPrice = useSelector(selectChosenPrice);
  const insertedSet = useSelector(selectInsertedSet);

  const { vendingMachine } = props;

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
                  dispatch(
                    setInsertedSet({
                      ...insertedSet,
                      [coinValue]: valueToSet,
                    })
                  );
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
