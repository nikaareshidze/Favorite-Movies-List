import { createSlice } from "@reduxjs/toolkit";

const moviesIninitialState = {
  movies: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: moviesIninitialState,
  reducers: {
    setMovies(state, action) {
      state.movies = action.payload;
    },
  },
});

export const moviesActions = moviesSlice.actions;

export default moviesSlice;
