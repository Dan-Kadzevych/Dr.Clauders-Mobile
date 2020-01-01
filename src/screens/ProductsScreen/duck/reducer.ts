import { combineReducers } from 'redux';

import createReducer from 'utils/redux/createReducer';
import * as types from './types';

export type Product = {
  attributes: {
    id: number;
    name: string;
    position: number;
    visible: boolean;
    variation: boolean;
    options: string[];
  };
  categories: {
    id: number;
    name: string;
    slug: string;
  };
  default_attributes: {
    id: number;
    name: string;
    option: string;
  };
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
};

type ProductsState = { byId: { [key: string]: Product }; ids: number[] };

type ProductsScreenState = {
  products: ProductsState;
};

const initialState: ProductsScreenState = {
  products: {
    byId: {},
    ids: [],
  },
};

const productsReducer = createReducer<
  ProductsState,
  import('./actions').ActionTypes
>(initialState.products, {
  [types.getProductsSuccess]: (
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
});

export default combineReducers<ProductsScreenState>({
  products: productsReducer,
});
