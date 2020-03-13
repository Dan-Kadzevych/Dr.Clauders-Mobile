import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import pick from 'lodash/pick';

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

export const addToCart = (
  variationId: import('General').Id,
  productId: import('General').Id,
  quantity: string | number,
) => async (
  dispatch: import('redux').Dispatch,
  getState: () => import('MyTypes').RootState,
): Promise<void> => {
  try {
    dispatch(actions.addToCartAsync.request());

    const cartJson = await AsyncStorage.getItem('cart');
    let cart: import('Cart').Cart = { itemsById: {}, quantityById: {} };

    if (cartJson) {
      cart = JSON.parse(cartJson);
      const cartItem = cart.itemsById[variationId];
      const cartQuantity = cart.quantityById[variationId];

      if (cartItem && cartQuantity) {
        cart.quantityById[variationId] =
          Number(cartQuantity) + Number(quantity);
      } else {
        cart.itemsById[variationId] = {
          variationId,
          productId,
        };
        cart.quantityById[variationId] = quantity;
      }
    } else {
      cart.itemsById[variationId] = {
        variationId,
        productId,
      };
      cart.quantityById[variationId] = quantity;
    }

    await AsyncStorage.setItem('cart', JSON.stringify(cart));

    const addedProduct = pick(
      getState().productDetails.products.byId,
      productId,
    );
    const addedVariation = pick(
      getState().productDetails.variations.byId,
      variationId,
    );

    dispatch(
      actions.addToCartAsync.success(cart, addedProduct, addedVariation),
    );
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
