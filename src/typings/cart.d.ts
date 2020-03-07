declare module 'Cart' {
  export type Cart = {
    items: {
      [key: string]: number;
    };
  };

  export type CartProduct = {
    id: string;
    quantity: number;
  };
}
