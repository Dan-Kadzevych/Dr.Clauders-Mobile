import { removeHTML } from '../string';

describe('String Utils', () => {
  test('removeHTML: should remove all html tags from string', () => {
    const htmlString =
      '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#8372;</span>310.00</span> &ndash; <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#8372;</span>1,600.00</span>';
    const expected = '&#8372;310.00 &ndash; &#8372;1,600.00';

    const cleanString = removeHTML(htmlString);

    expect(cleanString).toBe(expected);
  });
});
