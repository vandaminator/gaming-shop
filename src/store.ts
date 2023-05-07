import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import systemSlice from "./features/system/systemSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        system: systemSlice,
    }
})

export default store