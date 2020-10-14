import React, { useContext, useEffect }from 'react';
import axios from 'axios';
import Watchlist from '../components/watchlist';
import { WatchlistContext } from '../context/watchlist-context';
import { FlashMessage, flashErrorMessage } from '../components/Error';


const data = [
  {
    id: '1',
    title: 'Hangout',
    status: 'unwatched',
  },
  {
    id: '2',
    title: 'Yes Man',
    status: 'watched',
    comment: 'nice movie',
  },
];


const WatchlistPage = () => {
  const [state, dispatch] = useContext(WatchlistContext);

  useEffect(() => {
    const fetchData = async () => {
    try{
      const response = await axios.get('https://api-nexflix.herokuapp.com/watchlist/');
      dispatch({
        type: 'FETCH_WATCHLIST',
        payload: response.data.watchlist || response.data,
      });
    }catch(error){
      flashErrorMessage(dispatch, error);
    }  
  };
    fetchData();
  }, [dispatch]);


  return (
    <div>
      <h1>WatchList</h1>
      {state.message.content && <FlashMessage message={state.message} />}
      <Watchlist watchlists={state.watchlists} />
    </div>
  );
};

export default WatchlistPage;