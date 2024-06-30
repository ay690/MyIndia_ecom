import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "../features/slices/sliderSlice";
import productsReducer from "../features/slices/productsSlice";
import cartReducer from "../features/slices/cartSlice";
import authReducer from "../features/slices/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    slider: slideReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});
