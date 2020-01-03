import { combineReducers } from 'redux';
import productsReducer from 'screens/ProductsScreen/duck/reducer';

const rootReducer = combineReducers({
  productsScreen: productsReducer,
});

export default rootReducer;
