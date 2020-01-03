import wooCommerceApi from '../wooCommerceApi';
import {
  WOO_PRODUCT_URL,
  WOO_PRODUCT_FIELDS,
  WOO_PRODUCT_PER_PAGE,
} from '../constants';

export const fetchProducts = async (params?: import('Woo').Params) => {
  const response = await wooCommerceApi.get<
    import('ProductModels').ProductListResponse
  >(WOO_PRODUCT_URL, {
    params: {
      _fields: WOO_PRODUCT_FIELDS,
      per_page: WOO_PRODUCT_PER_PAGE,
      ...params,
    },
  });

  return response;
};

export default { fetchProducts };
