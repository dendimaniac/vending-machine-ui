import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";

const ProductList = (props) => {
	const {products, selectProduct} = props;

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