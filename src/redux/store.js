import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './features/movies/moviesSlace';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export default store;
