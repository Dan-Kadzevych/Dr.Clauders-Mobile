import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import types from './types';

type ProductsState = {
  byId: { [key: string]: import('ProductModels').Product };
  ids: number[];
};

type CategoriesState = {
  byId: { [key: string]: import('CategoryModels').Category };
  ids: number[];
};

type ProductsScreenState = import('utility-types').DeepReadonly<{
  products: ProductsState;
  categories: CategoriesState;
}>;

const initialState: ProductsScreenState = {
  products: {
    byId: {},
    ids: [],
  },
  categories: {
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

const categoriesReducer = createReducer(initialState.categories).handleType(
  types.getCategoriesSuccess,
  (
    state,
    {
      payload: {
        entities: { categories },
        result,
      },
    },
  ) => ({
    byId: { ...state.byId, ...categories },
    ids: [...state.ids, ...result],
  }),
);

export default combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
});
