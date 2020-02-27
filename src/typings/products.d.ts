declare module 'ProductModels' {
  type ProductImage = {
    id: number;
    date_created: string;
    date_created_gmt: string;
    date_modified: string;
    date_modified_gmt: string;
    src: string;
    name: string;
    alt: string;
  };

  export type ProductImageList = ProductImage[];

  /* Product Overview Typings
============================================================================= */

  export type ProductOverview = {
    images: ProductImageList;
    id: number;
    name: string;
    price_range: string;
    short_description: string;
    stock_status: StockStatus;
    type: 'simple' | 'grouped' | 'external' | 'variable';
  };

  export type ProductOverviewList = ProductOverview[];

  export type ProductsOverviewById = { [key: string]: ProductOverview };

  export type NormalizedProductsOverview = { products: ProductsOverviewById };

  /* Product Details Typings
============================================================================= */

  export type ProductDetails = ProductOverview & {
    meta_data: {
      id: number;
      key: string;
      value: any; // eslint-disable-line @typescript-eslint/no-explicit-any
    }[];
  };

  export type ProductDetailsById = { [key: string]: ProductDetails };

  export type NormalizedProductDetails = { product: ProductDetailsById };

  /* Product Variation Typings
============================================================================= */

  type ProductVariation = {
    attributes: { id: number; name: string; option: string }[];
    id: number;
    menu_order: number;
    price: string;
    stock_status: StockStatus;
  };

  export type ProductVariationsById = { [key: string]: ProductVariation };

  export type NormalizedProductVariations = {
    variations: ProductVariationsById;
  };
}
