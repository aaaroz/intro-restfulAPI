import { configureStore } from "@reduxjs/toolkit";
import products from "./product/product.slices";

const store = configureStore({
  reducer: {
    products,
  },
});

export default store;
