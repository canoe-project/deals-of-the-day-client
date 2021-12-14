import Axios from '../utils/http-common';
import React, {useReducer, useMemo, createContext, useContext} from 'react';

const ExploreStateContext = createContext();
const ExploreDispatchContext = createContext();

export function ExploreProvider({children}) {
  const reducer = (prevState, action) => {
    return action.result;
  };

  const explore = useMemo(
    () => ({
      explore: async () => {
        await Axios({
          url: `/explore`,
          method: 'GET',
        }).then(result => {
          console.log('data :' + JSON.stringify(result.data));
          console.log('data :' + result);

          dispatch({type: 'explore', result: result.data});
        });
      },
    }),
    [],
  );
  const [state, dispatch] = useReducer(reducer, [
    {
      name: '',
      pcode: '',
      price: '',
      img: '',
    },
  ]);

  return (
    <ExploreStateContext.Provider value={state}>
      <ExploreDispatchContext.Provider value={explore}>
        {children}
      </ExploreDispatchContext.Provider>
    </ExploreStateContext.Provider>
  );
}

export function exploreState() {
  return useContext(ExploreStateContext);
}

export function exploreDispatch() {
  return useContext(ExploreDispatchContext);
}
