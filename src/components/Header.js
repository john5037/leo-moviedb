import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">LeoVegas Movies</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/watchlist">Watch List</Link>
            </li>

            <li>
              <Link to="/favourite">Favourites</Link>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </header>
  );
};
