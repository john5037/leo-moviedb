import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Watchlist } from './components/Watchlist';
import { Favourite } from './components/Favourite';
import { HomePage } from './components/HomePage';

import './App.css';
import './lib/css/all.min.css';

import { AppProvider } from './Context/AppContext';

function App() {
  return (
    <AppProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/watchlist">
            <Watchlist />
          </Route>
          <Route path="/favourite">
            <Favourite />
          </Route>
        </Switch>
      </Router>
    </AppProvider>
  );
}

export default App;
