import wooCommerceApi from '../wooCommerceApi';
import {
  getAllProductsUrl,
  getProductByIdUrl,
  getProductVariationsUrl,
} from '../urls';
import {
  WOO_PRODUCT_FIELDS,
  WOO_PRODUCT_PER_PAGE,
  WOO_PRODUCT_VARIATION_FIELDS,
} from '../constants';

export const fetchProducts = (params?: import('Woo').Params) =>
  wooCommerceApi.get<import('ProductModels').ProductListResponse>(
    getAllProductsUrl(),
    {
      params: {
        _fields: WOO_PRODUCT_FIELDS,
        per_page: WOO_PRODUCT_PER_PAGE,
        ...params,
      },
    },
  );

export const fetchProductById = (id: number, params?: import('Woo').Params) =>
  wooCommerceApi.get<import('ProductModels').ProductResponse>(
    getProductByIdUrl(id),
    {
      params: {
        _fields: WOO_PRODUCT_FIELDS,
        ...params,
      },
    },
  );

export const fetchProductVariations = (
  id: number,
  params?: import('Woo').Params,
) =>
  wooCommerceApi.get<import('ProductModels').ProductVariationsResponse>(
    getProductVariationsUrl(id),
    {
      params: {
        _fields: WOO_PRODUCT_VARIATION_FIELDS,
        ...params,
      },
    },
  );
