import React from "react";

const ReturnedCoins = (props) => {
  const { returnedSet, chosenPrice } = props;

  return (
    Object.keys(returnedSet).length > 0 && (
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
    )
  );
};

export default ReturnedCoins;
