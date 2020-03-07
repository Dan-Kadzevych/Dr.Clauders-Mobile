import AsyncStorage from '@react-native-community/async-storage';
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

export const addToCart = (product: import('Cart').CartProduct) => async (
  dispatch: import('redux').Dispatch,
): Promise<void> => {
  try {
    dispatch(actions.addToCartAsync.request());

    const formattedData: import('Cart').Cart = {
      items: { [product.id]: product.quantity },
    };

    const cartJson = await AsyncStorage.getItem('cart');

    if (cartJson) {
      const cart: import('Cart').Cart = JSON.parse(cartJson);
      const qtyInCart = cart.items[product.id];

      if (qtyInCart) {
        formattedData.items[product.id] =
          Number(formattedData.items[product.id]) + Number(qtyInCart);
      }
    }

    await AsyncStorage.mergeItem('cart', JSON.stringify(formattedData));

    dispatch(actions.addToCartAsync.success(formattedData));
  } catch (e) {
    dispatch(actions.addToCartAsync.failure(e));
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
  addToCart,
  getProductDetails,
  getProductVariations,
  clearProductDetails,
} as const;
