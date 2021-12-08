import Axios from '../utils/http-common';
import React, {useReducer, useMemo, createContext, useContext} from 'react';

const MalllistStateContext = createContext();
const MalllistDispatchContext = createContext();

export function MalllistProvider({children}) {
  const reducer = (prevState, action) => {
    switch (action.type) {
      case 'malllist':
        return action.result;
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  };

  const malllist = useMemo(
    () => ({
      mallFindAll: async pcode => {
        await Axios({
          url: `/malllist/${pcode}`,
          method: 'GET',
        }).then(result => {
          dispatch({type: 'malllist', result: result.data});
        });
      },
    }),
    [],
  );
  const [state, dispatch] = useReducer(reducer, [
    {
      mallName: '',
      mallImg: '',
      link: '',
      price: '',
      shippingCost: '',
    },
  ]);

  return (
    <MalllistStateContext.Provider value={state}>
      <MalllistDispatchContext.Provider value={malllist}>
        {children}
      </MalllistDispatchContext.Provider>
    </MalllistStateContext.Provider>
  );
}

export function malllistState() {
  return useContext(MalllistStateContext);
}

export function malllistDispatch() {
  return useContext(MalllistDispatchContext);
}
