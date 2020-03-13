import { createAsyncAction, createAction } from 'typesafe-actions';
import { normalize } from 'normalizr';

import { formatProductDetails, formatProductVariationList } from './utils';
import types from './types';
import { productDetailsSchema, productVariationListSchema } from '../schemas';

const getProductDetailsAsync = createAsyncAction(
  types.getProductDetailsRequest,
  [
    types.getProductDetailsSuccess,
    (product: import('ProductModels').ProductDetailsResponse) => {
      const formattedProduct = formatProductDetails(product);

      return normalize(formattedProduct, productDetailsSchema);
    },
  ],
  [
    types.getProductDetailsFailure,
    (error: import('ErrorTypes').Error) => ({
      error,
    }),
  ],
)<
  undefined,
  import('normalizr').NormalizedSchema<
    import('ProductModels').NormalizedProductDetails,
    number
  >,
  { error: import('ErrorTypes').Error }
>();

const getProductVariationsAsync = createAsyncAction(
  types.getProductVariationsRequest,
  [
    types.getProductVariationsSuccess,
    (
      productVariations: import('ProductModels').ProductVariationListResponse,
      parentId: number,
    ) =>
      normalize(
        formatProductVariationList(productVariations, parentId),
        productVariationListSchema,
      ),
  ],
  [
    types.getProductVariationsFailure,
    (error: import('ErrorTypes').Error) => ({
      error,
    }),
  ],
)<
  undefined,
  import('normalizr').NormalizedSchema<
    import('ProductModels').NormalizedProductVariations,
    number[]
  >,
  { error: import('ErrorTypes').Error }
>();

const addToCartAsync = createAsyncAction(
  types.addToCartRequest,
  [
    types.addToCartSuccess,
    (
      cart: import('Cart').Cart,
      addedProduct: import('utility-types').DeepReadonly<
        import('ProductModels').ProductDetailsById
      >,
      addedVariation: import('utility-types').DeepReadonly<
        import('ProductModels').ProductVariationsById
      >,
    ) => ({
      quantityById: cart.quantityById,
      products: addedProduct,
      variations: addedVariation,
    }),
  ],
  [
    types.addToCartFailure,
    (error: import('ErrorTypes').Error) => ({
      error,
    }),
  ],
)<
  undefined,
  {
    quantityById: import('Cart').QuantityById;
    products: import('ProductModels').ProductDetailsById;
    variations: import('ProductModels').ProductVariationsById;
  },
  { error: import('ErrorTypes').Error }
>();

const clearProductDetails = createAction(
  types.clearProductDetails,
  (productId: number, variationIds: number[]) => ({ productId, variationIds }),
)<{ productId: number; variationIds: number[] }>();

export default {
  addToCartAsync,
  getProductDetailsAsync,
  getProductVariationsAsync,
  clearProductDetails,
} as const;
