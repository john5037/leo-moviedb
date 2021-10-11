import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

// initial state
const initialState = {
  watchlist: localStorage.getItem('watchlist')
    ? JSON.parse(localStorage.getItem('watchlist'))
    : [],
  favourites: localStorage.getItem('favourites')
    ? JSON.parse(localStorage.getItem('favourites'))
    : [],
};

// create context
export const AppContext = createContext(initialState);

// provider components
export const AppProvider = props => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
    localStorage.setItem('favourites', JSON.stringify(state.favourites));
  }, [state]);

  // actions
  const addMovieToWatchlist = movie => {
    dispatch({ type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie });
  };

  const removeMovieFromWatchlist = id => {
    dispatch({ type: 'REMOVE_MOVIE_FROM_WATCHLIST', payload: id });
  };

  const addMovieToFavourite = movie => {
    dispatch({ type: 'ADD_MOVIE_TO_FAVOURITE', payload: movie });
  };

  const moveToWatchlist = movie => {
    dispatch({ type: 'MOVE_TO_WATCHLIST', payload: movie });
  };

  const removeFromFavourite = id => {
    dispatch({ type: 'REMOVE_FROM_FAVOURITE', payload: id });
  };

  return (
    <AppContext.Provider
      value={{
        watchlist: state.watchlist,
        favourites: state.favourites,
        addMovieToWatchlist,
        removeMovieFromWatchlist,
        addMovieToFavourite,
        moveToWatchlist,
        removeFromFavourite,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
