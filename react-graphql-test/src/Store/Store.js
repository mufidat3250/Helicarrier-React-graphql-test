import { configureStore } from "@reduxjs/toolkit";
import allAnimeReducer from "./AllAnemeData";
import filterReducer from "./filterReducer";

const Store = configureStore({
  reducer: {
    AllAnime: allAnimeReducer,
    filter: filterReducer,
  },
});
export default Store;
