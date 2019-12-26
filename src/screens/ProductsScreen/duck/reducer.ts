import createReducer from 'utils/redux/createReducer';
import * as types from './types';

type ProductsScreenState = {
  products: { name: string }[];
  error: { message: string };
};

const initialState: ProductsScreenState = {
  products: [],
  error: {
    message: '',
  },
};

const reducer = createReducer<
  ProductsScreenState,
  import('./actions').ActionTypes
>(initialState, {
  [types.getProductsSuccess]: (state, action) => ({
    ...state,
    products: action.payload.products,
  }),
});

export default reducer;
