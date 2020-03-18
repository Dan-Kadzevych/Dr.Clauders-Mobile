import utils from 'utils/products';
import testData from '../testData';
import { getProductSubtitle } from '../utils';

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

    const formattedVariations = utils.formatProductVariationList(
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

    const formattedProducts = getProductSubtitle(testData.productDetails);

    expect(formattedProducts).toEqual(expected);
  });
});
