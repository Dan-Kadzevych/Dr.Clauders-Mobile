import AsyncStorage from '@react-native-community/async-storage';

import constants from './constants';

const setCart = async (cart: import('CartModels').Cart): Promise<void> => {
  await AsyncStorage.setItem(constants.CART_KEY, JSON.stringify(cart));
};

const getCart = async (): Promise<import('CartModels').Cart> => {
  const cartJson = await AsyncStorage.getItem(constants.CART_KEY);

  if (cartJson) {
    return JSON.parse(cartJson);
  }
  await setCart(constants.DEFAULT_CART);

  return constants.DEFAULT_CART;
};

export default { setCart, getCart } as const;
