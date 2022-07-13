import { createSlice } from "@reduxjs/toolkit";

const filterReducer = createSlice({
  name: "filter",
  initialState: {
    search: "",
    year: "",
    genre: "",
  },
  reducers: {
    filterBySearch(state, action) {
      state.search = action.payload;
    },
    filterByYear(state, action) {
      state.year = action.payload;
    },
    filterByGenre(state, action) {
      state.genre = action.payload;
    },
  },
});

export const { filterBySearch, filterByYear, filterByGenre } =
  filterReducer.actions;
export default filterReducer.reducer;
