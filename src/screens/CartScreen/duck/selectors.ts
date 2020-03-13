import { createSelector } from 'reselect';
import get from 'lodash/get';
import compact from 'lodash/compact';

import { emptyObj } from 'utils/constants';
import { getPackageSizeAttribute } from 'screens/ProductDetailsScreen/duck/utils';

const getProductDetailsById = (
  state: import('MyTypes').RootState,
): import('ProductModels').ProductDetailsById =>
  get(state, 'cart.products.byId', emptyObj);

const getProductVariationsById = (
  state: import('MyTypes').RootState,
): import('ProductModels').ProductVariationsById =>
  get(state, 'cart.variations.byId', emptyObj);

const getQuantityById = (
  state: import('MyTypes').RootState,
): import('./reducer').QuantityByID =>
  get(state, 'cart.quantity.byId', emptyObj);

export const getCartItems = createSelector(
  getProductDetailsById,
  getProductVariationsById,
  getQuantityById,
  (productsById, variationsById, quantityById) =>
    compact(
      Object.keys(variationsById).map(key => {
        const variation = variationsById[key];
        if (variation) {
          const parent = productsById[variation.parentId];

          if (parent) {
            const packageSizeAttribute = getPackageSizeAttribute(
              variation.attributes,
            );

            if (packageSizeAttribute) {
              const name = `${parent.name} - ${packageSizeAttribute.option}`;
              const quantity = quantityById[variation.id];

              return {
                image: parent.images[0].src,
                price: variation.price,
                name,
                quantity,
                id: variation.id,
              };
            }

            return undefined;
          }

          return undefined;
        }

        return undefined;
      }),
    ),
);

export default { getQuantityById, getCartItems } as const;
