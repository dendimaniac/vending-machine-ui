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

export const selectProducts = state => state.vendingMachine.products;
export const selectChosenPrice = state => state.vendingMachine.chosenPrice;
export const selectInsertedSet = state => state.vendingMachine.insertedSet;
export const selectReturnedSet = state => state.vendingMachine.returnedSet;

export default vendingMachineSlice.reducer;
