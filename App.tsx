import React from 'react';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import store from './src/store';
import { ProductsScreen, FavoritesScreen } from './src/screens';

const BottomTab = createBottomTabNavigator();

const App = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Provider store={store}>
        <BottomTab.Navigator>
          <BottomTab.Screen name="Products" component={ProductsScreen} />
          <BottomTab.Screen name="Favourites" component={FavoritesScreen} />
        </BottomTab.Navigator>
      </Provider>
    </NavigationContainer>
  </SafeAreaProvider>
);

export default App;
