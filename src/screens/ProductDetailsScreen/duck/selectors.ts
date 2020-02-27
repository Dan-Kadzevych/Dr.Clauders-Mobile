import { createSelector } from 'reselect';
import { get } from 'lodash';

import { emptyObj } from 'utils/constants';

export const getProductsById = (state: import('MyTypes').RootState) =>
  get(state, 'productDetails.products.byId', emptyObj);

export const makeGetProductDetailsSelector = () =>
  createSelector(
    getProductsById,
    (state: import('MyTypes').RootState, productId: number) => productId,
    (products, productId) => products[productId],
  );

export default {
  makeGetProductDetailsSelector,
} as const;
