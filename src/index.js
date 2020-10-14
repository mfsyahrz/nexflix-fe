import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'fomantic-ui-css/semantic.min.css';
import './index.css';
import { WatchlistContextProvider } from './context/watchlist-context';
import { MoviesContextProvider } from './context/movies_context';



ReactDOM.render(
  <WatchlistContextProvider>
  <MoviesContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  </MoviesContextProvider>
  </WatchlistContextProvider>,
  document.getElementById('root')
);