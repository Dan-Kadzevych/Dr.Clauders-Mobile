import { combineReducers } from 'redux';
import productsOverviewReducer from 'screens/ProductsOverviewScreen/duck/reducer';

const rootReducer = combineReducers({
  productsOverview: productsOverviewReducer,
});

export default rootReducer;
