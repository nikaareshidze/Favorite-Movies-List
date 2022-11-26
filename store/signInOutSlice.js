import { createSlice } from "@reduxjs/toolkit";

const signIninitialState = {
  isLoggedIn: false,
};

const signInOutSlice = createSlice({
  name: "signInOut",
  initialState: signIninitialState,
  reducers: {
    loginHandler(state) {
      state.isLoggedIn = true;
    },
    logoutHandler(state) {
      state.isLoggedIn = false;
    },
  },
});

export const signInOutActions = signInOutSlice.actions;

export default signInOutSlice;
