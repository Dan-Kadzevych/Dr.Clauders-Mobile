import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';
import uniq from 'lodash/uniq';

import types from './types';

type ProductsState = {
  byId: import('ProductModels').ProductDetailsById;
  ids: number[];
};

type ProductVariationsState = {
  byId: import('ProductModels').ProductVariationsById;
  ids: number[];
};

export type ProductDetailsState = import('utility-types').DeepReadonly<{
  products: ProductsState;
  variations: ProductVariationsState;
}>;

export const initialState: ProductDetailsState = {
  products: {
    byId: {},
    ids: [],
  },
  variations: {
    byId: {},
    ids: [],
  },
};

const productsReducer = createReducer(initialState.products).handleType(
  types.getProductDetailsSuccess,
  (
    state,
    {
      payload: {
        entities: { product },
        result,
      },
    },
  ) => ({
    byId: { ...state.byId, ...product },
    ids: uniq([...state.ids, result]),
  }),
);

const variationsReducer = createReducer(initialState.variations).handleType(
  types.getProductVariationsSuccess,
  (
    state,
    {
      payload: {
        entities: { variations },
        result,
      },
    },
  ) => ({
    byId: { ...state.byId, ...variations },
    ids: uniq([...state.ids, ...result]),
  }),
);

export default combineReducers({
  products: productsReducer,
  variations: variationsReducer,
});
