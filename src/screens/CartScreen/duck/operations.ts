import {
  fetchProductById,
  fetchProductVariations,
} from 'apis/wooCommerce/requests/products';
import CartApi from 'apis/AsyncStorage/CartApi';
import {
  formatProductVariationList,
  formatProductDetails,
} from 'utils/products';
import { normalizeProductDetails, normalizeProductVariations } from './utils';
import actions from './actions';

export const getCartProductsOverview = () => async (
  dispatch: import('redux').Dispatch,
): Promise<void> => {
  try {
    dispatch(actions.getCartProductsOverviewAsync.request());

    const cart = await CartApi.getCart();

    const cartData: {
      products: import('ProductModels').ProductDetailsList;
      variations: import('ProductModels').ProductVariationList;
    } = { products: [], variations: [] };

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

    await Promise.all(
      Object.keys(cartMapping).map(async productId => {
        const productPromise = fetchProductById(productId);
        const variationsPromise = fetchProductVariations(productId, {
          include: cartMapping[productId],
        });

        const [{ data: product }, { data: variations }] = await Promise.all([
          productPromise,
          variationsPromise,
        ]);

        cartData.products.push(formatProductDetails(product));
        cartData.variations.push(
          ...formatProductVariationList(variations, product.id),
        );
      }),
    );

    const normalizedProductsData = normalizeProductDetails(cartData.products);
    const normalizedVariationsData = normalizeProductVariations(
      cartData.variations,
    );

    dispatch(
      actions.getCartProductsOverviewAsync.success({
        normalizedProductsData,
        normalizedVariationsData,
        quantityById: cart.quantityById,
      }),
    );
  } catch (e) {
    dispatch(actions.getCartProductsOverviewAsync.failure(e));
  }
};

export const updateCartQuantity = (
  quantityByID: import('CartModels').QuantityById,
) => async (dispatch: import('redux').Dispatch): Promise<void> => {
  try {
    dispatch(actions.updateCartAsync.request());

    const cart = await CartApi.getCart();

    cart.quantityById = { ...cart.quantityById, ...quantityByID };

    await CartApi.setCart(cart);

    dispatch(
      actions.updateCartAsync.success({ quantityById: cart.quantityById }),
    );
  } catch (e) {
    dispatch(actions.updateCartAsync.failure(e));
  }
};

export const addToCart = (
  product: import('ProductModels').ProductDetails,
  variation: import('ProductModels').ProductVariation,
  quantity: string | number,
) => async (dispatch: import('redux').Dispatch): Promise<void> => {
  try {
    dispatch(actions.updateCartAsync.request());

    const productId = product.id;
    const variationId = variation.id;
    const cart = await CartApi.getCart();

    const cartItem = cart.itemsById[variationId];
    const cartItemQuantity = cart.quantityById[variationId];

    if (cartItem && cartItemQuantity) {
      cart.quantityById[variationId] =
        Number(cartItemQuantity) + Number(quantity);
    } else {
      cart.itemsById[variationId] = {
        variationId,
        productId,
      };
      cart.quantityById[variationId] = quantity;
    }

    await CartApi.setCart(cart);

    dispatch(
      actions.updateCartAsync.success({
        products: { [productId]: product },
        variations: { [variationId]: variation },
        quantityById: cart.quantityById,
      }),
    );
  } catch (e) {
    dispatch(actions.updateCartAsync.failure(e));
  }
};

export default {
  getCartProductsOverview,
  updateCartQuantity,
  addToCart,
} as const;
