import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (FormData) => {
    try {
       const response = await axios.post("http://localhost:5000/api/auth/register",
      FormData,
      {
        withCredentials: true,
      }
    );
    return response.data;
      
    } catch (error) {
      toast.error("User is Already Register")
      navigator('/auth/register')
      console.log(error);
        
    }
    

  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (FormData) => {
    try {
       const response = await axios.post("http://localhost:5000/api/auth/login",
      FormData,
      {
        withCredentials: true,
      }
    );
    return response.data;
      
    } catch (error) {
      toast.error("Invaild User")
      console.log(error);
        
    }
    

  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, actions) => {},
  },
  extraReducers:(builder)=>{
    builder.addCase(registerUser.pending,(state)=>{
      state.isLoading = true;
    }).addCase(registerUser.fulfilled,(state,actions)=>{
      state.isLoading = false,
      state.user = null,
      state.isAuthenticated = false
    }).addCase(registerUser.rejected,(state,actions)=>{
      state.isLoading = false,
      state.user = null,
      state.isAuthenticated = false
    }).addCase(loginUser.pending,(state)=>{
      state.isLoading = true;
    }).addCase(loginUser.fulfilled,(state,actions)=>{
      console.log(actions.payload.user);
      state.isLoading = false,
      state.user = !actions.payload.success ? null : actions.payload.user,
      state.isAuthenticated = !actions.payload.success ? false : true
    }).addCase(loginUser.rejected,(state)=>{
      state.isLoading = false,
      state.user = null,
      state.isAuthenticated = false
    })
  }
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
