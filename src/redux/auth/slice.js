import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, LogoutThunk, registerThunk } from "./operations";

const initialState = {
  user: {
    name: "",
    email: "",
  },
  token: null,
  isLoggenIn: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggenIn = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggenIn = true;
      })
      .addCase(LogoutThunk.fulfilled, () => {
        return initialState;
      });
  },
});

export const authReducer = slice.reducer;
