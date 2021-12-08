import Axios from '../utils/http-common';
import React, {useReducer, useMemo, createContext, useContext} from 'react';

const ProductStateContext = createContext();
const ProductDispatchContext = createContext();

export function ProductProvider({children}) {
  const reducer = (prevState, action) => {
    switch (action.type) {
      case 'infoFindAll':
        return action.result;
      case 'infoFindOne':
        return action.result;
      case 'testInfoFindAll':
        return action.result;
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  };

  const product = useMemo(
    () => ({
      infoFindAll: async () => {
        await Axios({
          url: '/info/',
          method: 'GET',
        }).then(result => {
          dispatch({type: 'infoFindAll', result: result.data});
        });
      },
      infoFindOne: async id => {
        await Axios({
          url: `/info/${id}`,
          method: 'GET',
        }).then(result => {
          dispatch({type: 'infoFindAll', result: result.data});
        });
      },
      testInfoFindAll: async () => {
        await Axios({
          url: `/productsearch/cpu`,
          method: 'GET',
        }).then(result => {
          dispatch({type: 'testInfoFindAll', result: result.data});
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
