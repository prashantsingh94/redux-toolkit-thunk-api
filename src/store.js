import { configureStore } from "@reduxjs/toolkit";
import CounterSliceReducer from "./CounterSlice";
import fetchDataSliceReducer from "./fetchDataSlice";

const store = configureStore({
  reducer: {
    counter: CounterSliceReducer,
    products: fetchDataSliceReducer
  }
});

export default store;
