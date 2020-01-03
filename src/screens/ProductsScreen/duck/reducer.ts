import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import types from './types';

type ProductsState = {
  byId: { [key: string]: import('ProductModels').Product };
  ids: number[];
};

type ProductsScreenState = import('utility-types').DeepReadonly<{
  products: ProductsState;
}>;

const initialState: ProductsScreenState = {
  products: {
    byId: {},
    ids: [],
  },
};

const productsReducer = createReducer(initialState.products).handleType(
  types.getProductsSuccess,
  (
    state,
    {
      payload: {
        entities: { products },
        result,
      },
    },
  ) => ({
    byId: { ...state.byId, ...products },
    ids: [...state.ids, ...result],
  }),
);

export default combineReducers({
  products: productsReducer,
});
