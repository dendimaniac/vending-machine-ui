import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts, setChosenPrice } from "../redux/vendingMachineSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  const selectProduct = (product) => {
    dispatch(setChosenPrice({
      price: product.prices.current_price,
      currency: product.prices.currency,
    }));
  }

  return (
    <List>
      {products.map((product, index) => {
        return (
          <ListItem
            button
            key={index}
            onClick={() => {
              selectProduct(product);
            }}
          >
            <ListItemAvatar>
              <Avatar alt={product.title} src={product.images[0]} />
            </ListItemAvatar>
            <ListItemText
              primary={product.title}
              secondary={`${product.prices.current_price}${product.prices.currency}`}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default ProductList;
