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

const clearProductDetails = '[Product Details] Clear Product Details';

export default {
  getProductDetailsRequest,
  getProductDetailsSuccess,
  getProductDetailsFailure,
  getProductVariationsRequest,
  getProductVariationsSuccess,
  getProductVariationsFailure,
  clearProductDetails,
} as const;
