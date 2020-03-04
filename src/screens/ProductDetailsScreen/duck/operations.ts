import AsyncStorage from '@react-native-community/async-storage';

import {
  fetchProductById,
  fetchProductVariations,
} from 'apis/wooCommerce/requests/products';
import actions from './actions';

export const getProductDetails = (id: number) => async (
  dispatch: import('redux').Dispatch,
): Promise<void> => {
  try {
    dispatch(actions.getProductDetailsAsync.request());

    const { data: product } = await fetchProductById(id);

    dispatch(actions.getProductDetailsAsync.success(product));
  } catch (e) {
    dispatch(actions.getProductDetailsAsync.failure(e.message));
  }
};

export const getProductVariations = (id: number) => async (
  dispatch: import('redux').Dispatch,
): Promise<void> => {
  try {
    dispatch(actions.getProductVariationsAsync.request());

    const { data } = await fetchProductVariations(id);

    dispatch(actions.getProductVariationsAsync.success(data));
  } catch (e) {
    dispatch(actions.getProductVariationsAsync.failure(e));
  }
};

// TODO refactor!
export const addToCart = (product: { id: string; quantity: string }) => async (
  dispatch: import('redux').Dispatch,
): Promise<void> => {
  try {
    dispatch(actions.addToCartAsync.request());

    const formattedData: import('Cart').CartStorage = {
      items: { [product.id]: product.quantity },
    };

    const cartJson = await AsyncStorage.getItem('cart');

    if (cartJson) {
      const cart: import('Cart').CartStorage = JSON.parse(cartJson);
      const qtyInCart = cart.items[product.id];

      if (qtyInCart) {
        formattedData.items[product.id] = String(
          Number(formattedData.items[product.id]) + Number(qtyInCart),
        );
      }
    }

    await AsyncStorage.mergeItem('cart', JSON.stringify(formattedData));

    dispatch(actions.addToCartAsync.success(formattedData));
  } catch (e) {
    dispatch(actions.addToCartAsync.failure(e));
  }
};

export default { addToCart, getProductDetails, getProductVariations } as const;
