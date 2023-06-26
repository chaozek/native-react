import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id == action.payload.id
      );

      state.items = [
        ...state.items.slice(0, index),
        ...state.items.slice(index + 1),
      ];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItemsWithId = (state, id) =>
  state.basket.items.filter((item) => item.id === id);
export const selectBasketItems = (state) => state.basket.items;
export const selectBasketTotal = (state) =>
  state.basket.items.reduce((total, item) => {
    return (total += item.price);
  }, 0);
export default basketSlice.reducer;
