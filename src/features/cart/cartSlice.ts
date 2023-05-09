import { createSlice } from "@reduxjs/toolkit";
import { initial } from "lodash";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

export default cartSlice.reducer
