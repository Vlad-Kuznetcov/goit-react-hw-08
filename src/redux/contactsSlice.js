import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from "./contactsOps";

const initialState = {
  contacts: [],
  isLoading: false,
  isError: false,
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.contacts = action.payload;
      })
      .addCase(fetchContactsThunk.rejected, (state, action) => {
        state.isError = action.payload;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          (item) => item.id !== action.payload
        );
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      })
      .addMatcher(
        isAnyOf(
          addContactThunk.rejected,
          fetchContactsThunk.rejected,
          deleteContactThunk.rejected
        ),
        (state, action) => {
          state.isError = action.payload;
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          addContactThunk.pending,
          fetchContactsThunk.pending,
          deleteContactThunk.pending
        ),
        (state) => {
          state.isError = false;
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          addContactThunk.fulfilled,
          fetchContactsThunk.fulfilled,
          deleteContactThunk.fulfilled
        ),
        (state) => {
          state.isLoading = false;
        }
      );
  },
});

export const contactsReducer = slice.reducer;
// export const {
//   deleteContact,
//   addContact,
//   setIsLoading,
//   setIsError,
//   fetchingSuccess,
// } = slice.actions;
