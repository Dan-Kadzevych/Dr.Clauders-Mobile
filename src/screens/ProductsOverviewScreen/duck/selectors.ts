import { createSelector } from 'reselect';
import { get } from 'lodash';

import { emptyObj } from 'utils/constants';

export const getProductsById = (
  state: import('MyTypes').RootState,
): import('ProductModels').ProductsOverviewById =>
  get(state, 'productsOverview.products.byId', emptyObj);
export const getCategoriesById = (
  state: import('MyTypes').RootState,
): import('CategoryModels').CategoriesById =>
  get(state, 'productsOverview.categories.byId', emptyObj);

export const getProductsArray = createSelector(
  getProductsById,
  products => Object.keys(products).map(key => products[key]),
);

export const getCategoriesArray = createSelector(
  getCategoriesById,
  categories => Object.keys(categories).map(key => categories[key]),
);

export const getParentCategories = createSelector(
  getCategoriesArray,
  categories => categories.filter(category => category.parent === 0),
);

export default {
  getProductsArray,
  getCategoriesArray,
  getParentCategories,
} as const;
