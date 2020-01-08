import { createSelector } from 'reselect';
import { get } from 'lodash';

const emptyObj = {};

export const getProductsById = (
  state: import('MyTypes').RootState,
): import('ProductModels').ProductsById =>
  get(state, 'productsScreen.products.byId', emptyObj);
export const getCategoriesById = (
  state: import('MyTypes').RootState,
): import('CategoryModels').CategoriesById =>
  get(state, 'productsScreen.categories.byId', emptyObj);

export const getCategoriesArray = createSelector(
  getCategoriesById,
  categories => Object.keys(categories).map(key => categories[key]),
);

export const getProductsArray = createSelector(
  getProductsById,
  products => Object.keys(products).map(key => products[key]),
);

export const getParentCategories = createSelector(
  getCategoriesArray,
  categories => categories.filter(category => category.parent === 0),
);

export default {
  getProductsById,
  getCategoriesById,
  getProductsArray,
  getCategoriesArray,
  getParentCategories,
} as const;
