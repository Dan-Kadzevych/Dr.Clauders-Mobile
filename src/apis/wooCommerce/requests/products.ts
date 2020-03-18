import wooCommerceApi from '../wooCommerceApi';
import {
  getAllProductsUrl,
  getProductByIdUrl,
  getProductVariationsUrl,
} from '../urls';
import {
  WOO_PRODUCT_OVERVIEW_FIELDS,
  WOO_PRODUCT_DETAILS_FIELDS,
  WOO_PRODUCT_PER_PAGE,
  WOO_PRODUCT_VARIATION_FIELDS,
} from '../constants';

export const fetchProducts = (
  params: import('Woo').Params = {},
  config: import('axios').AxiosRequestConfig = {},
) =>
  wooCommerceApi.get<import('ProductModels').ProductOverviewListResponse>(
    getAllProductsUrl(),
    {
      params: {
        _fields: WOO_PRODUCT_OVERVIEW_FIELDS,
        per_page: WOO_PRODUCT_PER_PAGE,
        type: 'variable',
        ...params,
      },
      ...config,
    },
  );

export const fetchProductById = (
  id: import('General').Id,
  params: import('Woo').Params = {},
  config: import('axios').AxiosRequestConfig = {},
) =>
  wooCommerceApi.get<import('ProductModels').ProductDetailsResponse>(
    getProductByIdUrl(id),
    {
      params: {
        _fields: WOO_PRODUCT_DETAILS_FIELDS,
        ...params,
      },
      ...config,
    },
  );

export const fetchProductVariations = (
  id: import('General').Id,
  params: import('Woo').Params = {},
  config: import('axios').AxiosRequestConfig = {},
) =>
  wooCommerceApi.get<import('ProductModels').ProductVariationListResponse>(
    getProductVariationsUrl(id),
    {
      params: {
        _fields: WOO_PRODUCT_VARIATION_FIELDS,
        ...params,
      },
      ...config,
    },
  );
