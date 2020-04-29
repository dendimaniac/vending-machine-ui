import { configureStore } from "@reduxjs/toolkit";
import vendingMachineReducer from "./vendingMachineSlice";

export default configureStore({
  reducer: {
    vendingMachine: vendingMachineReducer,
  },
});
