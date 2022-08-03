import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getFavorite = createAsyncThunk("GET_FAVORITE", async (userId) => {
  const fav = await axios.get(`http://localhost:5000/api/favoritos/${userId}`);
  return fav.data;
});

const favoriteReducer = createReducer([], {
  [getFavorite.fulfilled]: (state, action) => action.payload,
});

export default favoriteReducer;
