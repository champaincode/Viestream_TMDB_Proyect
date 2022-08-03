import { createAction, createReducer,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const setLogout= createAction("SET_LOGOUT")

export const setPersistencia = () => {
     return localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")): {}
        }

    export const setUser = createAsyncThunk(
        "SET_USER", async (data) => {
          const user = await  axios.post("http://localhost:5000/api/user/login", data)
          localStorage.setItem("user",JSON.stringify(user.data))
          return user.data
  })

    
const userReducer = createReducer(setPersistencia(),
{
    [setUser.fulfilled]:(state,action) => action.payload ,
    [setPersistencia.fulfilled]:(state,action) => action.payload,
    [setLogout]:(state,action) => {return {}},
   
})

export default userReducer
 

  