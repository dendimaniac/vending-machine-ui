import React from "react";

const InsertedCoins = (props) => {
  const { chosenPrice, calcTotalInsertedValue } = props;

  return (
    <div>
      Inserted coins: {calcTotalInsertedValue()}
      {chosenPrice.currency}
    </div>
  );
};

export default InsertedCoins;
