import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: {
    products: [],
    totalPrice: 0,
    totalQuantity: 0,
  },
  searchQuery: "",
};

const commonSlide = createSlice({
  name: "commonSlide",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setCart, setSearchQuery } = commonSlide.actions;

export default commonSlide.reducer;