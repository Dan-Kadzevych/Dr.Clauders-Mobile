import { fetchProducts } from 'apis/wooCommerce/requests/products';
import actions from './actions';

export const getProducts = () => async (dispatch: import('redux').Dispatch) => {
  try {
    dispatch(actions.getProductsRequest());

    const response = await fetchProducts();

    dispatch(actions.getProductsSuccess(response.data));
  } catch (e) {
    dispatch(actions.getProductsFailure(e));
  }
};

export default getProducts;
