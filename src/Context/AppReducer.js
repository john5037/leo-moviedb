const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_MOVIE_TO_WATCHLIST':
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case 'REMOVE_MOVIE_FROM_WATCHLIST':
      return {
        ...state,
        watchlist: state.watchlist.filter(movie => movie.id !== action.payload),
      };
    case 'ADD_MOVIE_TO_FAVOURITE':
      return {
        ...state,
        favourites: [action.payload, ...state.favourites],
      };

    case 'REMOVE_FROM_FAVOURITE':
      return {
        ...state,
        favourites: state.favourites.filter(
          movie => movie.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default AppReducer;
