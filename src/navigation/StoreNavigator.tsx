import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  ProductsOverviewScreen,
  ProductDetailsScreen,
  FavoritesScreen,
} from '../screens';

/* StoreNavigator
============================================================================= */

const StoreBottomTab = createBottomTabNavigator<
  import('NavigatorModels').StoreBottomTabParamList
>();

const StoreNavigator: React.FC = () => (
  <StoreBottomTab.Navigator>
    <StoreBottomTab.Screen name="Products" component={ProductsNavigator} />
    <StoreBottomTab.Screen name="Favourites" component={FavoritesScreen} />
  </StoreBottomTab.Navigator>
);

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

/* Export
============================================================================= */

export default StoreNavigator;
