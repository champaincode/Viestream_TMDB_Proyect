import { configureStore  } from '@reduxjs/toolkit'
import logger from "redux-logger"
import userReducer from './user'
import favoriteReducer from './favoritos'
import addfavoriteReducer from "./addfavoritos"


const store =configureStore({
  middleware:(getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(logger),
  reducer: {
    user:userReducer,
    fav: favoriteReducer,
    addfav:addfavoriteReducer
  },
})

export default store