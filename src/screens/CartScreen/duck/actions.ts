import { createAsyncAction } from 'typesafe-actions';

import types from './types';

type UpdateCartData = {
  products: import('ProductModels').ProductDetailsById;
  variations: import('ProductModels').ProductVariationsById;
  quantityById: import('CartModels').QuantityById;
};

const getCartProductsOverviewAsync = createAsyncAction(
  types.getCartProductsRequest,
  [
    types.getCartProductsSuccess,
    (normalizedCartData: {
      normalizedProductsData: import('normalizr').NormalizedSchema<
        import('ProductModels').NormalizedProductDetailsList,
        number[]
      >;
      normalizedVariationsData: import('normalizr').NormalizedSchema<
        import('ProductModels').NormalizedProductVariations,
        number[]
      >;
      quantityById: import('./reducer').QuantityByID;
    }) => normalizedCartData,
  ],
  [
    types.getCartProductsFailure,
    (error: import('ErrorTypes').Error) => ({
      error,
    }),
  ],
)<
  undefined,
  {
    normalizedProductsData: import('normalizr').NormalizedSchema<
      import('ProductModels').NormalizedProductDetailsList,
      number[]
    >;
    normalizedVariationsData: import('normalizr').NormalizedSchema<
      import('ProductModels').NormalizedProductVariations,
      number[]
    >;
    quantityById: import('./reducer').QuantityByID;
  },
  { error: import('ErrorTypes').Error }
>();

const updateCartAsync = createAsyncAction(
  types.updateCartRequest,
  [
    types.updateCartSuccess,
    ({
      products = {},
      variations = {},
      quantityById = {},
    }: Partial<UpdateCartData>) => ({ products, variations, quantityById }),
  ],
  [
    types.updateCartFailure,
    (error: import('ErrorTypes').Error) => ({
      error,
    }),
  ],
)<undefined, UpdateCartData, { error: import('ErrorTypes').Error }>();

export default {
  getCartProductsOverviewAsync,
  updateCartAsync,
} as const;
