import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  ProductsOverviewScreen,
  ProductDetailsScreen,
  FavoritesScreen,
  CartScreen,
} from 'screens';
import { getCartProducts } from 'screens/CartScreen/duck/operations';

/* StoreNavigator
============================================================================= */

const StoreBottomTab = createBottomTabNavigator<
  import('NavigatorModels').StoreBottomTabParamList
>();

const StoreNavigator: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartProducts());
  }, [dispatch]);

  return (
    <StoreBottomTab.Navigator>
      <StoreBottomTab.Screen name="Products" component={ProductsNavigator} />
      <StoreBottomTab.Screen name="Cart" component={CartNavigator} />
      <StoreBottomTab.Screen name="Favourites" component={FavoritesScreen} />
    </StoreBottomTab.Navigator>
  );
};

/* ProductsNavigator
============================================================================= */

const ProductsStack = createStackNavigator<
  import('NavigatorModels').ProductsStackParamList
>();

const ProductsNavigator: React.FC = () => (
  <ProductsStack.Navigator>
    <ProductsStack.Screen
      name="ProductsOverview"
      component={ProductsOverviewScreen}
    />
    <ProductsStack.Screen
      name="ProductDetails"
      component={ProductDetailsScreen}
    />
  </ProductsStack.Navigator>
);

/* CartNavigator
============================================================================= */

const CartStack = createStackNavigator<
  import('NavigatorModels').CartStackParamList
>();

const CartNavigator: React.FC = () => (
  <CartStack.Navigator>
    <CartStack.Screen name="CartOverview" component={CartScreen} />
    <CartStack.Screen name="ProductDetails" component={ProductDetailsScreen} />
  </CartStack.Navigator>
);

/* Export
============================================================================= */

export default StoreNavigator;
