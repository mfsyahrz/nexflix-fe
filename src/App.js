import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import WatchlistPage from './pages/Watchlist-Page';
import MoviesPage from './pages/Movies-Page';

const App = () => {
  return (
    <Container>
      <div className="ui two item menu">
        <NavLink className="item" activeClassName="active" exact to="/">
          Home
        </NavLink>
        <NavLink
          className="item"
          activeClassName="active"
          exact
          to="/movies"
        >
          Movies
        </NavLink>
      </div>
      <Route exact path="/" component={WatchlistPage} />
      <Route path="/movies" component={MoviesPage} />
      <Route path="/watch-list/edit/:id" component={WatchlistPage} />
    </Container>
  );
};

export default App;