import { normalize } from 'normalizr';

import schemas from './schemas';

export const normalizeProductDetails = (
  products:
    | import('ProductModels').ProductDetailsList
    | import('ProductModels').ProductDetails,
) =>
  normalize<
    import('ProductModels').ProductDetails,
    import('ProductModels').NormalizedProductDetailsList,
    number[]
  >(products, schemas.productDetailsListSchema);

export const normalizeProductVariations = (
  variations: import('ProductModels').ProductVariationList,
) =>
  normalize<
    import('ProductModels').ProductVariation,
    import('ProductModels').NormalizedProductVariations,
    number[]
  >(variations, schemas.productVariationListSchema);
