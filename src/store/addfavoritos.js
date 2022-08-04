import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addFavorite = createAsyncThunk("ADD_FAVORITE", async (movie,user) => {
  const addFav = await axios.post("http://localhost:5000/api/favoritos/add", {
    original_title: movie.original_title,
    code: movie.id,
    poster_path: movie.poster_path,
    overview: movie.overview,
    userId: user.id,
    vote_average: movie.vote_average,
  
  });
  return addFav.data;
});

const addfavoriteReducer = createReducer([], {
  [addFavorite.fulfilled]: (state, action) => console.log(action.payload),
});

export default addfavoriteReducer

