import { createSlice } from "@reduxjs/toolkit";
import * as icons from "../../components/icons";

const initialState = {
    menuItems: [
        { icon: icons.cart1Icon, link: "#", name: "Cart" },
        { icon: icons.starIcon, link: "#", name: "Popular" },
        { icon: icons.tagIcon, link: "#", name: "Genres" },
        { icon: icons.tagIcon, link: "#", name: "Tags" },
      ]
}

const systemSlice = createSlice({
    name: 'system',
    initialState,
    reducers: {}
})

export default systemSlice.reducer