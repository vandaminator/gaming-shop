import React from 'react'
import { createSlice } from "@reduxjs/toolkit";
import * as icons from "../../components/icons";

const initialState = {
    menuItems: [
        { icon: icons.aCart1, link: "#", name: "Cart" },
        { icon: icons.aStar, link: "#", name: "Popular" },
        { icon: icons.aTag, link: "#", name: "Genres" },
        { icon: icons.aTag, link: "#", name: "Tags" },
      ]
}

const systemSlice = createSlice({
    name: 'system',
    initialState,
    reducers: {}
})

export default systemSlice.reducer