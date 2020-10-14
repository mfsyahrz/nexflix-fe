import React, { useReducer, createContext } from 'react';

export const MoviesContext = createContext();

const initialState = {
  movielist: [],
  movie: {}, // selected or new
  message: {}, // { type: 'success|fail', title:'Info|Error' content:'lorem ipsum'}
};

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_MOVIELIST': {
      return {
        ...state,
        movielist: action.payload,
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

export const MoviesContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { children } = props;

  return (
    <MoviesContext.Provider value={[state, dispatch]}>
      {children}
    </MoviesContext.Provider>
  );
};