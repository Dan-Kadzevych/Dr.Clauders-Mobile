import {
  fetchProductById,
  fetchProductVariations,
} from 'apis/wooCommerce/requests/products';
import actions from './actions';

export const getProductDetails = (id: number) => async (
  dispatch: import('redux').Dispatch,
): Promise<void> => {
  try {
    dispatch(actions.getProductAsync.request());

    const [{ data: product } /* { data: variations } */] = await Promise.all([
      fetchProductById(id),
      fetchProductVariations(id),
    ]);

    dispatch(actions.getProductAsync.success(product));
  } catch (e) {
    dispatch(actions.getProductAsync.failure(e));
  }
};

export default { getProductDetails } as const;
