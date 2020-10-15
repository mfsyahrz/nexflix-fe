import React, { useContext, useState } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import classnames from 'classnames';
import { WatchlistContext } from '../context/watchlist-context';
import { Redirect } from 'react-router-dom';
import axios from 'axios';




const WatchlistForm = ({watchlist}) => {
  const [state, dispatch] = useContext(WatchlistContext);
  const [redirect, setRedirect] = useState(false)


  const { register, errors, handleSubmit } = useForm({
    defaultValues: watchlist,
  });
  
  const updateWatchlist = async data => {

    try {
      const response = await axios.put(
        `https://api-nexflix.herokuapp.com/watchlist/${watchlist.id}/`,
        {watchlist:
          {
            status: watchlist.status,
            comment: data.watchlist.comment
          }
        },
      );
      dispatch({
        type: 'UPDATE_WATCHLIST',
        payload: response.data,
      });
      setRedirect(true);
    } catch (error) {
    }
  };

  const onSubmit = async data => {
    await updateWatchlist(data);

  };
  

  return (  
    <Grid centered columns={2}>
      <Grid.Column>
        <h1 style={{ marginTop: '1em' }}>Add Notes</h1>
        <Form onSubmit={handleSubmit(onSubmit)} loading={state.loading}>
          <Form.Group widths="equal">
            <Form.Field className={classnames({ error: errors.name })}>
              <label htmlFor="name.first">
                Notes
                <input
                  id="notes"
                  name="watchlist.comment"
                  type="text"
                  placeholder="Notes"
                  ref={register({ required: true, minLength: 2 })}
                />
              </label>
              <span className="error">
                {errors.name &&
                  errors.name.first.type === 'required' &&
                  'You need to provide First Name'}
              </span>
              <span className="error">
                {errors.name &&
                  errors.name.first.type === 'minLength' &&
                  'Must be 2 or more characters'}
              </span>
            </Form.Field>
          </Form.Group>
          <Button primary type="submit">
            Save
          </Button>
        </Form>
      </Grid.Column>
    </Grid>
  );

}

export default WatchlistForm