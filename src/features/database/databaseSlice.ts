import { createSlice } from "@reduxjs/toolkit";
import GameDb from "../../utils/data/data";

const gameDb = new GameDb()

const initialState = {
    data: gameDb
}

const dbSlice = createSlice({
    name: 'gameDb',
    initialState,
    reducers: {}
})

export default dbSlice.reducer
