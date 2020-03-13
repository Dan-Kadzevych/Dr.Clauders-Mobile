declare module 'Cart' {
  export type CartProduct = {
    productId: import('General').Id;
    variationId: import('General').Id;
  };

  export type QuantityById = {
    [key: string]: number | string;
  };

  export type Cart = {
    itemsById: {
      [key: string]: CartProduct;
    };
    quantityById: QuantityById;
  };
}
