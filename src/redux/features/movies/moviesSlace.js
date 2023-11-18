import { createSlice } from '@reduxjs/toolkit';
import fetchMovies from '../../../utils/fetchApi';

const name = 'movies';
const initialState = {
  movies: {},
  isLoading: true,
  error: '',
};

const moviesSlice = createSlice({
  name,
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
     // state.movies = payload;
      [...state.movies, payload];
    },
  },
  extraReducers(builder) {},
});

export const { addMovies } = moviesSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default moviesSlice.reducer;
