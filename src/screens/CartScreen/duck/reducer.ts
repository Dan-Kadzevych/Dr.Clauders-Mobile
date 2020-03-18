import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';
import uniq from 'lodash/uniq';
import omit from 'lodash/omit';
import without from 'lodash/without';

import types from './types';

type ProductsState = {
  byId: import('ProductModels').ProductDetailsById;
  ids: number[];
};

type ProductVariationsState = {
  byId: import('ProductModels').ProductVariationsById;
  ids: number[];
};

type QuantityState = {
  byId: import('CartModels').QuantityById;
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
    if (products) {
      const productIds = Object.keys(products).map(Number);

      return {
        byId: { ...state.byId, ...products },
        ids: uniq([...state.ids, ...productIds]),
      };
    }

    return state;
  })
  .handleType(types.addToCartSuccess, (state, { payload: { products } }) => {
    const productIds = Object.keys(products).map(Number);

    return {
      byId: { ...state.byId, ...products },
      ids: uniq([...state.ids, ...productIds]),
    };
  })
  .handleType(
    types.removeFromCartSuccess,
    (state, { payload: { productId } }) => ({
      byId: omit(state.byId, productId),
      ids: without(state.ids, productId),
    }),
  );

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
    if (variations) {
      const variationIds = Object.keys(variations).map(Number);

      return {
        byId: { ...state.byId, ...variations },
        ids: uniq([...state.ids, ...variationIds]),
      };
    }

    return state;
  })
  .handleType(types.addToCartSuccess, (state, { payload: { variations } }) => {
    const variationIds = Object.keys(variations).map(Number);

    return {
      byId: { ...state.byId, ...variations },
      ids: uniq([...state.ids, ...variationIds]),
    };
  })
  .handleType(
    types.removeFromCartSuccess,
    (state, { payload: { variationId } }) => ({
      byId: omit(state.byId, variationId),
      ids: without(state.ids, variationId),
    }),
  );

const quantityReducer = createReducer(initialState.quantity)
  .handleType(
    types.getCartProductsSuccess,
    (state, { payload: { quantityById } }) => ({
      byId: { ...state.byId, ...quantityById },
    }),
  )
  .handleType(
    types.updateCartSuccess,
    (state, { payload: { quantityById } }) => {
      if (quantityById) {
        return {
          byId: { ...state.byId, ...quantityById },
        };
      }

      return state;
    },
  )
  .handleType(
    types.addToCartSuccess,
    (state, { payload: { quantityById } }) => ({
      byId: { ...state.byId, ...quantityById },
    }),
  )
  .handleType(
    types.removeFromCartSuccess,
    (state, { payload: { variationId } }) => ({
      byId: omit(state.byId, variationId),
    }),
  );

export default combineReducers({
  products: productsReducer,
  variations: variationsReducer,
  quantity: quantityReducer,
});
