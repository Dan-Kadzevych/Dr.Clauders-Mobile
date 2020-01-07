import { schema } from 'normalizr';

const productSchema = new schema.Entity<import('ProductModels').Product>(
  'products',
);
const productListSchema = [productSchema];

const categorySchema = new schema.Entity<import('CategoryModels').Category>(
  'categories',
);
const categoryListSchema = [categorySchema];

export { productListSchema, categoryListSchema };
