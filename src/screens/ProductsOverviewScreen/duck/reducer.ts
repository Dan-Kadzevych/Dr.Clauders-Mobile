import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import types from './types';

type ProductsState = {
  byId: import('ProductModels').ProductsOverviewById;
  ids: number[];
};

type CategoriesState = {
  byId: import('CategoryModels').CategoriesById;
  ids: number[];
};

export type ProductsOverviewState = import('utility-types').DeepReadonly<{
  products: ProductsState;
  categories: CategoriesState;
}>;

export const initialState: ProductsOverviewState = {
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
