import get from 'lodash/get';

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
  getProductSubtitle,
  findDetailsScreenRoute,
} as const;
