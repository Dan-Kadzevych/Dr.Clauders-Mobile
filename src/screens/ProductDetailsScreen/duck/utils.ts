import { decodeHTML } from 'entities';
import omit from 'lodash/omit';
import get from 'lodash/get';

import { removeHTML } from 'utils/general';

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
  product: import('ProductModels').ProductDetails,
): string | null =>
  get(
    product.meta_data.find(({ key }) => key === 'wc_ps_subtitle'),
    'value',
    null,
  );
