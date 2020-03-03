declare module 'ProductModels' {
  type StockStatus = 'instock' | 'outofstock' | 'onbackorder';

  /* Product Overview Typings
  ============================================================================= */

  export type ProductOverviewResponse = {
    id: number;
    images: {
      id: number;
      date_created: string;
      date_created_gmt: string;
      date_modified: string;
      date_modified_gmt: string;
      src: string;
      name: string;
      alt: string;
    }[];
    name: string;
    price_html: string;
    short_description: string;
    stock_status: StockStatus;
    type: 'simple' | 'grouped' | 'external' | 'variable';
  };

  export type ProductOverviewListResponse = ProductOverviewResponse[];

  /* Product Details Typings
============================================================================= */

  export type ProductDetailsResponse = ProductOverviewResponse & {
    attributes: {
      id: number;
      name: string;
      position: number;
      visible: boolean;
      variation: boolean;
      options: string[];
    }[];
    default_attributes: {
      id: number;
      name: string;
      option: string;
    }[];
    meta_data: {
      id: number;
      key: 'string';
      value: any; // eslint-disable-line @typescript-eslint/no-explicit-any
    }[];
    variations: number[];
    _links: { self: { href: string }[]; collection: { href: string }[] };
  };

  /* Product Variation Typings
============================================================================= */

  export type ProductVariationResponse = {
    attributes: { id: number; name: string; option: string }[];
    id: number;
    menu_order: number;
    price: string;
    stock_status: StockStatus;
  };

  export type ProductVariationListResponse = ProductVariationResponse[];
}

declare module 'CategoryModels' {
  export type CategoryResponse = {
    count: number;
    id: number;
    image: {
      id: number;
      name: string;
      src: string;
    } | null;
    menu_order: number;
    name: string;
    parent: number;
  };

  export type CategoryListResponse = CategoryResponse[];
}
