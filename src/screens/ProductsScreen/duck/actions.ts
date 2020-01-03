import { createAsyncAction } from 'typesafe-actions';
import { normalize } from 'normalizr';

import { productListSchema, categoryListSchema } from './schemas';
import types from './types';

const getProductsAsync = createAsyncAction(
  types.getProductsRequest,
  [
    types.getProductsSuccess,
    (products: import('ProductModels').ProductListResponse) => ({
      ...normalize(products, productListSchema),
    }),
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
    { products: { [key: string]: import('ProductModels').Product } },
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
    { categories: { [key: string]: import('CategoryModels').Category } },
    number[]
  >,
  { error: import('ErrorTypes').Error }
>();

export default {
  getProductsAsync,
  getCategoriesAsync,
} as const;
