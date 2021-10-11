import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

export const MovieControls = ({ type, movie }) => {
  const { removeMovieFromWatchlist, removeFromFavourite } = useContext(
    AppContext
  );

  return (
    <div className="inner-card-controls">
      {type === 'watchlist' && (
        <>
          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <i className="fa-fw far fa-eye"></i>
          </button>
        </>
      )}

      {type === 'favourites' && (
        <>
          <button
            className="ctrl-btn"
            onClick={() => removeFromFavourite(movie.id)}
          >
            <i className="far fa-star"></i>
          </button>
        </>
      )}
    </div>
  );
};
