import utils from '../utils';
import { product, productListResponse } from '../testData';

describe('Product utils', () => {
  test('removeHTML: should remove all html tags from string', () => {
    const htmlString =
      '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#8372;</span>310.00</span> &ndash; <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#8372;</span>1,600.00</span>';
    const expected = '&#8372;310.00 &ndash; &#8372;1,600.00';

    const cleanString = utils.removeHTML(htmlString);

    expect(cleanString).toBe(expected);
  });

  test('formatProducts: should format products', () => {
    const expected = [product];

    const formattedProducts = utils.formatProducts(productListResponse);

    expect(formattedProducts).toEqual(expected);
  });
});
