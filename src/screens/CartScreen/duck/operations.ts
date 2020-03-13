import AsyncStorage from '@react-native-community/async-storage';
import { normalize } from 'normalizr';

import {
  fetchProductById,
  fetchProductVariations,
} from 'apis/wooCommerce/requests/products';
import {
  formatProductVariationList,
  formatProductDetails,
} from 'screens/ProductDetailsScreen/duck/utils';
import actions from './actions';
import schemas from './schemas';

export const getCartProductsOverview = () => async (
  dispatch: import('redux').Dispatch,
): Promise<void> => {
  try {
    dispatch(actions.getCartProductsOverviewAsync.request());

    const cartJson = await AsyncStorage.getItem('cart');
    const cartData: {
      products: import('ProductModels').ProductDetailsList;
      variations: import('ProductModels').ProductVariationList;
    } = { products: [], variations: [] };
    let quantityById: import('Cart').QuantityById = {};

    if (cartJson) {
      const cart: import('Cart').Cart = JSON.parse(cartJson);
      const cartMapping = Object.values(cart.itemsById).reduce(
        (
          acc: { [key: string]: import('General').Id[] },
          { productId, variationId },
        ) => {
          if (acc[productId]) {
            acc[productId].push(variationId);

            return acc;
          }

          acc[productId] = [variationId];

          return acc;
        },
        {},
      );

      const data = await Promise.all(
        Object.keys(cartMapping).map(async productId => {
          const variationsPromise = fetchProductVariations(productId, {
            include: cartMapping[productId],
          });
          const productPromise = fetchProductById(productId);

          const [{ data: product }, { data: variations }] = await Promise.all([
            productPromise,
            variationsPromise,
          ]);

          return { product, variations };
        }),
      );

      quantityById = cart.quantityById;

      data.forEach(({ product, variations }) => {
        cartData.products.push(formatProductDetails(product));
        cartData.variations.push(
          ...formatProductVariationList(variations, product.id),
        );
      });
    }

    const normalizedProductsData = normalize<
      import('ProductModels').ProductDetails,
      import('ProductModels').NormalizedProductDetailsList,
      number[]
    >(cartData.products, schemas.productDetailsListSchema);
    const normalizedVariationsData = normalize<
      import('ProductModels').ProductVariation,
      import('ProductModels').NormalizedProductVariations,
      number[]
    >(cartData.variations, schemas.productVariationListSchema);

    dispatch(
      actions.getCartProductsOverviewAsync.success({
        normalizedProductsData,
        normalizedVariationsData,
        quantityById,
      }),
    );
  } catch (e) {
    dispatch(actions.getCartProductsOverviewAsync.failure(e));
  }
};

export const updateCartQuantity = (
  quantityByID: import('Cart').QuantityById,
) => async (dispatch: import('redux').Dispatch): Promise<void> => {
  try {
    dispatch(actions.updateCartAsync.request());

    const cartJson = await AsyncStorage.getItem('cart');
    let cart: import('Cart').Cart = { itemsById: {}, quantityById: {} };

    if (cartJson) {
      cart = JSON.parse(cartJson);
      cart.quantityById = { ...cart.quantityById, ...quantityByID };
    }

    await AsyncStorage.setItem('cart', JSON.stringify(cart));

    dispatch(
      actions.updateCartAsync.success({ quantityById: cart.quantityById }),
    );
  } catch (e) {
    dispatch(actions.updateCartAsync.failure(e));
  }
};

export default { getCartProductsOverview, updateCartQuantity } as const;
