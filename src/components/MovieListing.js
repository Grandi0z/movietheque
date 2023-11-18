import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../redux/features/movies/moviesSlace';
import MovieCard from './MovieCard';
import '../styles/movies_list'

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  let renderMovies = '';

  renderMovies = movies.Response === 'true' ? (
    movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
  ) : (
    <div className="movies-error">
      <h3>{movies.Error}</h3>
    </div>
  );

  return (
    <div className="movies_wrapper">
      <div className="movies_list">
        <h2>Movies</h2>
        <div className="movie_container">
          {renderMovies}
        </div>
      </div>
    </div>
  );
};
export default MovieListing;
