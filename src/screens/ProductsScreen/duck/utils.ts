import { decodeHTML } from 'entities';
import omit from 'lodash/omit';

const removeHTML = (string: string): string =>
  string.replace(/(<([^>]+)>)/gi, '');

export const formatProducts = (
  products: import('ProductModels').ProductListResponse,
): import('ProductModels').ProductList =>
  products.map(p =>
    omit(
      {
        ...p,
        short_description: removeHTML(p.short_description).trim(),
        price_range: decodeHTML(removeHTML(p.price_html).trim()),
      },
      'price_html',
    ),
  );

export default {
  removeHTML,
  formatProducts,
} as const;
