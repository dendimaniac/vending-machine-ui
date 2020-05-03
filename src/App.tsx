import React, { useEffect } from "react";
import ProductList from "./components/ProductList";
import MachineDisplay from "./components/MachineDisplay";
import { Grid, makeStyles } from "@material-ui/core";
import { setProducts } from "./redux/vendingMachineSlice";
import { useDispatch } from "react-redux";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    maxWidth: 1200,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#d9f4ff",
  },
}));

const App = () => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const fetchProducts = async () => {
    let response = await fetch(
      "https://amazon-products1.p.rapidapi.com/offers?type=ALL&max_number=100&min_number=1&country=UK",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "amazon-products1.p.rapidapi.com",
          "x-rapidapi-key":
            "1436158c83mshaa0ac57d784df99p11f801jsn5dd03f4260e3",
        },
      }
    );
    let json = await response.json();
    const newArray = json.offers.map((product: { prices: { current_price: number; }; }) => {
      const newProduct = {
        ...product,
        prices: {
          ...product.prices,
          current_price: Math.round(product.prices.current_price),
        },
      };
      return newProduct;
    });

    dispatch(setProducts(newArray));
  };

  useEffect(() => {
    fetchProducts();
  });

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={5}
      >
        <Grid item xs={6}>
          <ProductList />
        </Grid>
        <Grid item xs={6}>
          <MachineDisplay />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
