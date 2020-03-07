const getProductDetailsRequest =
  '[Product Details] Get Product Details Request';
const getProductDetailsSuccess =
  '[Product Details] Get Product Details Success';
const getProductDetailsFailure =
  '[Product Details] Get Product Details Failure';

const getProductVariationsRequest =
  '[Product Details] Get Product Variations Request';
const getProductVariationsSuccess =
  '[Product Details] Get Product Variations Success';
const getProductVariationsFailure =
  '[Product Details] Get Product Variations Failure';

const addToCartRequest = '[Product Details] Add To Cart Request';
const addToCartSuccess = '[Product Details] Add To Cart Success';
const addToCartFailure = '[Product Details] Add To Cart Failure';

const clearProductDetails = '[Product Details] Clear Product Details';

export default {
  getProductDetailsRequest,
  getProductDetailsSuccess,
  getProductDetailsFailure,
  getProductVariationsRequest,
  getProductVariationsSuccess,
  getProductVariationsFailure,
  addToCartRequest,
  addToCartSuccess,
  addToCartFailure,
  clearProductDetails,
} as const;
