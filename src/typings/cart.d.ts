declare module 'Cart' {
  export type CartStorage = {
    items: {
      [key: string]: string;
    };
  };
}
