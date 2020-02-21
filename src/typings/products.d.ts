declare module 'ProductModels' {
  export type Product = {
    attributes: {
      id: number;
      name: string;
      position: number;
      visible: boolean;
      variation: boolean;
      options: string[];
    }[];
    categories: {
      id: number;
      name: string;
      slug: string;
    }[];
    default_attributes: {
      id: number;
      name: string;
      option: string;
    }[];
    images: ProductImageList;
    id: number;
    name: string;
    parent_id: number;
    price: string;
    price_range: string;
    short_description: string;
    stock_quantity: number | null;
    stock_status: 'instock' | 'outofstock' | 'onbackorder';
    type: 'simple' | 'grouped' | 'external' | 'variable';
    variations: number[];
  };

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

  export type ProductList = Product[];

  export type ProductsById = { [key: string]: Product };

  export type NormalizedProducts = { products: ProductsById };
}
