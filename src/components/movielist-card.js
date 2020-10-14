import React from 'react';
import { Card, Button, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const MovielistCard = ({ movie }) => {


  const AddWatchList = async  => {
     axios.post(`https://api-nexflix.herokuapp.com/watchlist/`,{
      watchlist: {
        "tmdb_id": movie.id,
        "title": movie.title,
        "status": "unwatched",
      }
    })
  };

  return (
    <Card >
       <Image src={movie.poster_path} wrapped ui={false} />
      <Card.Content>
        <Card.Header>
          <Icon name="title" /> {movie.title}
        </Card.Header>
      </Card.Content>
      <Card.Content extra>

      <div  onClick={() => AddWatchList()} class="ui bottom attached button">
      <i  class="add icon"></i>
       Watchlist
     </div>

      </Card.Content>
    </Card>
  );
}



export default MovielistCard;