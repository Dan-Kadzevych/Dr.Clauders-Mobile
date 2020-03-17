import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import uniq from 'lodash/uniq';
import types from './types';

type ProductsState = {
  byId: import('ProductModels').ProductDetailsById;
  ids: (number | string)[];
};

type ProductVariationsState = {
  byId: import('ProductModels').ProductVariationsById;
  ids: (number | string)[];
};

export type QuantityByID = { [key: string]: string | number };

type QuantityState = {
  byId: QuantityByID;
};

export type CartState = import('utility-types').DeepReadonly<{
  products: ProductsState;
  variations: ProductVariationsState;
  quantity: QuantityState;
}>;

export const initialState: CartState = {
  products: {
    byId: {},
    ids: [],
  },
  variations: {
    byId: {},
    ids: [],
  },
  quantity: {
    byId: {},
  },
};

const productsReducer = createReducer(initialState.products)
  .handleType(
    types.getCartProductsSuccess,
    (
      state,
      {
        payload: {
          normalizedProductsData: {
            entities: { products },
            result,
          },
        },
      },
    ) => ({
      byId: { ...state.byId, ...products },
      ids: uniq([...state.ids, ...result]),
    }),
  )
  .handleType(types.updateCartSuccess, (state, { payload: { products } }) => {
    const productIds = Object.keys(products);

    return {
      byId: { ...state.byId, ...products },
      ids: uniq([...state.ids, ...productIds]),
    };
  });

const variationsReducer = createReducer(initialState.variations)
  .handleType(
    types.getCartProductsSuccess,
    (
      state,
      {
        payload: {
          normalizedVariationsData: {
            entities: { variations },
            result,
          },
        },
      },
    ) => ({
      byId: { ...state.byId, ...variations },
      ids: uniq([...state.ids, ...result]),
    }),
  )
  .handleType(types.updateCartSuccess, (state, { payload: { variations } }) => {
    const variationIds = Object.keys(variations);

    return {
      byId: { ...state.byId, ...variations },
      ids: uniq([...state.ids, ...variationIds]),
    };
  });

const quantityReducer = createReducer(initialState.quantity)
  .handleType(
    types.getCartProductsSuccess,
    (state, { payload: { quantityById } }) => ({
      byId: { ...state.byId, ...quantityById },
    }),
  )
  .handleType(
    types.updateCartSuccess,
    (state, { payload: { quantityById } }) => ({
      byId: { ...state.byId, ...quantityById },
    }),
  );

export default combineReducers({
  products: productsReducer,
  variations: variationsReducer,
  quantity: quantityReducer,
});