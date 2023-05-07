import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import systemSlice from "./features/system/systemSlice";
import databaseSlice from "./features/database/databaseSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        system: systemSlice,
        gameDb: databaseSlice
    }
})

export default store