import React from 'react';
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
} from '@material-ui/core';

const AppHeader = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" color="inherit">
        Watchlist
      </Typography>
    </Toolbar>
  </AppBar>
);

export default AppHeader;