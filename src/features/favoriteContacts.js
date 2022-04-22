import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("favorites"));

export const favoriteContactsSlice = createSlice({
  name: "favoriteContacts",
  initialState: { value: initialState },
  reducers: {
    updateFavoriteContacts: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateFavoriteContacts } = favoriteContactsSlice.actions;

export default favoriteContactsSlice.reducer;
