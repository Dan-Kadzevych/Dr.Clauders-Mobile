declare module 'CartModels' {
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

  export type CartItem = {
    image: string;
    price: string | number;
    name: string;
    quantity: string | number;
    id: string | number;
  };
}
