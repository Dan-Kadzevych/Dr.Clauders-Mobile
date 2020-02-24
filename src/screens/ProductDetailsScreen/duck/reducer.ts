import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import types from './types';

export type ProductDetailsState = import('utility-types').DeepReadonly<{
  product: import('ProductModels').Product | null;
}>;

export const initialState: ProductDetailsState = {
  product: null,
};

const productReducer = createReducer(initialState.product).handleType(
  types.getProductSuccess,
  (state, { payload: { product } }) => product,
);

export default combineReducers({
  product: productReducer,
});
