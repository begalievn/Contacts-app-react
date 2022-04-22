import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("users"));

export const allContactsSlice = createSlice({
  name: "allContacts",
  initialState: { value: initialState },
  reducers: {
    uploadAllContacts: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("users", JSON.stringify(action.payload));
    },
  },
});

export const { uploadAllContacts } = allContactsSlice.actions;

export default allContactsSlice.reducer;
