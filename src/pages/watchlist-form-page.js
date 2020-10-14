import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import ContactForm from '../components/contact-form';
import { flashErrorMessage } from '../components/flash-message';
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
            `http://localhost:3030/contacts/${id}`,
          );
          dispatch({
            type: 'FETCH_WATCHLIST',
            payload: response.data,
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
      <ContactForm contact={state.contact} />
    </div>
  );
}

export default WatchlistFormPage;