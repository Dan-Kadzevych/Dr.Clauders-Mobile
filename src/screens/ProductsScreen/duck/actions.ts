import { normalize, schema } from 'normalizr';
import { createAction } from 'typesafe-actions';

import types from './types';

const productSchema = new schema.Entity('products');
const productListSchema = [productSchema];

const getProductsRequest = createAction(types.getProductsRequest)<void>();

const getProductsSuccess = createAction(
  types.getProductsSuccess,
  (products: import('apis/wooCommerce/types/product').ProductListResponse) => ({
    ...normalize<import('./reducer').Product>(products, productListSchema),
  }),
)();

const getProductsFailure = createAction(
  types.getProductsFailure,
  (error: { message: string }) => ({
    error,
  }),
)();

export default {
  getProductsRequest,
  getProductsSuccess,
  getProductsFailure,
} as const;
