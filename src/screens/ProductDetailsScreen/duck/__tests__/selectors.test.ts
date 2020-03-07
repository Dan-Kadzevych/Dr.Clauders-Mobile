import productDetailsSelectors from '../selectors';
import testData from '../testData';

describe('Product Details Selectors', () => {
  const state: import('MyTypes').RootState = {
    productDetails: testData.productDetailsState,
  } as import('MyTypes').RootState;
  const {
    getProductDetails,
    getPackageSizeOptions,
    getDefaultPackageSizeValue,
    getProductVariations,
  } = productDetailsSelectors.makeProductDetailsSelectors();

  describe('Get Product Details Selectors', () => {
    test('getProductVariationsArray', () => {
      const selectorData = productDetailsSelectors.getProductVariationsArray(
        state,
      );
      expect(selectorData).toEqual(testData.productVariations);
    });

    test('getProductDetails', () => {
      const selectorData = getProductDetails(state, testData.productId);
      expect(selectorData).toEqual(testData.productDetails);
    });

    test('getProductVariations', () => {
      const selectorData = getProductVariations(state, testData.productId);
      expect(selectorData).toEqual(testData.productVariations);
    });

    test('getPackageSizeOptions', () => {
      const selectorData = getPackageSizeOptions(state, testData.productId);
      expect(selectorData).toEqual(testData.packageSizeOptions);
    });

    test('getDefaultPackageSizeValue', () => {
      const selectorData = getDefaultPackageSizeValue(
        state,
        testData.productId,
      );
      expect(selectorData).toEqual(testData.defaultPackageSizeValue);
    });
  });
});
