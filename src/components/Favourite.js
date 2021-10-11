import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import { MovieCard } from './MovieCard';

export const Favourite = () => {
  const { favourites } = useContext(AppContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Favourites</h1>
          <span className="count-pill">
            {favourites.length} {favourites.length === 1 ? 'Movie' : 'Movies'}
          </span>
        </div>

        {favourites.length > 0 ? (
          <div className="movie-grid">
            {favourites.map(movie => (
              <MovieCard movie={movie} key={movie.id} type="favourites" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">
            No movies in your favourite list! Add some!
          </h2>
        )}
      </div>
    </div>
  );
};
