import * as types from './types';

const getProductsRequest = () =>
  ({
    type: types.getProductsRequest,
  } as const);

const getProductsSuccess = (products: { name: string }[]) =>
  ({
    type: types.getProductsSuccess,
    payload: {
      products,
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
