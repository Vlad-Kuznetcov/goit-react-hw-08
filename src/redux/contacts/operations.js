import { createAsyncThunk } from "@reduxjs/toolkit";
import { goItAPI } from "../auth/operations";

export const fetchContactsThunk = createAsyncThunk(
  "fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await goItAPI.get("contacts");
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
      await goItAPI.delete(`contacts/${id}`);
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
      const { data } = await goItAPI.post("/contacts", body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
