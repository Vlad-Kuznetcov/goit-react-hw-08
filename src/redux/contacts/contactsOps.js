import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66cb3fb54290b1c4f199db64.mockapi.io/";

export const fetchContactsThunk = createAsyncThunk(
  "fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("contacts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  "deleteContact",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`contacts/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (id, thunkAPI) => {
      const isLoading = thunkAPI.getState().contacts.isLoading;
      if (isLoading) {
        return false;
      }
    },
  }
);

export const addContactThunk = createAsyncThunk(
  "addContact",
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.post("/contacts", body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
