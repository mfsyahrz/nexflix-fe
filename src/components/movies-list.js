import React from 'react';
import MovielistCard from './movielist-card';
import { Card, Grid } from 'semantic-ui-react';


const MoviesList = ({ movielist }) => {
  const cards = () => {
    return movielist.map(movie => {
      return (
          <MovielistCard key={movie.id}  movie={movie} >
          </MovielistCard>
      );
  });
};  


return <Card.Group>{cards()}</Card.Group>;
}

export default MoviesList