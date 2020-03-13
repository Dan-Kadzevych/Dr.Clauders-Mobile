import { createAsyncAction } from 'typesafe-actions';

import types from './types';

const getCartProductsOverviewAsync = createAsyncAction(
  types.getCartProductsOverviewRequest,
  [
    types.getCartProductsOverviewSuccess,
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
    types.getCartProductsOverviewFailure,
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
    (
      cartData: Partial<{
        quantityById: import('Cart').QuantityById;
        products: import('ProductModels').ProductDetailsById;
        variations: import('ProductModels').ProductVariationsById;
      }> = { quantityById: {}, products: {}, variations: {} },
    ) => cartData,
  ],
  [
    types.updateCartFailure,
    (error: import('ErrorTypes').Error) => ({
      error,
    }),
  ],
)<
  undefined,
  Partial<{
    quantityById: import('Cart').QuantityById;
    products: import('ProductModels').ProductDetailsById;
    variations: import('ProductModels').ProductVariationsById;
  }>,
  { error: import('ErrorTypes').Error }
>();

export default { getCartProductsOverviewAsync, updateCartAsync } as const;
