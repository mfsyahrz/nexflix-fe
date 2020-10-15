import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { WatchlistContext } from '../context/watchlist-context';

const  { useContext }  =  React;

const WatchlistCard = ({ watchlist }) => {

  const [state, dispatch] = useContext(WatchlistContext);

  const DeleteWatchlist = async watchlistId => {
    axios.delete(`https://api-nexflix.herokuapp.com/watchlist/${watchlistId}/`).then(res => {
    });
    dispatch({
      type: 'DELETE_WATCHLIST',
      payload: watchlistId,
    });
  };

  const ToggleStatus = async watchlistId => {
    console.log(watchlist.status)

    axios.put(`https://api-nexflix.herokuapp.com/watchlist/${watchlistId}/`,
    {
      watchlist:
        {
          status: watchlist.status === 'unwatched'? 'watched' : 'unwatched',
          comment: watchlist.comment
        }
    } 
    ).then(res => {
    });
    dispatch({
      type: 'UPDATE_WATCHLIST',
      payload: watchlistId,
    });
  };

  

  return (
    
    <Card>
      <Card.Content>
      <Card.Header>
          <Icon name="title" /> {watchlist.title}
        </Card.Header>
        <Card.Description>
        <Button 
        as={Link}
        exact
        to={`/watchlist/notes/${watchlist.id}`}
        class="ui circular icon button,ui right floated button">Notes</Button>
        {watchlist.comment}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <div class="ui bottom attached button"
      onClick={() => ToggleStatus(watchlist.id)}
      >
      {watchlist.status}
    </div>
    <div basic class="ui bottom attached button,ui red button" onClick={() => DeleteWatchlist(watchlist.id)}>
    Delete
    </div>
      </Card.Content>
    </Card>
  );

  
}







export default WatchlistCard;