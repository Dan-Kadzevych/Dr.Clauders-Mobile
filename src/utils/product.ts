import omit from 'lodash/omit';
import { decodeHTML } from 'entities';

const removeHTML = (string: string): string =>
  string.replace(/(<([^>]+)>)/gi, '');

export const formatProducts = (
  products: import('ProductModels').ProductListResponse,
): import('ProductModels').ProductList => products.map(formatProduct);

export const formatProduct = (
  product: import('ProductModels').ProductResponse,
): import('ProductModels').Product =>
  omit(
    {
      ...product,
      short_description: removeHTML(product.short_description).trim(),
      price_range: decodeHTML(removeHTML(product.price_html).trim()),
    },
    'price_html',
    '_links',
  );
