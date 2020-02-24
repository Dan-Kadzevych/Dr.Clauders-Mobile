import { createAsyncAction } from 'typesafe-actions';

import { formatProduct } from 'utils/product';
import types from './types';

const getProductAsync = createAsyncAction(
  types.getProductRequest,
  [
    types.getProductSuccess,
    (product: import('ProductModels').ProductResponse) => ({
      product: formatProduct(product),
    }),
  ],
  [
    types.getProductFailure,
    (error: import('ErrorTypes').Error) => ({
      error,
    }),
  ],
)<
  undefined,
  { product: import('ProductModels').Product },
  { error: import('ErrorTypes').Error }
>();

export default { getProductAsync } as const;
