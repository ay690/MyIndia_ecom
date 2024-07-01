import { createSlice } from "@reduxjs/toolkit";

export const wishSlice = createSlice({
  name: "wish",
  initialState: {
    cart: [],
    amount: 0, // here amount is counter or count
    totalAmount: 0,
  },
  reducers: {
    addToWishlist(state, action) {
      const productId = action.payload;
      try {
        const exist = state.cart.find(
          (product) =>
            product.id === productId.id &&
            product.size === productId.size &&
            product.color === productId.color
        );
        if (exist) {
          exist.amount++;

          state.totalAmount++;
        } else {
          state.cart.push({
            id: productId.id,
            price: productId.price,
            size: productId.size,
            amount: 1,
            img: productId.img,
            totalPrice: productId.price,
            name: productId.name,
            text: productId.text,
            color: productId.color,
          });
          state.totalAmount++;
        }
      } catch (err) {
        return err;
      }
    },
    removeFromWishList(state, action) {
      const productId = action.payload;
      try {
        const exist = state.cart.find(
          (product) =>
            product.id === productId.id &&
            product.size === productId.size &&
            product.color === productId.color
        );
        if (exist.amount === 1) {
          state.cart = state.cart.filter(
            (product) =>
              product.id !== productId.id ||
              product.size !== productId.size ||
              product.color !== productId.color
          );
          state.totalAmount--;
        } else {
          exist.amount--;

          state.totalAmount--;
        }
      } catch (err) {
        return err;
      }
    },
  },
});

export const { addToWishlist, removeFromWishList } = wishSlice.actions;
export default wishSlice.reducer;
