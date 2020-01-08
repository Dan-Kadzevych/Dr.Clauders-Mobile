import wooCommerceApi from '../wooCommerceApi';
import {
  WOO_CATEGORY_URL,
  WOO_CATEGORY_FIELDS,
  WOO_CATEGORY_PER_PAGE,
} from '../constants';

export const fetchCategories = async (params?: import('Woo').Params) => {
  const response = await wooCommerceApi.get<
    import('CategoryModels').CategoryListResponse
  >(WOO_CATEGORY_URL, {
    params: {
      _fields: WOO_CATEGORY_FIELDS,
      per_page: WOO_CATEGORY_PER_PAGE,
      hide_empty: true,
      ...params,
    },
  });

  return response;
};

export default { fetchCategories };
