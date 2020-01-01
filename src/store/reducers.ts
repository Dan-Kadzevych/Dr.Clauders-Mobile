import { combineReducers } from 'redux';
import productsReducer from 'screens/ProductsScreen/duck/reducer';

export default combineReducers({
  productsScreen: productsReducer,
});
