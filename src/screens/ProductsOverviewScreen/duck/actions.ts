import { createAsyncAction } from 'typesafe-actions';
import { normalize } from 'normalizr';

import { formatProducts } from 'utils/product';
import { productListSchema, categoryListSchema } from '../schemas';
import types from './types';

const getProductsAsync = createAsyncAction(
  types.getProductsRequest,
  [
    types.getProductsSuccess,
    (products: import('ProductModels').ProductListResponse) => {
      const formattedProducts = formatProducts(products);

      return {
        ...normalize(formattedProducts, productListSchema),
      };
    },
  ],
  [
    types.getProductsFailure,
    (error: import('ErrorTypes').Error) => ({
      error,
    }),
  ],
)<
  undefined,
  import('normalizr').NormalizedSchema<
    import('ProductModels').NormalizedProducts,
    number[]
  >,
  { error: import('ErrorTypes').Error }
>();

const getCategoriesAsync = createAsyncAction(
  types.getCategoriesRequest,
  [
    types.getCategoriesSuccess,
    (categories: import('CategoryModels').CategoryListResponse) => ({
      ...normalize(categories, categoryListSchema),
    }),
  ],
  [
    types.getCategoriesFailure,
    (error: import('ErrorTypes').Error) => ({
      error,
    }),
  ],
)<
  undefined,
  import('normalizr').NormalizedSchema<
    import('CategoryModels').NormalizedCategories,
    number[]
  >,
  { error: import('ErrorTypes').Error }
>();

export default {
  getProductsAsync,
  getCategoriesAsync,
} as const;
