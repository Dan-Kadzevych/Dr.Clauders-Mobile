import { schema } from 'normalizr';

const productDetailsSchema = new schema.Entity<
  import('ProductModels').ProductDetails
>('products');
const productDetailsListSchema = [productDetailsSchema];

const productVariationSchema = new schema.Entity<
  import('ProductModels').ProductVariation
>('variations');
const productVariationListSchema = [productVariationSchema];

export default {
  productDetailsListSchema,
  productVariationListSchema,
} as const;
