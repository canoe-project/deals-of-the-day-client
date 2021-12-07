import Axios from '../utils/http-common';
import React, {useReducer, useMemo, createContext, useContext} from 'react';

const ProductSearchStateContext = createContext();
const ProductSearchDispatchContext = createContext();

export function ProductSearchProvider({children}) {
  const reducer = (prevState, action) => {
    switch (action.type) {
      case 'productSearch':
        return action.result;
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  };

  const product = useMemo(
    () => ({
      productSearch: async productName => {
        await Axios({
          url: `/productsearch/${productName}`,
          method: 'GET',
        }).then(result => {
          dispatch({type: 'productSearch', result: result.data});
        });
      },
    }),
    [],
  );
  const [state, dispatch] = useReducer(reducer);

  return (
    <ProductSearchStateContext.Provider value={state}>
      <ProductSearchDispatchContext.Provider value={product}>
        {children}
      </ProductSearchDispatchContext.Provider>
    </ProductSearchStateContext.Provider>
  );
}

export function productSearchState() {
  return useContext(ProductSearchStateContext);
}

export function productSearchDispatch() {
  return useContext(ProductSearchDispatchContext);
}
