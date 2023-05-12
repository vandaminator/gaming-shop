import { createSlice } from "@reduxjs/toolkit";
import GameDb from "../../utils/data/data";

const gameDb = new GameDb()
const topGames = gameDb.showTopGames(5)

const initialState = {
    data: gameDb,
    topGames: topGames,
    genres: gameDb.genres,
    tags: gameDb.tags,
    numGames: gameDb.numGames
}

const dbSlice = createSlice({
    name: 'gameDb',
    initialState,
    reducers: {}
})

export default dbSlice.reducer
