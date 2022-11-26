import { createSlice } from "@reduxjs/toolkit";

const userSliceInitialState = {
  idToken: null,
  localId: null,
  userName: null,
};

const userSlice = createSlice({
  name: "users",
  initialState: userSliceInitialState,
  reducers: {
    setIdToken(state, action) {
      state.idToken = action.payload;
    },
    setLocalId(state, action) {
      state.localId = action.payload;
    },
    setUserName(state, action) {
      state.userName = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
