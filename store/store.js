import { configureStore } from "@reduxjs/toolkit";
import signInOutSlice from "./signInOutSlice";
import userSlice from "./userSlice";
import moviesSlice from "./moviesSlice";

const store = configureStore({
  reducer: {
    signInOutSlice: signInOutSlice.reducer,
    userSlice: userSlice.reducer,
    moviesSlice: moviesSlice.reducer,
  },
});

export default store;
