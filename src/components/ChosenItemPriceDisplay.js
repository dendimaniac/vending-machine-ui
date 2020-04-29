import React from "react";

const ChosenItemPriceDisplay = (props) => {
  const { chosenPrice } = props;

  return (
    <div>
      Choosen item's price: {chosenPrice.price}
      {chosenPrice.currency}
    </div>
  );
};

export default ChosenItemPriceDisplay;
