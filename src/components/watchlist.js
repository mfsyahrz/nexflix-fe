import React from 'react';
import { Card } from 'semantic-ui-react';
import WatchlistCard from './watchlist-card';

const Watchlist = ({ watchlists }) => {
    const cards = () => {
      return watchlists.map(watchlist => {
        return (
          <WatchlistCard key={watchlist.id}  watchlist={watchlist} >
          </WatchlistCard>
        );
    });
};  


return <Card.Group>{cards()}</Card.Group>;
}

export default Watchlist