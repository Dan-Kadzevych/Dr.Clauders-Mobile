import { combineReducers } from 'redux';

import productsOverviewReducer from 'screens/ProductsOverviewScreen/duck';
import productDetailsReducer from 'screens/ProductDetailsScreen/duck';
import cartReducer from 'screens/CartScreen/duck';

const rootReducer = combineReducers({
  productsOverview: productsOverviewReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

export default rootReducer;
