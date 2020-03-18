import { createAsyncAction } from 'typesafe-actions';

import types from './types';

type UpdateCartData = {
  products: import('ProductModels').ProductDetailsById;
  variations: import('ProductModels').ProductVariationsById;
  quantityById: import('CartModels').QuantityById;
};

type NormalizedCartData = {
  normalizedProductsData: import('normalizr').NormalizedSchema<
    import('ProductModels').NormalizedProductDetailsList,
    number[]
  >;
  normalizedVariationsData: import('normalizr').NormalizedSchema<
    import('ProductModels').NormalizedProductVariations,
    number[]
  >;
  quantityById: import('CartModels').QuantityById;
};

const getCartProductsAsync = createAsyncAction(
  types.getCartProductsRequest,
  [
    types.getCartProductsSuccess,
    (normalizedCartData: NormalizedCartData) => normalizedCartData,
  ],
  [
    types.getCartProductsFailure,
    (error: import('ErrorTypes').Error) => ({
      error,
    }),
  ],
)<undefined, NormalizedCartData, { error: import('ErrorTypes').Error }>();

const updateCartAsync = createAsyncAction(
  types.updateCartRequest,
  [
    types.updateCartSuccess,
    ({ products, variations, quantityById }: Partial<UpdateCartData>) => ({
      products,
      variations,
      quantityById,
    }),
  ],
  [
    types.updateCartFailure,
    (error: import('ErrorTypes').Error) => ({
      error,
    }),
  ],
)<undefined, UpdateCartData, { error: import('ErrorTypes').Error }>();

const addToCartAsync = createAsyncAction(
  types.addToCartRequest,
  [types.addToCartSuccess, (payload: UpdateCartData) => payload],
  [
    types.addToCartFailure,
    (error: import('ErrorTypes').Error) => ({
      error,
    }),
  ],
)<undefined, UpdateCartData, { error: import('ErrorTypes').Error }>();

const removeFromCartAsync = createAsyncAction(
  types.removeFromCartRequest,
  [
    types.removeFromCartSuccess,
    (payload: { productId?: number; variationId: number }) => payload,
  ],
  [
    types.removeFromCartFailure,
    (error: import('ErrorTypes').Error) => ({
      error,
    }),
  ],
)<
  undefined,
  {
    productId: number;
    variationId: number;
  },
  { error: import('ErrorTypes').Error }
>();

export default {
  getCartProductsAsync,
  updateCartAsync,
  addToCartAsync,
  removeFromCartAsync,
} as const;
