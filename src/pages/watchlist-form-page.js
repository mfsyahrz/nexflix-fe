import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import WatchlistForm from '../components/watchlist-form';
import { flashErrorMessage } from '../components/Error';
import { WatchlistContext } from '../context/watchlist-context';

const WatchlistFormPage = ({ match }) => {

  const [state, dispatch] = useContext(WatchlistContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { id } = match.params; // Grab URL id

    if (id) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `http://api-nexflix.herokuapp.com/watchlist/${id}`,
          );
          dispatch({
            type: 'FETCH_1WATCHLIST',
            payload: response.data.watchlist,
          });
          setLoading(false);
        } catch (error) {
          flashErrorMessage(dispatch, error);
        }
      };
      fetchData();
    } else {
      setLoading(false);
    }
  }, [match.params, dispatch]);

  if (loading) {
    return <p>Please wait...</p>;
  }

  return (
    <div>
      <WatchlistForm watchlist={state.watchlist} />
    </div>
  );
}

export default WatchlistFormPage;