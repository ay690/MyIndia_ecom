import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "../features/slices/sliderSlice";
import productsReducer from "../features/slices/productsSlice";
import cartReducer from "../features/slices/cartSlice";
import authReducer from "../features/slices/authSlice";
import wishReducer from "../features/slices/wishListSlice.jsx"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    slider: slideReducer,
    products: productsReducer,
    wish: wishReducer,
    cart: cartReducer,
  },
});
