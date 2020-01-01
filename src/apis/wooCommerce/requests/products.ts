import wooCommerceApi from '../wooCommerceApi';
import { WOO_PRODUCT_FIELDS, WOO_PRODUCTS_URL } from '../constants';

export const fetchProducts = async (
  params?: import('../types/general').Params,
) => {
  const response = await wooCommerceApi.get<
    import('apis/wooCommerce/types/product').ProductListResponse
  >(WOO_PRODUCTS_URL, {
    params: {
      _fields: WOO_PRODUCT_FIELDS,
      ...params,
    },
  });

  return response;
};

export default { fetchProducts };
