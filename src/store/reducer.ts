import { combineReducers } from 'redux';
import productsOverviewReducer from 'screens/ProductsOverviewScreen/duck';
import productDetailsReducer from 'screens/ProductDetailsScreen/duck';

const rootReducer = combineReducers({
  productsOverview: productsOverviewReducer,
  productDetails: productDetailsReducer,
});

export default rootReducer;
