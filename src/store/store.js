import { configureStore  } from '@reduxjs/toolkit'
import logger from "redux-logger"
import userReducer from './user'
import favoriteReducer from './favoritos'
import { } from '@reduxjs/toolkit';


const store =configureStore({
  middleware:(getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(logger),
  reducer: {
    user:userReducer,
    fav: favoriteReducer
  },
})

export default store