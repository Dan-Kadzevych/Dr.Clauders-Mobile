/* ProductUrls
============================================================================= */

export const getAllProductsUrl = () => '/products' as const;
export const getProductByIdUrl = (productsId: number) =>
  `/products/${productsId}`;
export const getProductVariationsUrl = (productId: number) =>
  `/products/${productId}/variations`;

/* CategoryUrls
============================================================================= */

export const getAllCategoriesUrl = () => '/products/categories' as const;
