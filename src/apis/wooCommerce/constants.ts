/* Product Constants
============================================================================= */

export const WOO_PRODUCT_OVERVIEW_FIELDS = [
  // 'attributes',
  // 'categories',
  // 'default_attributes',
  'id',
  'images',
  'name',
  // 'parent_id',
  // 'price',
  'price_html',
  'short_description',
  'stock_status',
  'type',
];
export const WOO_PRODUCT_PER_PAGE = 30;

export const WOO_PRODUCT_DETAILS_FIELDS = [
  ...WOO_PRODUCT_OVERVIEW_FIELDS,
  'meta_data',
  'variations',
  'attributes',
  'default_attributes',
];

/* Product Variation Constants
============================================================================= */

export const WOO_PRODUCT_VARIATION_FIELDS = [
  'attributes',
  'categories',
  'id',
  'menu_order',
  'price',
  'stock_status',
];

/* Category Constants
============================================================================= */

export const WOO_CATEGORY_FIELDS = [
  'count',
  'id',
  'image.id',
  'image.name',
  'image.src',
  'menu_order',
  'name',
  'parent',
  'price',
];
export const WOO_CATEGORY_PER_PAGE = 30;
