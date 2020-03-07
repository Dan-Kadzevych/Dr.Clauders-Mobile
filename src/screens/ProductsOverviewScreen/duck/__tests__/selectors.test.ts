import productsSelectors from '../selectors';
import {
  productsOverviewState,
  categoryList,
  productOverviewList,
  parentCategories,
} from '../testData';

describe('Products Overview Selectors', () => {
  const state: import('MyTypes').RootState = {
    productsOverview: productsOverviewState,
  } as import('MyTypes').RootState;

  describe('Get Products Selectors', () => {
    test('getProductsArray', () => {
      const selectorData = productsSelectors.getProductsArray(state);
      expect(selectorData).toEqual(productOverviewList);
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
