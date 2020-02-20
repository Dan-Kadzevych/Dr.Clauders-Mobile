import { createSelector } from 'reselect';
import { get } from 'lodash';

const emptyObj = {} as const;
const emptyArr = [] as const;

export const getProductsById = (
  state: import('MyTypes').RootState,
): import('ProductModels').ProductsById =>
  get(state, 'productsScreen.products.byId', emptyObj);
export const getProductsIds = (state: import('MyTypes').RootState): number[] =>
  get(state, 'productsScreen.products.ids', emptyArr);
export const getCategoriesById = (
  state: import('MyTypes').RootState,
): import('CategoryModels').CategoriesById =>
  get(state, 'productsScreen.categories.byId', emptyObj);
export const getCategoriesIds = (
  state: import('MyTypes').RootState,
): number[] => get(state, 'productsScreen.categories.ids', emptyArr);

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
  getProductsById,
  getProductsIds,
  getCategoriesById,
  getCategoriesIds,
  getProductsArray,
  getCategoriesArray,
  getParentCategories,
} as const;
