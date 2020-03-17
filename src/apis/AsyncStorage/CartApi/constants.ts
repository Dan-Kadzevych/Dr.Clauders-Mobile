const CART_KEY = 'cart';
const DEFAULT_CART: import('CartModels').Cart = {
  itemsById: {},
  quantityById: {},
};

export default { CART_KEY, DEFAULT_CART } as const;
