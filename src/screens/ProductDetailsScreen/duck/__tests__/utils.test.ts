import {
  formatProductDetails,
  getPackageSizeAttribute,
  getProductSubtitle,
} from '../utils';
import testData from '../testData';

describe('Product Details Utils', () => {
  test('formatProductDetails: should format product details', () => {
    const expected = testData.productDetails;

    const formattedProducts = formatProductDetails(
      testData.productDetailsResponse,
    );

    expect(formattedProducts).toEqual(expected);
  });
  test('getPackageSizeAttribute: should return package size attribute', () => {
    const expected = testData.packageSizeAttribute;

    const formattedProducts = getPackageSizeAttribute(testData.attributes);

    expect(formattedProducts).toEqual(expected);
  });
  test('getProductSubtitle: should return product subtitle', () => {
    const expected = testData.productSubtitle;

    const formattedProducts = getProductSubtitle(testData.productDetails);

    expect(formattedProducts).toEqual(expected);
  });
});
