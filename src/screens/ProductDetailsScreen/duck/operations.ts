import axios from 'axios';

import {
  fetchProductById,
  fetchProductVariations,
} from 'apis/wooCommerce/requests/products';
import actions from './actions';
import { getProductVariationsArray } from './selectors';

export const getProductDetails = (
  productId: number,
  axiosConfig?: import('axios').AxiosRequestConfig,
) => async (dispatch: import('redux').Dispatch): Promise<void> => {
  try {
    dispatch(actions.getProductDetailsAsync.request());

    const { data: product } = await fetchProductById(
      productId,
      {},
      axiosConfig,
    );

    dispatch(actions.getProductDetailsAsync.success(product));
  } catch (e) {
    if (axios.isCancel(e)) {
      return;
    }

    dispatch(actions.getProductDetailsAsync.failure(e.message));
  }
};

export const getProductVariations = (
  productId: number,
  axiosConfig?: import('axios').AxiosRequestConfig,
) => async (dispatch: import('redux').Dispatch): Promise<void> => {
  try {
    dispatch(actions.getProductVariationsAsync.request());

    const { data } = await fetchProductVariations(
      productId,
      undefined,
      axiosConfig,
    );

    dispatch(actions.getProductVariationsAsync.success(data, productId));
  } catch (e) {
    if (axios.isCancel(e)) {
      return;
    }

    dispatch(actions.getProductVariationsAsync.failure(e));
  }
};

export const clearProductDetails = (productId: number) => (
  dispatch: import('redux').Dispatch,
  getState: () => import('MyTypes').RootState,
) => {
  const variationIds: number[] = getProductVariationsArray(getState())
    .filter(v => v.parentId === productId)
    .map(v => v.id);

  dispatch(actions.clearProductDetails(productId, variationIds));
};

export default {
  getProductDetails,
  getProductVariations,
  clearProductDetails,
} as const;
