import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    filteredProducts:
      JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
    singleProduct:
      JSON.parse(sessionStorage.getItem("singleProduct")) || storeData,
    error: false,
  },
  reducers: {
    filteredProducts(state, action) {
      try {
        const filter = storeData.filter(
          (product) => product.type === action.payload
        );
        state.filteredProducts = filter;
        console.log("filter", filter);
        state.error = false;
        const saveState = JSON.stringify(filter);
        sessionStorage.setItem("filterdData", saveState);
      } catch (error) {
        return error;
      }
    },
    singleProduct(state, action) {
      try {
        const oneProduct = storeData.filter(
          (product) => product.id === action.payload
        );
        state.singleProduct = oneProduct;
        const saveState = JSON.stringify(oneProduct);
        sessionStorage.setItem("singleProduct", saveState);
      } catch (error) {
        return error;
      }
    },
    filterGender(state, action) {},
    sortByPrice(state, action) {},
    filterByColor(state, action) {},
    filterBysize(state, action) {},
  },
});

export const {
  filterByColor,
  filterBysize,
  filteredProducts,
  singleProduct,
  filterGender,
  sortByPrice,
} = productSlice.actions;

export default productSlice.reducer;
