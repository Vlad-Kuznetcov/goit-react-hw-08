import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const goItAPI = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

export const registerThunk = createAsyncThunk(
  "register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await goItAPI.post("/users/singup", credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
