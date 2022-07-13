import { createSlice } from "@reduxjs/toolkit";

const allAnimeSlice = createSlice({
  name: "allAnimes",
  initialState: [],
  reducers: {
    allAnime(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const { allAnime } = allAnimeSlice.actions;
export default allAnimeSlice.reducer;
