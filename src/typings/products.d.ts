declare module 'ProductModels' {
  type Attribute = {
    id: number;
    name: string;
    position: number;
    visible: boolean;
    variation: boolean;
    options: string[];
  };

  type AttributeList = Attribute[];

  type DefaultAttribute = {
    id: number;
    name: string;
    option: string;
  };

  export type DefaultAttributeList = DefaultAttribute[];

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
    attributes: AttributeList;
    default_attributes: DefaultAttributeList;
    meta_data: {
      id: number;
      key: string;
      value: any; // eslint-disable-line @typescript-eslint/no-explicit-any
    }[];
    variations: number[];
  };

  export type ProductDetailsList = ProductDetails[];

  export type ProductDetailsById = { [key: string]: ProductDetails };

  export type NormalizedProductDetails = { product: ProductDetailsById };
  export type NormalizedProductDetailsList = { products: ProductDetailsById };

  /* Product Variation Typings
============================================================================= */

  type ProductVariation = {
    attributes: DefaultAttributeList;
    id: number;
    menu_order: number;
    price: string;
    stock_status: StockStatus;
    parentId: number;
  };

  export type ProductVariationList = ProductVariation[];

  export type ProductVariationsById = { [key: string]: ProductVariation };

  export type NormalizedProductVariations = {
    variations: ProductVariationsById;
  };
}
