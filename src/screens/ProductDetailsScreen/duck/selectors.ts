import { createSelector } from 'reselect';
import get from 'lodash/get';
import compact from 'lodash/compact';

import { emptyObj, emptyArr } from 'utils/constants';
import { getPackageSizeAttribute } from './utils';

export const getProductDetailsById = (
  state: import('MyTypes').RootState,
): import('ProductModels').ProductDetailsById =>
  get(state, 'productDetails.products.byId', emptyObj);

export const getProductVariationsById = (
  state: import('MyTypes').RootState,
): import('ProductModels').ProductVariationsById =>
  get(state, 'productDetails.variations.byId', emptyObj);

export const makeProductDetailsSelectors = () => {
  const getProductDetails = createSelector(
    getProductDetailsById,
    (state: import('MyTypes').RootState, productId: number): number =>
      productId,
    (productsById, productId) => productsById[productId],
  );

  const getProductVariations = createSelector(
    getProductDetails,
    getProductVariationsById,
    (product, variationsById) => {
      if (product && product.variations) {
        return compact(product.variations.map(id => variationsById[id]));
      }

      return emptyArr;
    },
  );

  const getPackageSizeOptions = createSelector(
    getProductVariations,
    variations => {
      if (variations.length) {
        return compact(
          variations.map(v => {
            const packageSizeAttribute = getPackageSizeAttribute(v.attributes);

            if (packageSizeAttribute) {
              return {
                label: packageSizeAttribute.option,
                value: v.id.toString(),
              };
            }

            return undefined;
          }),
        );
      }

      return emptyArr;
    },
  );

  const getDefaultPackageSizeValue = createSelector(
    getProductDetails,
    getPackageSizeOptions,
    (product, options) => {
      if (product && product.default_attributes && options && options.length) {
        const packageSizeAttribute = getPackageSizeAttribute(
          product.default_attributes,
        );
        if (packageSizeAttribute) {
          const option = options.find(
            opt => opt.label === packageSizeAttribute.option,
          );

          if (option) {
            return option.value;
          }
        }
      }

      return undefined;
    },
  );

  return {
    getProductDetails,
    getDefaultPackageSizeValue,
    getPackageSizeOptions,
  };
};

export default {
  makeProductDetailsSelectors,
  getProductVariationsById,
} as const;
