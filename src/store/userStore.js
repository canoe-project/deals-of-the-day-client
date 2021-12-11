import Axios from '../utils/http-common';
import React, {useReducer, useMemo, createContext, useContext} from 'react';

const ProductStateContext = createContext();
const ProductDispatchContext = createContext();

export function ProductProvider({children}) {
  const reducer = (prevState, action) => {
    switch (action.type) {
      case 'userCreate':
        return action.result;
      case 'userFindOne':
        return action.result;
      case 'addFavorite':
        return action.result;
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  };
  const product = useMemo(
    () => ({
      userCreate: async (name, nickname, email, password) => {
        await Axios({
          url: '/user/',
          method: 'POST',
          data: {
            name: name,
            nickname: nickname,
            email: email,
            password: password,
          },
        }).then(result => {
          dispatch({type: 'infoFindAll', result: result.data});
        });
      },
      userFindOne: async email => {
        await Axios({
          url: `/user/${email}`,
          method: 'GET',
        }).then(result => {
          dispatch({type: 'infoFindAll', result: result.data});
        });
      },
      addFavorite: async (email, pcode) => {
        await Axios({
          uri: `/favorite`,
          method: 'POST',
          data: {
            email: email,
            pcode: pcode,
          },
        }).then(result => {
          dispatch({type: 'infoFindAll', result: result.data});
        });
      },
    }),
    [],
  );

  const [state, dispatch] = useReducer(reducer, [{}]);

  return (
    <ProductStateContext.Provider value={state}>
      <ProductDispatchContext.Provider value={product}>
        {children}
      </ProductDispatchContext.Provider>
    </ProductStateContext.Provider>
  );
}

export function productState() {
  return useContext(ProductStateContext);
}

export function productDispatch() {
  return useContext(ProductDispatchContext);
}
