import { createAsyncAction } from 'typesafe-actions';
import { normalize } from 'normalizr';

import { formatProductDetails } from './utils';
import types from './types';
import { productSchema, productVariationListSchema } from '../schema';

const getProductDetailsAsync = createAsyncAction(
  types.getProductDetailsRequest,
  [
    types.getProductDetailsSuccess,
    (product: import('ProductModels').ProductDetailsResponse) => {
      const formattedProduct = formatProductDetails(product);

      return normalize(formattedProduct, productSchema);
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
    (productVariations: import('ProductModels').ProductVariationListResponse) =>
      normalize(productVariations, productVariationListSchema),
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

export default { getProductDetailsAsync, getProductVariationsAsync } as const;
