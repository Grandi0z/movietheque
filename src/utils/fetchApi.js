import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const key = 'c48102f1';
const link = 'http://www.omdbapi.com';

const fetchMovies = createAsyncThunk('movies/fetchMovies',
  async (movieTitle, thunkAPI) => {
    const url = `${link}?apiKey=${key}&s=${movieTitle}&type=movie`;
    try {
      const resp = await axios.get(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  });

export default fetchMovies;
