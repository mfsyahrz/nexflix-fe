import React, { useContext, useEffect }from 'react';
import MoviesList from '../components/movies-list';
import { MoviesContext } from '../context/movies_context';
import axios from 'axios';
import { FlashMessage, flashErrorMessage } from '../components/Error';
import { Grid } from 'semantic-ui-react';


const MoviesPage = () => {
  const [state, dispatch] = useContext(MoviesContext);

  useEffect(() => {
    const fetchData = async () => {
    try{
      const response = await axios.get('https://api-nexflix.herokuapp.com/movies/now-playing/');
      dispatch({
        type: 'FETCH_MOVIELIST',
        payload: response.data.results || response.data,
      });
    }catch(error){
      flashErrorMessage(dispatch, error);
    }  
  };
    fetchData();
  }, [dispatch]);


  return (
    <div>
      <h1>Movies</h1>
      {state.message.content && <FlashMessage message={state.message} />}
        <MoviesList movielist={state.movielist} />
    </div>
  );
};


export default MoviesPage;