const getCartProductsRequest = '[Cart Screen] Get Cart Products Request';
const getCartProductsSuccess = '[Cart Screen] Get Cart Products  Success';
const getCartProductsFailure = '[Cart Screen] Get Cart Products  Failure';

const updateCartRequest = '[Cart Screen] Update Cart Request';
const updateCartSuccess = '[Cart Screen] Update Cart Success';
const updateCartFailure = '[Cart Screen] Update Cart Failure';

const removeFromCartRequest = '[Cart Screen] Remove From Cart Request';
const removeFromCartSuccess = '[Cart Screen] Remove From Cart Success';
const removeFromCartFailure = '[Cart Screen] Remove From Cart Failure';

const addToCartRequest = '[Cart Screen] Add To Cart Request';
const addToCartSuccess = '[Cart Screen] Add To Cart Success';
const addToCartFailure = '[Cart Screen] Add To Cart Failure';

export default {
  getCartProductsRequest,
  getCartProductsSuccess,
  getCartProductsFailure,
  updateCartRequest,
  updateCartSuccess,
  updateCartFailure,
  addToCartRequest,
  addToCartSuccess,
  addToCartFailure,
  removeFromCartRequest,
  removeFromCartSuccess,
  removeFromCartFailure,
} as const;
