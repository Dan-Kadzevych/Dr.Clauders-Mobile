import { schema } from 'normalizr';

const productSchema = new schema.Entity<import('ProductModels').Product>(
  'products',
);
export const productListSchema = [productSchema];

const categorySchema = new schema.Entity<import('CategoryModels').Category>(
  'categories',
);
export const categoryListSchema = [categorySchema];
