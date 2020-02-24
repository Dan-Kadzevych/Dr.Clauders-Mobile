declare module 'ProductModels' {
  type stockStatus = 'instock' | 'outofstock' | 'onbackorder';

  export type ProductResponse = {
    // attributes: {
    //   id: number;
    //   name: string;
    //   position: number;
    //   visible: boolean;
    //   variation: boolean;
    //   options: string[];
    // }[];
    // categories: {
    //   id: number;
    //   name: string;
    //   slug: string;
    // }[];
    // default_attributes: {
    //   id: number;
    //   name: string;
    //   option: string;
    // }[];
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
    // parent_id: number;
    // price: string;
    price_html: string;
    short_description: string;
    // stock_quantity: number | null;
    stock_status: stockStatus;
    _links?: { self: { href: string }[]; collection: { href: string }[] };
    // type: 'simple' | 'grouped' | 'external' | 'variable';
    // variations: number[];
  };

  export type ProductListResponse = ProductResponse[];

  export type ProductVariationResponse = {
    attributes: { id: number; name: string; option: string }[];
    id: number;
    menu_order: number;
    price: string;
    stock_status: stockStatus;
  };

  export type ProductVariationsResponse = ProductVariationResponse[];
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
