import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../types/product.types";

interface CartState {
  items: Product[];
  loading: boolean;
}

const initialState: CartState = {
  items: [],
  loading: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
