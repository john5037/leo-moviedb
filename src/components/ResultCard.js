import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

export const ResultCard = ({ movie }) => {
  const {
    addMovieToWatchlist,
    addMovieToFavourite,
    watchlist,
    favourites,
  } = useContext(AppContext);

  let storedMovie = watchlist.find(o => o.id === movie.id);
  let storedMovieFavourite = favourites.find(o => o.id === movie.id);

  // here we check to not allowed to already added movie in watchlist
  const watchlistDisabled = storedMovie ? true : false;
  // Not allowed to already added favourite movies in list
  const favouriteDisabled = storedMovieFavourite ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path && movie.poster_path != null ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
        </div>

        <div className="controls">
          <button
            className="btn"
            disabled={watchlistDisabled}
            label="Add to watchlist"
            onClick={() => addMovieToWatchlist(movie)}
          >
            <i className="fa-fw far fa-eye"></i>
          </button>

          <button
            className="btn"
            disabled={favouriteDisabled}
            onClick={() => addMovieToFavourite(movie)}
          >
            <i className="fa-fw far fa-star"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
