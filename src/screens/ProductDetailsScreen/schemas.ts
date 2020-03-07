import { schema } from 'normalizr';

export const productDetailsSchema = new schema.Entity<
  import('ProductModels').ProductDetails
>('product');

const productVariationSchema = new schema.Entity<
  import('ProductModels').ProductVariation
>('variations');
export const productVariationListSchema = [productVariationSchema];
