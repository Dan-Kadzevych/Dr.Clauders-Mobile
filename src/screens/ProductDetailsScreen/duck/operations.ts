import {
  fetchProductById,
  fetchProductVariations,
} from 'apis/wooCommerce/requests/products';
import actions from './actions';

export const getProductDetails = (id: number) => async (
  dispatch: import('redux').Dispatch,
): Promise<void> => {
  try {
    dispatch(actions.getProductDetailsAsync.request());

    const { data: product } = await fetchProductById(id);

    dispatch(actions.getProductDetailsAsync.success(product));
  } catch (e) {
    dispatch(actions.getProductDetailsAsync.failure(e.message));
  }
};

export const getProductVariations = (id: number) => async (
  dispatch: import('redux').Dispatch,
): Promise<void> => {
  try {
    dispatch(actions.getProductVariationsAsync.request());

    const { data } = await fetchProductVariations(id);

    dispatch(actions.getProductVariationsAsync.success(data));
  } catch (e) {
    dispatch(actions.getProductVariationsAsync.failure(e));
  }
};

export default { getProductDetails, getProductVariations } as const;
