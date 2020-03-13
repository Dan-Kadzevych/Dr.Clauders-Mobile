import { decodeHTML } from 'entities';
import omit from 'lodash/omit';
import get from 'lodash/get';

import { removeHTML } from 'utils/string';
import { PACKAGE_SIZE_ATTRIBUTE_NAMES } from './constants';

export const formatProductDetails = (
  product: import('ProductModels').ProductDetailsResponse,
): import('ProductModels').ProductDetails =>
  omit(
    {
      ...product,
      short_description: removeHTML(product.short_description).trim(),
      price_range: decodeHTML(removeHTML(product.price_html).trim()),
    },
    'price_html',
    '_links',
  );

export const formatProductVariationList = (
  variations: import('ProductModels').ProductVariationListResponse,
  parentId: number,
): import('ProductModels').ProductVariationList =>
  variations.map(v => omit({ ...v, parentId }, '_links'));

export const getProductSubtitle = (
  product: import('ProductModels').ProductDetails | undefined,
): string | undefined => {
  if (product && product.meta_data) {
    return get(
      product.meta_data.find(({ key }) => key === 'wc_ps_subtitle'),
      'value',
      undefined,
    );
  }

  return undefined;
};

export const getPackageSizeAttribute = <
  T extends
    | import('ProductModels').DefaultAttribute
    | import('ProductModels').Attribute
>(
  attributes: T[],
): T | undefined =>
  attributes.find(attr => PACKAGE_SIZE_ATTRIBUTE_NAMES.includes(attr.name));

export const findDetailsScreenRoute = (
  routes: import('NavigatorModels').RouteList,
  productId: number,
  index: number,
) =>
  routes.find((r, i) => {
    if (r.name === 'ProductDetails') {
      const { params } = r as import('NavigatorModels').ProductsRouteProp<
        'ProductDetails'
      >;

      return params.productId === productId && i + 1 !== index;
    }

    return false;
  });

export default {
  formatProductDetails,
  formatProductVariationList,
  getProductSubtitle,
  getPackageSizeAttribute,
  findDetailsScreenRoute,
} as const;
