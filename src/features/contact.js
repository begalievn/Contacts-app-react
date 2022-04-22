import { createSlice } from "@reduxjs/toolkit";

/*  
  city: "London"
  country: "England"
  email: "eng.eugine@gomail.com"
  firstName: "Eugene"
  id: 4
  image: "https://images.unsplash.com/photo-1565260524775-7e9b536fba2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
  lastName: "Forige"
  phoneNumber: "+932550221"
  website: "eugine.com" 
*/

const initialStateValue = {
  city: "",
  country: "",
  email: "",
  firstName: "",
  id: null,
  image: "",
  lastName: "",
  phoneNumber: "",
  website: "",
};

export const userSlice = createSlice({
  name: "contact",
  initialState: { value: initialStateValue },
  reducers: {
    takeContactInfo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { takeContactInfo } = userSlice.actions;

export default userSlice.reducer;
