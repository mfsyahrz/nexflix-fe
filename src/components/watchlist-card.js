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

  return (
    
    <Card>
      <Card.Content>
        <Card.Header>
          <Icon name="title" /> {watchlist.title}
        </Card.Header>
        <Card.Description>
          <p>
            <Icon name="status" /> {watchlist.status}
          </p>
          <p>
            <Icon name="comment" /> {watchlist.comment}
          </p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
        <Button
            basic
            color="green"
            as={Link}
            to={`/watchlist/edit/${watchlist.id}`}
          >
            Edit
          </Button>
          <Button basic color="red" onClick={() => DeleteWatchlist(watchlist.id)}
          to={`/`}
           >
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  );

  
}







export default WatchlistCard;