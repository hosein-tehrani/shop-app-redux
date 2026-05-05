import { createSlice } from "@reduxjs/toolkit";
import { sumProducts } from "../../helper/helper";
import { useCart } from "../../context/CartContext";
const initialState = {
  selectedProducts: [],
  itemCounter: 0,
  total: 0,
  checkout: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.selectedProducts.push({ ...action.payload, quantity: 1 });
      const { total, itemCounter } = sumProducts(state.selectedProducts);
      state.total = total;
      state.itemCounter = itemCounter;
      state.checkout = false;
    },
    removeItem: (state, action) => {
      const newSelected = state.selectedProducts.filter(
        (item) => item.id !== action.payload.id,
      );
      state.selectedProducts = newSelected;

      const { total, itemCounter } = sumProducts(state.selectedProducts);
      state.total = total;
      state.itemCounter = itemCounter;
      state.checkout = false;
    },
    increase: (state, action) => {
      const incIndex = state.selectedProducts.findIndex(
        (item) => item.id === action.payload.id,
      );
      state.selectedProducts[incIndex].quantity++;
      const { total, itemCounter } = sumProducts(state.selectedProducts);
      state.total = total;
      state.itemCounter = itemCounter;
      state.checkout = false;
    },
    decrease: (state, action) => {
      const decIndex = state.selectedProducts.findIndex(
        (item) => item.id === action.payload.id,
      );
      state.selectedProducts[decIndex].quantity--;
      const { total, itemCounter } = sumProducts(state.selectedProducts);
      state.total = total;
      state.itemCounter = itemCounter;
      state.checkout = false;
    },
    checkout: (state) => {
      state.selectedProducts = [];
      state.total = 0;
      state.itemCounter = 0;
      state.checkout = true;
    },
  },
});
export default cartSlice.reducer;
export const { addItem, removeItem, increase, decrease, checkout } =
  cartSlice.actions;
