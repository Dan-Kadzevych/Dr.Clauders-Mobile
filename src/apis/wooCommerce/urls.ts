/* ProductUrls
============================================================================= */

export const getAllProductsUrl = () => '/products' as const;
export const getProductByIdUrl = (productsId: import('General').Id) =>
  `/products/${productsId}`;
export const getProductVariationsUrl = (productId: import('General').Id) =>
  `/products/${productId}/variations`;

/* CategoryUrls
============================================================================= */

export const getAllCategoriesUrl = () => '/products/categories' as const;
