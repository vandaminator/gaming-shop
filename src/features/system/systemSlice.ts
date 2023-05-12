import { createSlice } from "@reduxjs/toolkit";
import * as icons from "../../components/icons";
import { action } from "./types";

const initialState = {
  menuItems: [
    { icon: icons.aCart1, link: "#", name: "Cart" },
    { icon: icons.aStar, link: "#", name: "Popular" },
    { icon: icons.aTag, link: "#", name: "Genres" },
    { icon: icons.aTag, link: "#", name: "Tags" },
  ],
  topGameNum: 0,
};

const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    changeTopNum: (state, { payload }: action) => {
      const isLast = state.topGameNum === 5;
      const isFirst = state.topGameNum === 0;

      if (payload === "next") {
        if (isLast) state.topGameNum = 0;
        else state.topGameNum++;
      } else if (payload === "back") {
        if (isFirst) state.topGameNum = 5;
        else state.topGameNum -= 1;
      }
    },
  },
});

const { changeTopNum } = systemSlice.actions;
export { changeTopNum }

export default systemSlice.reducer;
