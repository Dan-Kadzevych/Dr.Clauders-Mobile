import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ProductsScreen, FavoritesScreen } from 'screens';

/* Navigator Setup
============================================================================= */

const BottomTab = createBottomTabNavigator<
  import('NavigatorModels').RootBottomTabParamList
>();

/* AppNavigator
============================================================================= */

const AppNavigator: React.FC = () => (
  <BottomTab.Navigator>
    <BottomTab.Screen name="Products" component={ProductsScreen} />
    <BottomTab.Screen name="Favourites" component={FavoritesScreen} />
  </BottomTab.Navigator>
);

/* Export
============================================================================= */

export default AppNavigator;
