import utils from '../utils';
import testData from '../testData';

describe('Product Details Utils', () => {
  test('formatProductDetails: should format product details', () => {
    const expected = testData.productDetails;

    const formattedProducts = utils.formatProductDetails(
      testData.productDetailsResponse,
    );

    expect(formattedProducts).toEqual(expected);
  });
  test('formatProductVariations: should format product variations', () => {
    const expected = testData.productVariations;

    const formattedVariations = utils.formatProductVariations(
      testData.productVariationListResponse,
      testData.productId,
    );

    expect(formattedVariations).toEqual(expected);
  });
  test('getPackageSizeAttribute: should return package size attribute', () => {
    const expected = testData.packageSizeAttribute;

    const formattedProducts = utils.getPackageSizeAttribute(
      testData.attributes,
    );

    expect(formattedProducts).toEqual(expected);
  });
  test('getProductSubtitle: should return product subtitle', () => {
    const expected = testData.productSubtitle;

    const formattedProducts = utils.getProductSubtitle(testData.productDetails);

    expect(formattedProducts).toEqual(expected);
  });
});
