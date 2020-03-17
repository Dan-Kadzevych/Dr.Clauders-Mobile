import { decodeHTML } from 'entities';

import omit from 'lodash/omit';
import { PACKAGE_SIZE_ATTRIBUTE_NAMES } from './constants';
import { removeHTML } from './string';

export const getPackageSizeAttribute = <
  T extends
    | import('ProductModels').DefaultAttribute
    | import('ProductModels').Attribute
>(
  attributes: T[],
): T | undefined =>
  attributes.find(attr => PACKAGE_SIZE_ATTRIBUTE_NAMES.includes(attr.name));

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
