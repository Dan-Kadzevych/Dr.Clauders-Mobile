import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';
import { DeepReadonly } from 'utility-types';

import types from './types';

export type Product = DeepReadonly<{
  attributes: {
    id: number;
    name: string;
    position: number;
    visible: boolean;
    variation: boolean;
    options: string[];
  }[];
  categories: {
    id: number;
    name: string;
    slug: string;
  }[];
  default_attributes: {
    id: number;
    name: string;
    option: string;
  }[];
  images: {
    id: number;
    src: string;
    name: string;
    alt: string;
  }[];
  id: number;
  name: string;
  parent_id: number;
  price: string;
  short_description: string;
  stock_quantity: number | null;
  stock_status: 'instock' | 'outofstock' | 'onbackorder';
  type: 'simple' | 'grouped' | 'external' | 'varialbe';
  variations: number[];
}>;

type ProductsState = DeepReadonly<{
  byId: { [key: string]: Product };
  ids: number[];
}>;

type ProductsScreenState = DeepReadonly<{
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
