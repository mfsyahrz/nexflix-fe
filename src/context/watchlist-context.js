import React, { useReducer, createContext } from 'react';

export const WatchlistContext = createContext();

const initialState = {
  watchlists: [],
  watchlist: {}, // selected or new
  message: {}, // { type: 'success|fail', title:'Info|Error' content:'lorem ipsum'}
};

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_WATCHLIST': {
      return {
        ...state,
        watchlists: action.payload,
      };
    }
    case 'UPDATE_WATCHLIST': {
        const watchlist = action.payload;
        return {
          ...state,
          watchlists: state.watchlists.map(item =>
            item.id === watchlist.id ? watchlist : item,
          ),
          message: {
            type: 'success',
            title: 'Update Successful',
            content: `watchlist "${watchlist.email}" has been updated!`,
          },
        };
      }

    case 'DELETE_WATCHLIST': {
        const id = action.payload;
        return {
            ...state,
            watchlists: state.watchlists.filter(item => item.id !== id),
          };
    }      

    case 'FLASH_MESSAGE': {
        return {
          ...state,
          message: action.payload,
        };
      }
    default:
      throw new Error();
  }
}

export const WatchlistContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { children } = props;

  return (
    <WatchlistContext.Provider value={[state, dispatch]}>
      {children}
    </WatchlistContext.Provider>
  );
};