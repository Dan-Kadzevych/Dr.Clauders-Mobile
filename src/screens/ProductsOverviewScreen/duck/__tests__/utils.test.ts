import { formatProductsOverview } from '../utils';
import { productOverview, productOverviewListResponse } from '../testData';

describe('Product utils', () => {
  test('formatProducts: should format products', () => {
    const expected = [productOverview];

    const formattedProducts = formatProductsOverview(
      productOverviewListResponse,
    );

    expect(formattedProducts).toEqual(expected);
  });
});
