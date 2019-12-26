import actions from './actions';

export const getProducts = () => async (dispatch: import('redux').Dispatch) => {
  try {
    dispatch(actions.getProductsRequest());

    dispatch(actions.getProductsSuccess([]));
  } catch (e) {
    dispatch(actions.getProductsFailure(e));
  }
};

export default getProducts;
