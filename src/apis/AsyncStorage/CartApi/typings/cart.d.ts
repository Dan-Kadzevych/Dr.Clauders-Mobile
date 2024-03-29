declare module 'CartModels' {
  export type CartProduct = {
    productId: import('General').Id;
    variationId: import('General').Id;
  };

  export type QuantityById = {
    [key: string]: number;
  };

  export type Cart = {
    itemsById: {
      [key: string]: CartProduct;
    };
    quantityById: QuantityById;
  };

  export type CartItem = {
    image: string;
    price: string | number;
    name: string;
    quantity: number;
    variationId: number;
    productId: number;
  };
}
