import { normalize, schema } from 'normalizr';

import * as types from './types';

const productSchema = new schema.Entity('products');
const productListSchema = [productSchema];

const getProductsRequest = () =>
  ({
    type: types.getProductsRequest,
  } as const);

const getProductsSuccess = (
  products: import('apis/wooCommerce/types/product').ProductListResponse,
) =>
  ({
    type: types.getProductsSuccess,
    payload: {
      ...normalize<import('./reducer').Product>(products, productListSchema),
    },
  } as const);

const getProductsFailure = (error: { message: string }) =>
  ({
    type: types.getProductsFailure,
    payload: {
      error,
    },
  } as const);

export type ActionTypes =
  | ReturnType<typeof getProductsRequest>
  | ReturnType<typeof getProductsSuccess>
  | ReturnType<typeof getProductsFailure>;

export default {
  getProductsRequest,
  getProductsSuccess,
  getProductsFailure,
};
