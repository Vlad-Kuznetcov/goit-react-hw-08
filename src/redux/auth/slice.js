import { createSlice } from "@reduxjs/toolkit";
import { registerThunk } from "./operations";

const initialState = {
  user: {
    name: "",
    email: "",
  },
  token: null,
  isLoggedIn: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(registerThunk.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    });
  },
});

export const authReducer = slice.reducer;
