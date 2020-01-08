import productsSelectors from '../selectors';
import {
  productsScreenState,
  categoryList,
  productList,
  parentCategories,
} from '../testData';

describe('Products Selectors', () => {
  const state: import('MyTypes').RootState = {
    productsScreen: productsScreenState,
  };

  describe('Get Products Selectors', () => {
    test('getProductsArray', () => {
      const selectorData = productsSelectors.getProductsArray(state);
      expect(selectorData).toEqual(productList);
    });
  });

  describe('Get Categories Selectors', () => {
    test('getCategoriesArray', () => {
      const selectorData = productsSelectors.getCategoriesArray(state);
      expect(selectorData).toEqual(categoryList);
    });
    test('getParentCategories', () => {
      const selectorData = productsSelectors.getParentCategories(state);
      expect(selectorData).toEqual(parentCategories);
    });
  });
});
