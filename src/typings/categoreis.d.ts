declare module 'CategoryModels' {
  export type Category = {
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

  export type CategoryList = Category[];

  export type CategoriesById = { [key: string]: Category };

  export type NormalizedCategories = {
    categories: CategoriesById;
  };
}
