import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieListing from './MovieListing';
import fetchMovies from '../utils/fetchApi';

const Home = () => {
  const dispatch = useDispatch();
  const { movies, error, isLoading } = useSelector(((store) => store.movies));
  useEffect(() => {
    dispatch(fetchMovies('Harry'));
    return () => {
      dispatch(fetchMovies());
    };
  }, [dispatch]);

  return (
    <div>
      <div className="banner_img" />
      <MovieListing />
    </div>
  );
};

export default Home;
