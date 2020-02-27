import { decodeHTML } from 'entities';
import omit from 'lodash/omit';

import { removeHTML } from 'utils/general';

export const formatProductsOverview = (
  products: import('ProductModels').ProductOverviewListResponse,
): import('ProductModels').ProductOverviewList =>
  products.map(formatProductOverview);

export const formatProductOverview = (
  product: import('ProductModels').ProductOverviewResponse,
): import('ProductModels').ProductOverview =>
  omit(
    {
      ...product,
      short_description: removeHTML(product.short_description).trim(),
      price_range: decodeHTML(removeHTML(product.price_html).trim()),
    },
    'price_html',
  );
