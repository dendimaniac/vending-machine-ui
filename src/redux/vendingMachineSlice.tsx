import { createSlice } from "@reduxjs/toolkit";

export const vendingMachineSlice = createSlice({
  name: "vending-machine",
  initialState: {
    products: [],
    chosenPrice: { price: 0, currency: "$" },
    insertedSet: {},
    returnedSet: {},
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setChosenPrice: (state, action) => {
      state.chosenPrice = action.payload;
    },
    setInsertedSet: (state, action) => {
      state.insertedSet = action.payload;
    },
    setReturnedSet: (state, action) => {
      state.returnedSet = action.payload;
    },
  },
});

export const {
  setProducts,
  setChosenPrice,
  setInsertedSet,
  setReturnedSet,
} = vendingMachineSlice.actions;

export interface Product {
  title: string;
  images: string[];
  prices: {
    current_price: number;
    currency: string;
  };
}

export const selectProducts = (state: { vendingMachine: { products: Product[]; }; }) => state.vendingMachine.products;
export const selectChosenPrice = (state: { vendingMachine: { chosenPrice: { price: number, currency: string }; }; }) => state.vendingMachine.chosenPrice;
export const selectInsertedSet = (state: { vendingMachine: { insertedSet: number[]; }; }) => state.vendingMachine.insertedSet;
export const selectReturnedSet = (state: { vendingMachine: { returnedSet: number[]; }; }) => state.vendingMachine.returnedSet;

export default vendingMachineSlice.reducer;
