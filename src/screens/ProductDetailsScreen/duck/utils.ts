import { decodeHTML } from 'entities';
import omit from 'lodash/omit';
import get from 'lodash/get';

import { removeHTML } from 'utils/general';
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
