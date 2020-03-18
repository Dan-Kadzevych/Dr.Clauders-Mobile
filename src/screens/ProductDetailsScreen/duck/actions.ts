import { createAsyncAction, createAction } from 'typesafe-actions';
import { normalize } from 'normalizr';

import {
  formatProductVariationList,
  formatProductDetails,
} from 'utils/products';
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

const clearProductDetails = createAction(
  types.clearProductDetails,
  (productId: number, variationIds: number[]) => ({ productId, variationIds }),
)<{ productId: number; variationIds: number[] }>();

export default {
  getProductDetailsAsync,
  getProductVariationsAsync,
  clearProductDetails,
} as const;
